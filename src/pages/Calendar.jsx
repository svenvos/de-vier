import { useState, useEffect } from "react";
import "../styles/Calendar.css";

const API_BASE = window.location.hostname === "localhost" ? "http://localhost:3001" : "";

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
                setEvents(data);
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
