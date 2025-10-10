import { Link } from "react-router";
import "../styles/AboutUs.css";

export default function() {
    return (
        <main>
            <div className="container">
                <h1 className="font-size-32">Over ons</h1>
                
                <p>
                    Ons restaurant is gevestigd in een prachtig historisch pand dat ooit dienst deed als bankgebouw. Na een periode als het sfeervolle Café De IJssel heeft het gebouw een nieuwe bestemming gekregen als Restaurant De Vierjaargetijden - een plek waar historie, smaak en gastvrijheid samenkomen.
                </p>
                <p>
                    In de zomermaanden kunnen onze gasten heerlijk genieten op ons ruime terras aan de IJssel, met een prachtig uitzicht over het water. Binnen zorgt de warme ambiance voor een gezellige sfeer, perfect voor een avondje uit.
                </p>
                <p>
                    Onze keuken werkt met een uitgebreid à-la-cartemenu en een wisselend seizoensmenu. Of je nu komt voor een ontspannen diner voor twee, een familiebijeenkomst of een feestelijke gelegenheid, bij ons ben je aan het juiste adres.
                </p>
                <p>
                    Daarnaast is Restaurant De Vierjaargetijden ook uitermate geschikt voor grotere groepen. Wij bieden diverse arrangementen op maat, zodat elke gelegenheid een bijzondere beleving wordt.
                </p>
                <p>
                    Wij heten je van harte welkom voor een smakelijke en sfeervolle ervaring aan de IJssel bij Restaurant De Vierjaargetijden.
                </p>
                <div className="btns">
                    <Link to="/menu" className="btn primary-btn">Bekijk ons menu</Link>
                    <Link to="/buffet" className="btn sec-btn">Bekijk onze arrangementen</Link>
                </div>
            </div>
        </main>
    );
}
