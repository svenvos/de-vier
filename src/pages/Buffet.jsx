import BuffetMenu from "../components/BuffetMenu";
import ContactDetails from "../components/ContactDetails";
import "../styles/Buffet.css";

export default function Buffet() {
    return (
        <main>
            <div className="container">
                <h1>Arrangementen</h1>
                <p>
                    Of het nu gaat om een familiefeest, bedrijfsuitje of jubileum — wij bieden speciaal samengestelde arrangementen voor grote groepen.
                    Geniet van heerlijke gerechten, gastvrije service en een sfeervolle setting die past bij elke gelegenheid.
                    Neem contact met ons op voor meer informatie.
                </p>
                <ContactDetails />
                <BuffetMenu />
                <p className="footnote">* Klik op de foto's om door alle arrangementen te scrollen.</p>
            </div>
        </main>
    );
}
