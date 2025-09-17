import { Link } from "react-router";
import aboutUsImg from "../../assets/about-us.jpg";

export default function AboutUs() {
    return (
        <div className="about-us-container">
            <div className="about-us max-width-1400 side-margin-auto">
                <img src={aboutUsImg} alt="Eigenaar Richard Rosink en zijn vrouw, Bianca Rosink, poserend voor het restaurant." />
                <div className="txt-container">
                    <h2 className="font-size-24 font-weight-400 color-light">Over ons</h2>
                    <div className="desc">
                        <p className="color-light">Ons restaurant bestaat al meer dan _aantal_ jaar en is een vaste waarde in de stad. In _jaar_ werd het overgenomen door onze huidige eigenaar en chef, die met passie en vernieuwende ideeën de traditie voortzet. Hier komen gastvrijheid, smaak en beleving samen.</p>
                        <p className="color-light">Ons restaurant bestaat al meer dan _aantal_ jaar en is een vaste waarde in de stad. In _jaar_ werd het overgenomen door onze huidige eigenaar en chef, die met passie en vernieuwende ideeën de traditie voortzet. Hier komen gastvrijheid, smaak en beleving samen.</p>
                    </div>
                    <Link to="about" className="btn sec-btn">Lees meer over ons</Link>
                </div>
            </div>
        </div>
    );
}
