import { useState } from "react";
import "../css/Slideshow.css";

interface SlideshowProps {
    images: string[];
    alt?: string;
}

function Slideshow({ images, alt = "slideshow image" }: SlideshowProps) {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
    const next = () => setCurrent((i) => (i + 1) % images.length);

    return (
        <div className="slideshow-container">
            <button className="slideshow-btn slideshow-btn-prev" onClick={prev} aria-label="Previous">
                &#8249;
            </button>
            <img src={images[current]} alt={alt} className="description-image" />
            <button className="slideshow-btn slideshow-btn-next" onClick={next} aria-label="Next">
                &#8250;
            </button>
            <div className="slideshow-dots">
                {images.map((_, i) => (
                    <button
                        key={i}
                        className={`slideshow-dot${i === current ? " slideshow-dot-active" : ""}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to image ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slideshow;
