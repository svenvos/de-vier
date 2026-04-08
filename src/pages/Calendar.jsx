import "../styles/Calendar.css";

export default function Calendar() {
    return (
        <main>
            <div className="container">
                <h1 className="font-size-32 event-header">Evenementen agenda</h1>
                <p>Op dit moment zijn er geen geplande evenementen</p>
                <div className="events-container">
                    {/* {events.map(event => (
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
                    ))} */}
                </div>
            </div>
        </main>
    );
}
