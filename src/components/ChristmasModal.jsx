import "../styles/ChristmasModal.css";
import { FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import ContactDetails from "./ContactDetails.jsx";

export default function ChristmasModal() {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    useEffect(() => {
        const hasUserClosedModal = sessionStorage.getItem("christmasModalClosed");
        
        if (!hasUserClosedModal) {
            const christmasModalLatency = setTimeout(() => {
                setIsModalOpen(true);
            }, 1000);

            return () => {
                clearTimeout(christmasModalLatency);
            }
        }
    }, []);

    function closeModal() {
        setIsModalOpen(false);
        sessionStorage.setItem("christmasModalClosed", "true");
    }

    return isModalOpen && (
        <div className="christmas-modal">
            <div className="christmas-modal-header">
                <FaXmark onClick={closeModal} className="color-light" />
            </div>
            <div className="christmas-modal-content">
                <h2 className="font-size-32 font-weight-600 txt-center color-light">Kerst bij De Vier Jaargetijden</h2>
                <p className="txt-center color-light font-manrope">
                    Laat je deze kerst verwennen met een sfeervol diner vol culinaire verrassingen.
                    Geniet van heerlijke gerechten, een warme ambiance en samen zijn met de mensen die je liefhebt.
                    Reserveer tijdig en beleef een onvergetelijke kerst bij ons!
                </p>
                <Link to="menu/christmas" className="btn sec-btn">Bekijk het kerstmenu</Link>
                <p className="footnote color-light">*Reserveren alleen via telefoon of email.</p>
                <ContactDetails className="color-light" />
            </div>
        </div>
    );
}
