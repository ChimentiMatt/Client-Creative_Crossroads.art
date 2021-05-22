import React from 'react';
import wedding1 from "./img-wedding/wedding1.jpeg";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";


export default function WeddingPage() {
    return (
        <div className="family-page">
            {/* <FamilyHeader /> */}
            <WeddingSlideshow />
        </div>
    )
}


const images = [wedding1];
const delay = 5000;

function WeddingSlideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }


    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="container-slide">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((img, index) => (
                    <img
                        src={img} className="slide"
                        key={index}
                        style={{ img }}
                    />
                ))}
            </div>

            <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}