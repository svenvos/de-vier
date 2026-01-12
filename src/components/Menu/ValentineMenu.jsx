import HTMLFlipBook from "react-pageflip";
import valentineMenu from "../../assets/menu/valentine-menu.jpg";

export default function ValentineMenu() {
    return (
        <div className="menu">
            <h1>Valentijnsmenu</h1>
            <HTMLFlipBook width={350} height={500}>
                <img src={valentineMenu} alt="Ons valentijnsmenu, vol met heerlijke valentijngerechten." loading="lazy" decoding="async" />
            </HTMLFlipBook>
        </div>
    );
}
