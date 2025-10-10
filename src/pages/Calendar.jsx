import "../styles/Calendar.css";
import { events } from "../utils/events";

export default function Calendar() {
    const eventElements = events.map(event => {
        return (
            <div key={event.id} className="event">
                <h2>{event.title}</h2>
                <p className="event-description">{event.description}</p>
                <div className="event-details"> 
                    <h3>Datum</h3>
                    <p>{event.date}</p>
                    <h3>Aanvang</h3>
                    <p>{event.startingTime}</p>
                </div>
                {
                    event.poster ?
                    <img src={event.poster} alt={`Poster van ${event.title}`} /> :
                    null
                }
            </div>
        );
    });
    
    return (
        <main>
            <div className="container">
                <h1 className="font-size-32">Evenementen agenda</h1>
                <div className="events-container">
                    {eventElements}
                </div>
            </div>
        </main>
    );
}
