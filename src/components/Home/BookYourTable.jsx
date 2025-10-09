import seating from "../../assets/seating.jpg";
import { HomeContext } from "../../pages/Home.jsx";
import { useContext } from "react";

export default function BookYourTable() {
    const { openWidget } = useContext(HomeContext);

    return (
        <div className="booking-cta-container">
            <img src={seating} alt="Een sfeervol shot van een knus hoekje in restaurant de Vier Jaargetijden." />
            <div className="txt-container">
                <h2 className="font-size-24 font-weight-400 color-light">Uw tafel staat klaar</h2>
                <div className="desc">
                    <p className="color-light">
                        Bij ons bent u van harte welkom om te genieten van een heerlijke lunch, borrel of diner.
                        Op onze menukaart vindt u voor ieder wat wils — van smaakvolle vlees- en visgerechten tot vegetarische opties.
                    </p>
                    <p className="color-light">
                        Laat u bovendien verrassen door ons wisselende seizoensmenu, waarin de mooiste producten van het moment centraal staan.
                        Kom langs en proef de sfeer.
                    </p>
                    <button onClick={openWidget} className="btn sec-btn">Maak uw reservering</button>
                </div>
            </div>
        </div>
    );
}
