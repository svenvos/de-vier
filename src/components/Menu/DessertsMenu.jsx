import HTMLFlipBook from "react-pageflip";
import useFetch from "../../hooks/useFetch";

export default function DessertsMenu() {
    const { data, error, loading } = useFetch(
        `http://localhost:1337/api/desserts-menus?populate=*`,
    );

    return (
        <div className="menu">
            <h1 className="font-size-32">Desserts</h1>
            {loading ? (
                <p>Aan het laden...</p>
            ) : error ? (
                <p>
                    Op dit moment zijn er problemen met het laden van de
                    menukaart. Probeer het later opnieuw
                </p>
            ) : (
                <>
                    <HTMLFlipBook width={350} height={500}>
                        {data.data.map((menu) => {
                            return (
                                <img
                                    src={`http://localhost:1337${menu.DessertKaart.url}`}
                                    key={menu.id}
                                    alt="Onze dessertkaart"
                                    loading="lazy"
                                    decoding="async"
                                />
                            );
                        })}
                    </HTMLFlipBook>
                    <p className="footnote">
                        * Klik op de foto's om door het volledige menu te
                        scrollen.
                    </p>
                </>
            )}
        </div>
    );
}
