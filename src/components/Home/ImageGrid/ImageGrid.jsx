import { Link } from "react-router";
import ImageCard from "./ImageCard.jsx";
import imageGridData from "../../../../imageGridData.js";

export default function ImageGrid() {
    const imageGridElements = imageGridData.map(item => {
        return (
            <ImageCard key={item.id}>
                <div className="image-wrapper">
                    <img src={item.imageSrc} alt={item.imageAlt} />
                </div>
                <p className="font-size-18">{item.supportingText}</p>
                <Link to={item.linkTo}>{item.btnTxt}</Link>
            </ImageCard>
        );
    });

    return (
        <div className="image-grid-container">
            {imageGridElements}
        </div>
    );
}
