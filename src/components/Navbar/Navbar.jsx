import "../../styles/Navbar.css";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";
import NavbarMenuItems from "./NavbarMenuItems.jsx";
import { createContext } from "react";

export const HeaderContext = createContext();

export default function Navbar() {
    const [ navbarOpen, setNavbarOpen ] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setNavbarOpen(false);

        function handleScroll() {
            setScrolled(window.scrollY > 0 || location.pathname !== "/");
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, [location]);

    function toggleNavbar() {
        setNavbarOpen(prevNavbarOpen => !prevNavbarOpen);
    }

    return (
        <HeaderContext.Provider value={{toggleNavbar}}>
            <header className={`navbar ${navbarOpen ? "open" : ""} ${scrolled ? "scrolled" : ""}`}>
                <nav>
                    <Link to="." className="logo">De Vier Jaargetijden</Link>
                    {
                        navbarOpen ? (
                            <>
                                <NavbarMenuItems />
                                <div className="hamburger-container">
                                    <FaXmark onClick={toggleNavbar} className="hamburger" />
                                </div>
                            </>
                        ) : (
                            <div className="hamburger-container">
                                <FaBars onClick={toggleNavbar} className="hamburger" />
                            </div>
                        )}
                </nav>
            </header>
        </HeaderContext.Provider>
    );
}
