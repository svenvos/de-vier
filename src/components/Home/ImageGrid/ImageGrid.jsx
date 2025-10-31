import { Link } from "react-router";
import ImageCard from "./ImageCard.jsx";
import imageGridData from "../../../utils/imageGridData.js";

export default function ImageGrid() {
    const imageGridElements = imageGridData.map(imageGridItem => {
        return (
            <ImageCard key={imageGridItem.id}>
                <div className="image-wrapper">
                    <img 
                        src={imageGridItem.imageSrc} 
                        alt={imageGridItem.imageAlt}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <p className="font-size-18">{imageGridItem.supportingText}</p>
                {imageGridItem.linkTo && <Link to={imageGridItem.linkTo}>{imageGridItem.btnTxt}</Link>}
            </ImageCard>
        );
    });

    return (
        <div className="image-grid-container">
            {imageGridElements}
        </div>
    );
}
