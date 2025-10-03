import BuffetMenu from "../components/BuffetMenu";
import ContactDetails from "../components/ContactDetails";
import "../styles/Buffet.css";

export default function Buffet() {
    return (
        <main>
            <div className="container">
                <h1>Arrangementen</h1>
                <p>Mocht u één of meerdere arrangementen willen reserveren, gelieve contact met ons opnemen via telefoon of email.</p>
                <ContactDetails />
                <BuffetMenu />
                <p className="footnote">* Klik op de foto's om door alle arrangementen te scrollen.</p>
            </div>
        </main>
    );
}
