import { Outlet } from "react-router";
import MenuNavbar from "./Menu/MenuNavbar.jsx";

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
