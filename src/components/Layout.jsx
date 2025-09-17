import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
