import HTMLFlipBook from "react-pageflip";
import lunchMenu from "../../assets/menu/lunchmenu.jpg";

export default function LunchMenu() {
    return (
        <div className="menu">
            <h1 className="font-size-32">Lunch</h1>
            <HTMLFlipBook width={350} height={500}>
                <img src={lunchMenu} alt="Ons lunchmenu, vol met heerlijke broodjes en andere lekkernijen." />
            </HTMLFlipBook>
        </div>
    );
}
