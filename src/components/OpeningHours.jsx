export default function OpeningHours() {
    const openingHours = [
        {day: "Maandag", opening: "12:00", closing: "23:00"},
        {day: "Dinsdag"},
        {day: "Woensdag", opening: "12:00", closing: "23:00"},
        {day: "Donderdag", opening: "12:00", closing: "23:00"},
        {day: "Vrijdag", opening: "12:00", closing: "01:00"},
        {day: "Zaterdag", opening: "12:00", closing: "01:00"},
        {day: "Zondag", opening: "12:00", closing: "01:00"}
    ];

    const openingHourElements = openingHours.map(item => {
        return (
            <p className="color-light font-size-20 font-weight-600">{item.day}:
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
