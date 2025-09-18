import seating from "../../assets/seating.jpg";
import Home, { HomeContext } from "../../pages/Home.jsx";
import { useContext } from "react";

export default function BookYourTable() {
    const { openWidget } = useContext(HomeContext);

    return (
        <div className="booking-cta-container">
            <img src={seating} alt="Een sfeervol shot van een knus hoekje in restaurant de Vier Jaargetijden." />
            <div className="txt-container">
                <h2 className="font-size-24 font-weight-400 color-light">Uw tafel staat klaar</h2>
                <div className="desc">
                    <p className="color-light">Geniet van een onvergetelijke avond in ons restaurant. Geniet van een onvergetelijke avond in ons restaurant. Geniet van een onvergetelijke avond in ons restaurant.</p>
                    <p className="color-light">Geniet van een onvergetelijke avond in ons restaurant. Geniet van een onvergetelijke avond in ons restaurant. Geniet van een onvergetelijke avond in ons restaurant.</p>
                    <button onClick={openWidget} className="btn sec-btn">Maak uw reservering</button>
                </div>
            </div>
        </div>
    );
}
