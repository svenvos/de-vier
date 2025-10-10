import { Outlet } from "react-router";
import MenuNavbar from "./Menu/MenuNavbar.jsx";
import "../styles/Menu.css";

export default function MenuLayout() {
    function openWidget() {
        _gstpln.openWidget()
    }

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
