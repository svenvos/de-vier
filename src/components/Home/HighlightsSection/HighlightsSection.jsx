import { Link } from "react-router";
import highlights from "../../../../highlights.js";
import HighlightsCard from "./HighligtsCard.jsx";

export default function HighlightsSection() {
    const highlightElements = highlights.map(highlight => {
        return (
            <HighlightsCard className="highlight" key={highlight.id}>
                <img src={highlight.imageUrl} alt={highlight.imageAlt} />
                <div className="txt-container">
                    <p className="font-size-18">{highlight.description}</p>
                    <Link to={highlight.linkTo} className="btn primary-btn">{highlight.btnText}</Link>
                </div>
            </HighlightsCard>
        );
    });

    return (
        <section className="highlights max-width-1400">
            {highlightElements ? highlightElements : null}
        </section>
    );
}
