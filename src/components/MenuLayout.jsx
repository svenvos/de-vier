import { Outlet, useLocation } from "react-router";
import MenuNavbar from "./Menu/MenuNavbar.jsx";
import "../styles/Menu.css";
import { openWidget } from "../utils/widgetUtils.js";
import ContactDetails from "./ContactDetails.jsx";

export default function MenuLayout() {
    const location = useLocation();
    const isChristmasMenu = location.pathname === "/menu/christmas";
    const isValentineMenu = location.pathname === "/menu/valentine";

    return (
        <main>
            <div className="container">
                <MenuNavbar />
                <Outlet />
                {!isChristmasMenu && !isValentineMenu ? (
                    <button onClick={openWidget} className="btn sec-btn">Reserveer uw tafel</button>
                ) : (
                    <>
                        <p>Reserveren voor {isValentineMenu ? "valentijn" : "kerst"} alleen mogelijk via telefoon of email.</p>
                        <ContactDetails />
                    </>
                )}
            </div>
        </main>
    );
}
