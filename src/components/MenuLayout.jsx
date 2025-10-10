import { Outlet } from "react-router";
import MenuNavbar from "./Menu/MenuNavbar.jsx";
import "../styles/Menu.css";
import { openWidget } from "../utils/widgetUtils.js";

export default function MenuLayout() {
    return (
        <main>
            <div className="container">
                <MenuNavbar />
                <Outlet />
                <button onClick={openWidget} className="btn sec-btn">Reserveer uw tafel</button>
            </div>
        </main>
    );
}
