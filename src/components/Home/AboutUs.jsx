import { Link } from "react-router";
import aboutUsImg from "../../assets/about-us.jpg";

export default function AboutUs() {
    return (
        <div className="about-us-container">
            <div className="about-us max-width-1400 side-margin-auto">
                <img src={aboutUsImg} alt="Eigenaar Richard Rosink en zijn vrouw, Bianca Rosink, poserend voor het restaurant." />
                <div className="txt-container">
                    <h2 className="font-size-24 font-weight-400">Over ons</h2>
                    <div className="desc">
                        <p>Restaurant De Vierjaargetijden is gevestigd in een prachtig historisch pand aan de IJssel en al jarenlang een vaste waarde in Kampen. In dit voormalige bankgebouw komen historie en gastvrijheid samen, met een warme sfeer die uitnodigt om samen te genieten.</p>
                        <p>Onze chef werkt met verse, seizoensgebonden ingrediënten en combineert klassieke gerechten met moderne smaken. Of u nu aanschuift voor een intiem diner, een borrel met vrienden of een feestelijke gelegenheid, bij ons proeft u de smaak van genieten.</p>
                    </div>
                    <Link to="about" className="btn primary-btn">Lees meer over ons</Link>
                </div>
            </div>
        </div>
    );
}
