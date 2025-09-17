import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { useEffect } from "react";

export default function Navbar() {
    useEffect(() => {
        const header = document.querySelector("header");
        const logo = document.querySelector("header nav a");
        const hamburger = document.getElementById("hamburger");

        function handleScroll() {
            if (window.scrollY > 0) {
                header.style.backgroundColor = "var(--bg-color)";
                header.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
                hamburger.style.color = "var(--txt-color)";
                logo.style.color = "var(--txt-color)";
                logo.style.textShadow = "none"
            } else {
                header.style.backgroundColor = "transparent";
                header.style.boxShadow = "none";
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
                <FaBars className="hamburger" id="hamburger" />
            </nav>
        </header>
    );
}
