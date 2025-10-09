import { HomeContext } from "../../pages/Home.jsx";
import { useContext, useEffect } from "react";
import heroImage from "../../assets/hero.jpg";

export default function Hero() {
    const { openWidget } = useContext(HomeContext);

    // Preload critical images
    useEffect(() => {
        const preloadImages = [
            heroImage,
            // Add other critical images here
        ];

        preloadImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    return (
        <section className="hero">
            <div className="txt-container">
                <h1 className="font-size-32 color-light">Het mooiste plekje aan de IJssel</h1>
                <button onClick={openWidget} className="btn sec-btn">Reserveer uw tafel</button>
            </div>
        </section>
    );
}
