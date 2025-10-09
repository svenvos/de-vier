import ContactDetails from "../components/ContactDetails.jsx";

export default function Jobs() {
    return (
        <main>
            <div className="container">
                <h1 className="font-size-32">Vacatures</h1>
                <p>We zijn regelmatig op zoek naar nieuwe collega's die ons team willen versterken. Bel of mail ons gerust, of loop even binnen voor een kop koffie om kennis te maken.</p>
                <p>Stuur bij een sollicitatie per e-mail ook uw cv mee.</p>
                <ContactDetails />
            </div>
        </main>
    );
}
