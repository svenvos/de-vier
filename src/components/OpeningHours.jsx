import { nanoid } from "nanoid";

export default function OpeningHours({ className }) {
    const openingHours = [
        {
            id: nanoid(),
            day: "Maandag",
            opening: "12:00",
            closing: "23:00"
        },
        {
            id: nanoid(),
            day: "Dinsdag"
        },
        {
            id: nanoid(),
            day: "Woensdag",
            opening: "12:00",
            closing: "23:00"
        },
        {
            id: nanoid(),
            day: "Donderdag",
            opening: "12:00",
            closing: "23:00"
        },
        {
            id: nanoid(),
            day: "Vrijdag",
            opening: "12:00",
            closing: "01:00"
        },
        {
            id: nanoid(),
            day: "Zaterdag",
            opening: "12:00",
            closing: "01:00"
        },
        {
            id: nanoid(),
            day: "Zondag",
            opening: "12:00",
            closing: "01:00"
        }
    ];

    const openingHourElements = openingHours.map(item => {
        return (
            <p className={`font-size-20 font-weight-600 ${className ? className : ""}`} key={item.id}>{item.day}:
                {
                    item.opening ? (
                        <span className={`font-size-16 font-weight-400 font-manrope ${className ? className : ""}`}>{item.opening}-{item.closing}</span>
                    ) : (
                        <span className={`font-size-16 font-weight-400 font-manrope ${className ? className : ""}`}>Gesloten*</span>
                    )
                }
            </p>
        );
    });

    return (
            <div className="opening-hours">
                {openingHourElements}
                <p className="opening-hours-footnote color-light font-manrope">* In overleg geopend voor groepsarrangementen</p>
            </div>
    );
}
