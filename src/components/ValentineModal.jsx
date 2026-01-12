import "../styles/ValentineModal.css";
import { FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import ContactDetails from "./ContactDetails.jsx";

export default function ValentineModal() {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    useEffect(() => {
        const hasUserClosedModal = sessionStorage.getItem("valentineModalClosed");
        
        if (!hasUserClosedModal) {
            const valentineModalLatency = setTimeout(() => {
                setIsModalOpen(true);
            }, 1000);

            return () => {
                clearTimeout(valentineModalLatency);
            }
        }
    }, []);

    function closeModal() {
        setIsModalOpen(false);
        sessionStorage.setItem("valentineModalClosed", "true");
    }

    return isModalOpen && (
        <div className="valentine-modal">
            <div className="valentine-modal-header">
                <FaXmark onClick={closeModal} className="color-light" />
            </div>
            <div className="valentine-modal-content">
                <h2 className="font-size-32 font-weight-600 txt-center color-light">Valentijn bij De Vier Jaargetijden</h2>
                <p className="txt-center color-light font-manrope">
                    Laat je deze Valentijnsdag verwennen met een sfeervol diner vol culinaire verwennerijen.
                    Geniet samen van verfijnde gerechten, een intieme ambiance en een avond vol liefde.
                    Reserveer op tijd en beleef een onvergetelijke Valentijn bij ons.
                </p>
                <Link to="menu/valentine" className="btn sec-btn">Bekijk het valentijnsmenu</Link>
                <p className="footnote color-light">*Reserveren alleen via telefoon of email.</p>
                <ContactDetails className="color-light" />
            </div>
        </div>
    );
}
