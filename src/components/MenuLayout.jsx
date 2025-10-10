import { Outlet, useLocation } from "react-router";
import MenuNavbar from "./Menu/MenuNavbar.jsx";
import "../styles/Menu.css";
import { openWidget } from "../utils/widgetUtils.js";
import ContactDetails from "./ContactDetails.jsx";

export default function MenuLayout() {
    const location = useLocation();
    const isChristmasMenu = location.pathname === "/menu/christmas";

    return (
        <main>
            <div className="container">
                <MenuNavbar />
                <Outlet />
                {!isChristmasMenu ? (
                    <button onClick={openWidget} className="btn sec-btn">Reserveer uw tafel</button>
                ) : (
                    <>
                        <p>Reserveren voor kerst alleen mogelijk via telefoon of email.</p>
                        <ContactDetails />
                    </>
                )}
            </div>
        </main>
    );
}
