import { BrowserRouter, Routes, Route } from "react-router";

import ScrollToTop from "./components/ScrollToTop.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Buffet from "./pages/Buffet.jsx";
import Dinerbon from "./pages/Dinerbon.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Calendar from "./pages/Calendar.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="buffet" element={<Buffet />} />
                <Route path="dinerbon" element={<Dinerbon />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
