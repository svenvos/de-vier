import { BrowserRouter, Routes, Route } from "react-router";

import ScrollToTop from "./components/ScrollToTop.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Buffet from "./pages/Buffet.jsx";
import Dinerbon from "./pages/Dinerbon.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Calendar from "./pages/Calendar.jsx";
import Contact from "./pages/Contact.jsx";
import MenuLayout from "./components/MenuLayout.jsx";
import DinnerMenu from "./components/Menu/DinnerMenu.jsx";
import LunchMenu from "./components/Menu/LunchMenu.jsx";
import DessertsMenu from "./components/Menu/DessertsMenu.jsx";
import ChristmasMenu from "./components/Menu/ChristmasMenu.jsx";
import Jobs from "./pages/Jobs.jsx";

export default function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<MenuLayout />}>
                    <Route index element={<DinnerMenu />} />
                    <Route path="lunch" element={<LunchMenu />} />
                    <Route path="desserts" element={<DessertsMenu />} />
                    <Route path="christmas" element={<ChristmasMenu />} />
                </Route>
                <Route path="buffet" element={<Buffet />} />
                <Route path="dinerbon" element={<Dinerbon />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="contact" element={<Contact />} />
                <Route path="jobs" element={<Jobs />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
