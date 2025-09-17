import "../styles/Home.css";
import Hero from "../components/Home/Hero.jsx";
import HighlightsSection from "../components/Home/HighlightsSection/HighlightsSection.jsx";
import AboutUs from "../components/Home/AboutUs.jsx";
import { createContext } from "react";

export const HomeContext = createContext();

export default function Home() {
    function openWidget() {
        _gstpln.openWidget()
    }

    return (
        <HomeContext.Provider value={{openWidget}}>
            <main>
                <Hero />
                <HighlightsSection />
                <AboutUs />
            </main>
        </HomeContext.Provider>
    );
}
