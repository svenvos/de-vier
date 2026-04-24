import HTMLFlipBook from "react-pageflip";
import useFetch from "../../hooks/useFetch";

export default function DinnerMenu() {
    const { data, error, loading } = useFetch(
        `http://localhost:1337/api/dinner-menus?populate=*`,
    );

    return (
        <div className="menu">
            <h1 className="font-size-32">Diner</h1>
            {loading ? (
                <p>Aan het laden...</p>
            ) : error ? (
                <p>
                    Op dit moment zijn er problemen met het laden van de
                    menukaart. Probeer het later opnieuw
                </p>
            ) : (
                <HTMLFlipBook width={350} height={500}>
                    {data.data.map((menu) => {
                        return (
                            <img
                                src={`http://localhost:1337${menu.MenukaartFoto.url}`}
                                key={menu.id}
                                alt="Onze dinnerkaart"
                                loading="lazy"
                                decoding="async"
                            />
                        );
                    })}
                </HTMLFlipBook>
            )}
            <p className="footnote">
                * Klik op de foto's om door het volledige menu te scrollen.
            </p>
        </div>
    );
}
