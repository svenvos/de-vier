import { Outlet } from "react-router";
import MenuNavbar from "./Menu/MenuNavbar.jsx";
import "../styles/Menu.css";

export default function MenuLayout() {
    return (
        <main>
            <div className="container">
                <MenuNavbar />
                <Outlet />
            </div>
        </main>
    );
}
