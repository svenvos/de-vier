import HTMLFlipBook from "react-pageflip";
import useFetch from "../../hooks/useFetch";

export default function ValentineMenu() {
    const { data, error, loading } = useFetch(
        `http://localhost:1337/api/valentines-menus?populate=*`
    );

    return (
        <div className="menu">
            <h1>Valentijnsmenu</h1>
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
                        src={`http://localhost:1337${data.data[0].ValentijnKaart.url}`}
                        alt="Ons valentijnsmenu, vol met heerlijke valentijngerechten."
                        loading="lazy"
                        decoding="async"
                    />
                </HTMLFlipBook>
            )}
        </div>
    );
}
