import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { useEffect } from "react";

export default function Navbar() {
    useEffect(() => {
        const header = document.querySelector("header");
        const logo = document.querySelector("header nav a");
        const hamburgerContainer = document.querySelector("header nav div");
        const hamburger = document.querySelector("header nav div svg");

        function handleScroll() {
            if (window.scrollY > 0) {
                header.style.backgroundColor = "var(--bg-color)";
                header.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
                hamburgerContainer.style.backgroundColor = "var(--bg-color)";
                hamburger.style.color = "var(--txt-color)";
                logo.style.color = "var(--txt-color)";
                logo.style.textShadow = "none"
            } else {
                header.style.backgroundColor = "transparent";
                header.style.boxShadow = "none";
                hamburgerContainer.style.backgroundColor = "var(--btn-bg-color)";
                hamburger.style.color = "var(--bg-color)";
                logo.style.color = "var(--bg-color)";
                logo.style.textShadow = "0 0 10px var(--txt-color)";
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, []);

    return (
        <header className="navbar">
            <nav>
                <Link to="." className="logo">de vier</Link>
                <div className="hamburger-container">
                    <FaBars className="hamburger" />
                </div>
            </nav>
        </header>
    );
}
