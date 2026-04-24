import HTMLFlipBook from "react-pageflip";
import useFetch from "../../hooks/useFetch";

export default function ChristmasMenu() {
    const { data, error, loading } = useFetch(
        `http://localhost:1337/api/christmas-menus?populate=*`,
    );

    return (
        <div className="menu">
            <h1>Kerstmenu</h1>
            {loading ? (
                <p>Aan het laden...</p>
            ) : error ? (
                <p>
                    Op dit moment zijn er problemen met het laden van de
                    menukaart. Probeer het later opnieuw
                </p>
            ) : (
                <HTMLFlipBook width={350} height={500}>
                    <img
                        src={`http://localhost:1337${data.data[0].KerstKaart.url}`}
                        alt="Ons kerstmenu, vol met heerlijke kerstgerechten."
                        loading="lazy"
                        decoding="async"
                    />
                </HTMLFlipBook>
            )}
        </div>
    );
}
