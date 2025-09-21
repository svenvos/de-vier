import OpeningHours from "./OpeningHours.jsx";
import Address from "./Address.jsx";
import ContactDetails from "./ContactDetails.jsx";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer>
            <OpeningHours />
            <div className="container">
                <h2 className="color-light font-size-32">Adres</h2>
                <Address className="color-light" />
            </div>
            <div className="container">
                <h2 className="color-light font-size-32">Contact</h2>
                <ContactDetails className="color-light" />
            </div>
        </footer>
    );
}
