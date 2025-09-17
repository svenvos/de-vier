import { HomeContext } from "../../pages/Home.jsx";
import { useContext } from "react";

export default function Hero() {
    const { openWidget } = useContext(HomeContext);

    return (
        <section className="hero">
            <div className="txt-container">
                <h1 className="font-size-32 color-light">Het mooiste plekje aan de IJssel</h1>
                <button onClick={openWidget} className="btn sec-btn">Reserveer uw tafel</button>
            </div>
        </section>
    );
}
