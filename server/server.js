const PORT = process.env.BACKEND_PORT || 3001;
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

let cache = { data: null, fetchedAt: 0 };

/**
 * Strip HTML from a string, convert <br> tags to newlines, decode common HTML entities, and trim whitespace.
 * @param {string|any} html - Input that may contain HTML; falsy values become an empty string.
 * @returns {string} The cleaned text with HTML tags removed, `<br>` converted to newlines, common entities decoded, and surrounding whitespace trimmed.
 */
function stripHtml(html) {
    return (html || "")
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<[^>]+>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, " ")
        .trim();
}

/**
 * Format a date value as a Dutch long date (e.g., "1 januari 2026").
 * @param {string|Date|number} dateStr - A value parseable by `Date`. If falsy, an empty string is returned.
 * @returns {string} The date formatted for `nl-NL` with day, month (long) and year, or `""` when `dateStr` is falsy.
 */
function formatDutchDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

/**
 * Convert a Google Calendar event item into a normalized event object for the frontend.
 *
 * @param {Object} item - Google Calendar event object (an item from the Events API).
 * @returns {{id: string, title: string, date: string, startingTime: string, description: string, poster: string|null}} Normalized event with:
 *  - `id`: event identifier,
 *  - `title`: event summary or empty string,
 *  - `date`: Dutch-formatted date,
 *  - `startingTime`: Dutch-formatted time or `"Hele dag"` for all-day events,
 *  - `description`: plain-text description with HTML removed and poster URL line removed if present,
 *  - `poster`: extracted poster URL when the last non-empty description line is a standalone `https://...` URL, otherwise `null`.
 */
function transformEvent(item) {
    const hasTime = !!item.start?.dateTime;
    const startRaw = item.start?.dateTime || item.start?.date || "";

    const date = formatDutchDate(startRaw);
    const startingTime = hasTime
        ? new Date(item.start.dateTime).toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })
        : "Hele dag";

    let description = stripHtml(item.description);
    let poster = null;

    // Extract poster: if the last non-empty line is a standalone https URL, use it as poster
    const lines = description.split("\n").map(l => l.trim());
    const lastLine = lines.findLast(l => l.length > 0) ?? "";
    if (/^https:\/\/\S+$/i.test(lastLine)) {
        poster = lastLine;
        const lastIndex = lines.lastIndexOf(lastLine);
        description = lines.slice(0, lastIndex).join("\n").trim();
    }

    return {
        id: item.id,
        title: item.summary || "",
        date,
        startingTime,
        description,
        poster,
    };
}

/**
 * Fetches upcoming events from the configured Google Calendar and returns them in a normalized shape.
 *
 * @returns {Array<{id: string, title: string, date: string, startingTime: string, description: string, poster: string|null}>} An array of event objects where:
 *  - `id`: event identifier,
 *  - `title`: event title (or empty string),
 *  - `date`: Dutch-formatted date string,
 *  - `startingTime`: Dutch-formatted time or `"Hele dag"` for all-day events,
 *  - `description`: cleaned plain-text description,
 *  - `poster`: URL extracted from the last line of the description or `null`.
 * @throws {Error} If `GOOGLE_CALENDAR_API_KEY` or `GOOGLE_CALENDAR_ID` is missing, or if the Google Calendar API responds with a non-OK status (error message includes HTTP status and response body).
 */
async function fetchFromGoogleCalendar() {
    if (!API_KEY || !CALENDAR_ID) {
        throw new Error("Missing GOOGLE_CALENDAR_API_KEY or GOOGLE_CALENDAR_ID in environment");
    }

    const timeMin = encodeURIComponent(new Date().toISOString());
    const calId = encodeURIComponent(CALENDAR_ID);
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?key=${API_KEY}&timeMin=${timeMin}&singleEvents=true&orderBy=startTime&maxResults=50`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    let res;
    try {
        res = await fetch(url, { signal: controller.signal });
    } catch (err) {
        clearTimeout(timeoutId);
        if (err.name === "AbortError") throw new Error("Google Calendar fetch timed out");
        throw err;
    }
    clearTimeout(timeoutId);
    if (!res.ok) {
        const body = await res.text();
        throw new Error(`Google Calendar API responded ${res.status}: ${body}`);
    }

    const json = await res.json();
    return (json.items || []).map(transformEvent);
}

/**
 * Retrieve upcoming calendar events, using an in-memory cache to avoid repeated upstream requests.
 *
 * If cached events exist and were fetched less than the configured TTL ago, the cached list is returned.
 * Otherwise the function fetches fresh events, updates the cache timestamp, and returns the new list.
 *
 * @returns {Array<Object>} An array of event objects with shape `{ id, title, date, startingTime, description, poster }`.
 */
async function getEvents() {
    const now = Date.now();
    if (cache.data && now - cache.fetchedAt < CACHE_TTL) {
        return cache.data;
    }
    const data = await fetchFromGoogleCalendar();
    cache = { data, fetchedAt: now };
    return data;
}

Bun.serve({
    port: PORT,
    async fetch(req) {
        const url = new URL(req.url);
        const origin = req.headers.get("origin") ?? "";

        const baseHeaders = { "Content-Type": "application/json" };
        // Allow CORS for local development only
        const isLocalOrigin = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin);
        if (isLocalOrigin) {
            baseHeaders["Access-Control-Allow-Origin"] = origin;
            baseHeaders["Access-Control-Allow-Methods"] = "GET, OPTIONS";
            baseHeaders["Access-Control-Allow-Headers"] = "Content-Type";
        }

        if (req.method === "OPTIONS") {
            return new Response(null, { status: 204, headers: baseHeaders });
        }

        if (req.method === "GET" && url.pathname === "/api/events") {
            try {
                const events = await getEvents();
                return Response.json(events, { headers: baseHeaders });
            } catch (err) {
                console.error("Failed to fetch calendar events:", err.message);
                return Response.json({ error: "Could not fetch events" }, { status: 502, headers: baseHeaders });
            }
        }

        return new Response("Not found", { status: 404 });
    },
});

console.log(`Backend running on http://localhost:${PORT}`);
