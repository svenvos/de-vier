import "../styles/ChristmasModal.css";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router";
import ContactDetails from "./ContactDetails.jsx";

export default function ChristmasModal() {
    const [ isModalOpen, setIsModalOpen ] = useState(true);

    function closeModal() {
        setIsModalOpen(false);
    }

    return isModalOpen && (
        <div className="christmas-modal">
            <div className="christmas-modal-header">
                <FaXmark onClick={closeModal} className="color-light" />
            </div>
            <div className="christmas-modal-content">
                <h2 className="font-size-32 font-weight-600 txt-center color-light">Kerst bij De Vier Jaargetijden</h2>
                <p className="font-size-18 txt-center color-light">Kom gezellig dineren bij De Vier Jaargetijden tijdens de kerstperiode.</p>
                <Link to="menu/christmas" className="btn sec-btn">Bekijk het kerstmenu</Link>
                <p className="footnote color-light">*Reserveren alleen via telefoon of email.</p>
                <ContactDetails className="color-light" />
            </div>
        </div>
    );
}
