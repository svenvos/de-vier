import "../styles/Home.css";
import Hero from "../components/Home/Hero.jsx";
import HighlightsSection from "../components/Home/HighlightsSection/HighlightsSection.jsx";
import ImageGrid from "../components/Home/ImageGrid/ImageGrid.jsx";
import BookYourTable from "../components/Home/BookYourTable.jsx";
import AboutUs from "../components/Home/AboutUs.jsx";
import ChristmasModal from "../components/ChristmasModal.jsx";
import { createContext } from "react";
import { isSeasonalPeriod } from "../utils/dateUtils.js";
import { openWidget } from "../utils/widgetUtils.js";

export const HomeContext = createContext();

export default function Home() {
    return (
        <HomeContext.Provider value={{openWidget}}>
            <main>
                {isSeasonalPeriod() && <ChristmasModal />}
                <Hero />
                <HighlightsSection />
                <ImageGrid />
                <BookYourTable />
                <AboutUs />
            </main>
        </HomeContext.Provider>
    );
}
