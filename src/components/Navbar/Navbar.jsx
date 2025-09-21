import "../../styles/Navbar.css";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import NavbarMenuItems from "./NavbarMenuItems.jsx";
import { createContext } from "react";

export const HeaderContext = createContext();

export default function Navbar() {
    const [ navbarOpen, setNavbarOpen ] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setNavbarOpen(false);
        const header = document.querySelector("header");

        function handleScroll() {
            if (window.scrollY > 0 || location.pathname !== "/") {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }

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
            <header className={`navbar ${navbarOpen ? "open" : ""}`}>
                <nav>
                    <Link to="." className="logo">de vier</Link>
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
