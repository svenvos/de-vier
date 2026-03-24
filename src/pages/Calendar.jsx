import { useState, useEffect } from "react";
import "../styles/Calendar.css";

const isLocalDevHost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
const API_BASE = isLocalDevHost ? "http://localhost:3001" : "";

/**
 * Render the events calendar and load event data from the API when the component mounts.
 *
 * Renders a header and conditionally displays loading, error, or empty-state messages. When events are available, renders a list of event cards showing title, description, date, starting time, and an optional poster image.
 *
 * @returns {JSX.Element} The Calendar component UI.
 */
export default function Calendar() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE}/api/events`)
            .then(res => {
                if (!res.ok) throw new Error("Kon agenda niet laden");
                return res.json();
            })
            .then(data => {
                setEvents(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <main>
            <div className="container">
                <h1 className="font-size-32 event-header">Evenementen agenda</h1>
                {loading && <p>Laden...</p>}
                {error && <p>De agenda kon niet geladen worden. Probeer het later opnieuw.</p>}
                {!loading && !error && events.length === 0 && <p>Op dit moment zijn er geen geplande evenementen.</p>}
                <div className="events-container">
                    {events.map(event => (
                        <div key={event.id} className="event">
                            <h2>{event.title}</h2>
                            <p className="event-description">{event.description}</p>
                            <div className="event-details">
                                <h3>Datum</h3>
                                <p>{event.date}</p>
                                <h3>Aanvang</h3>
                                <p>{event.startingTime}</p>
                            </div>
                            {event.poster && <img src={event.poster} alt={`Poster van ${event.title}`} />}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
