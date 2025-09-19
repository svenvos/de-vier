import { nanoid } from "nanoid";

export default function OpeningHours() {
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
            <p className="color-light font-size-20 font-weight-600" key={item.id}>{item.day}:
                {
                    item.opening ? (
                        <span className="color-light font-size-16 font-weight-400">{item.opening}-{item.closing}</span>
                    ) : (
                        <span className="color-light font-size-16 font-weight-400">Gesloten</span>
                    )
                }
            </p>
        );
    });

    return (
        <div className="container">
            <h2 className="color-light font-size-32">Openingstijden</h2>
            <div className="opening-hours">
                {openingHourElements}
            </div>
        </div>
    );
}
