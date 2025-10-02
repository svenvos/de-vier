import HTMLFlipBook from "react-pageflip";
import christmasMenu from "../../assets/menu/christmas-menu.jpg";

export default function ChristmasMenu() {
    return (
        <div className="menu">
            <h1>Kerstmenu</h1>
            <HTMLFlipBook width={350} height={500}>
                <img src={christmasMenu} alt="Ons kerstmenu, vol met heerlijke kerstgerechten." />
            </HTMLFlipBook>
        </div>
    );
}
