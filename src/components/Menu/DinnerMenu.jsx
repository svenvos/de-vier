import HTMLFlipBook from "react-pageflip";
import starters from "../../assets/menu/starters.jpg";
import main1 from "../../assets/menu/main1.jpg";
import main2 from "../../assets/menu/main2.jpg";
import threeCourseFish from "../../assets/menu/three-course-fish.jpg";

export default function DinnerMenu() {
    return (
        <div className="menu">
            <h1 className="font-size-32">Diner</h1>
            <HTMLFlipBook width={350} height={500}>
                <img src={starters} alt="Onze voorgerechten." loading="lazy" decoding="async" />
                <img src={main1} alt="Onze eerste kaart met hoofdgerechten." loading="lazy" decoding="async" />
                <img src={main2} alt="Onze tweede kaart met hoofdgerechten." loading="lazy" decoding="async" />
                <img src={threeCourseFish} alt="Ons drie gangen vismenu." loading="lazy" decoding="async" />
            </HTMLFlipBook>
            <p className="footnote">* Klik op de foto's om door het volledige menu te scrollen.</p>
        </div>
    );
}
