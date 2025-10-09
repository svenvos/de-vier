import HTMLFlipBook from "react-pageflip";
import dessert1 from "../../assets/menu/dessert1.jpg";
import dessert2 from "../../assets/menu/dessert2.jpg";

export default function DessertsMenu() {
    return (
        <div className="menu">
            <h1 className="font-size-32">Desserts</h1>
            <HTMLFlipBook width={350} height={500}>
                <img src={dessert1} alt="Onze eerste dessertkaart." loading="lazy" decoding="async" />
                <img src={dessert2} alt="Onze tweede dessertkaart." loading="lazy" decoding="async" />
            </HTMLFlipBook>
            <p className="footnote">* Klik op de foto's om door het volledige menu te scrollen.</p>
        </div>
    );
}
