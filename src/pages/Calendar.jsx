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
                    <h3>Tijd</h3>
                    <p>{event.time}</p>
                </div>
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
