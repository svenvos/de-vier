import HTMLFlipBook from "react-pageflip";
import buffet from "../assets/buffet/buffet.jpg";
import buffetDeluxe from "../assets/buffet/buffet-deluxe.jpg";
import boozes from "../assets/buffet/drankenarrangement.jpg";
import party from "../assets/buffet/feestarrangement.jpg";
import smallBites from "../assets/buffet/hapjes.jpg";
import choice29 from "../assets/buffet/keuzemenu-29.jpg";
import choice32 from "../assets/buffet/keuzemenu-32.jpg";
import coffeeTable from "../assets/buffet/koffietafel.jpg";
import coffeeTableDeluxe from "../assets/buffet/koffietafel-deluxe.jpg";
import pasta from "../assets/buffet/pasta.jpg";

export default function BuffetMenu() {
    return (
        <div className="buffet-menu-container">
            <HTMLFlipBook width={350} height={500}>
                <img src={buffet} alt="De kaart van het Vier Jaargetijden buffet." />
                <img src={buffetDeluxe} alt="De kaart van het Vier Jaargetijden deluxe buffet." />
                <img src={boozes} alt="De kaart van het drankenarrangement" />
                <img src={party} alt="De kaart van het feestarrangement." />
                <img src={smallBites} alt="De kaart van het hapjesarrangement." />
                <img src={choice29} alt="De kaart van het keuzemenu De Vier, voor €29,50." />
                <img src={choice32} alt="De kaart van het keuzemenu De Vier, voor €32,50." />
                <img src={coffeeTable} alt="De kaart van de koffietafel." />
                <img src={coffeeTableDeluxe} alt="De kaart van de koffietafel deluxe." />
                <img src={pasta} alt="De kaart van het pasta-arrangement." />
            </HTMLFlipBook>
        </div>
    );
}
