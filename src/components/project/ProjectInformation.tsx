import { useState } from "react";
import type { Project } from "../../data/project";

interface ProjectInformationProps {
    project: Project;
}

function ImageSlideshow({
    images,
    header,
}: {
    images: string[];
    header: string;
}) {
    const [current, setCurrent] = useState(0);

    if (images.length === 1) {
        return (
            <div className="description-images-container">
                <img
                    src={images[0]}
                    alt={`${header} 1`}
                    className="description-image"
                />
            </div>
        );
    }

    return (
        <div className="slideshow-container">
            <button
                className="slideshow-btn slideshow-btn-prev"
                onClick={() =>
                    setCurrent((c) => (c - 1 + images.length) % images.length)
                }
                aria-label="Previous image"
            >
                &#8249;
            </button>
            <img
                src={images[current]}
                alt={`${header} ${current + 1}`}
                className="description-image"
            />
            <button
                className="slideshow-btn slideshow-btn-next"
                onClick={() => setCurrent((c) => (c + 1) % images.length)}
                aria-label="Next image"
            >
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

// Text body and Images for project details page

export function ProjectInformation({ project }: ProjectInformationProps) {
    return (
        <div className="project-information">
            {project.description.map((item, index) => (
                <div key={index} className="project-description-item">
                    <h3>{item.header}</h3>
                    <p>{item.text}</p>
                    {item.bullets && item.bullets.length > 0 && (
                        <ul>
                            {item.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex}>{bullet}</li>
                            ))}
                        </ul>
                    )}
                    {item.images && item.images.length > 0 && (
                        <ImageSlideshow
                            images={item.images}
                            header={item.header}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
