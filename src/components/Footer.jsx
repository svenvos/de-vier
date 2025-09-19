import OpeningHours from "./OpeningHours.jsx";
import Address from "./Address.jsx";
import ContactDetails from "./ContactDetails.jsx";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer>
            <OpeningHours />
            <Address />
            <ContactDetails />
        </footer>
    );
}
