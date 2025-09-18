import "../styles/Home.css";
import Hero from "../components/Home/Hero.jsx";
import HighlightsSection from "../components/Home/HighlightsSection/HighlightsSection.jsx";
import BookYourTable from "../components/Home/BookYourTable.jsx";
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
                <BookYourTable />
                <AboutUs />
            </main>
        </HomeContext.Provider>
    );
}
