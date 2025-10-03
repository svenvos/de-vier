import ContactDetails from "../components/ContactDetails.jsx";

export default function Jobs() {
    return (
        <main>
            <div className="container">
                <h1 className="font-size-32">Vacatures</h1>
                <p>Wij zijn altijd op zoek naar extra medewerkers. Gelieve contact met ons opnemen via telefoon of email. Ook mag u eens gezellig langskomen voor een kopje koffie.</p>
                <p>Als u via de mail contact opneemt, stuur dan een CV mee.</p>
                <ContactDetails />
            </div>
        </main>
    );
}
