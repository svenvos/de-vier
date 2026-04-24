import useFetch from "../hooks/useFetch";
import "../styles/Calendar.css";

export default function Calendar() {
    const {
        data: events,
        error,
        loading
    } = useFetch(`http://localhost:1337/api/events?populate=*`);

    return (
        <main>
            <div className="container">
                <h1 className="font-size-32 event-header">
                    Evenementen agenda
                </h1>
                <div className="events-container">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Op dit moment zijn er geen geplande evenementen</p>
                    ) : events ? (
                        events?.data?.map((event) => (
                            <div key={event.id} className="event">
                                <h2>{event.title}</h2>
                                <p className="event-description">
                                    {event.description}
                                </p>
                                <div className="event-details">
                                    <h3>Datum</h3>
                                    <p>
                                        {new Date(
                                            event.date,
                                        ).toLocaleDateString("nl-NL", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                    <h3>Aanvang</h3>
                                    <p>{event.startingTime.slice(0, 5)}</p>
                                </div>
                                {event.poster && (
                                    <img
                                        src={`http://localhost:1337${event.poster.url}`}
                                        alt={`Poster van ${event.title}`}
                                    />
                                )}
                            </div>
                        ))
                    ) : (
                        <p>Op dit moment zijn er geen geplande evenementen.</p>
                    )}
                </div>
            </div>
        </main>
    );
}
