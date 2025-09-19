import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Buffet from "./pages/Buffet.jsx";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="buffetten" element={<Buffet />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
