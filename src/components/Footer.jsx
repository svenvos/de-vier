import { FaInstagram, FaFacebookF } from "react-icons/fa6";
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
            <div className="container">
                <h2 className="color-light font-size-32">Socials</h2>
                <div className="icons">
                    <a href="https://www.instagram.com/de_vierkampen/" target="_blank" className="color-light">
                        <FaInstagram className="font-size-24" />
                    </a>
                    <a href="https://www.facebook.com/devierkampen" target="_blank" className="color-light">
                        <FaFacebookF className="font-size-24" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
