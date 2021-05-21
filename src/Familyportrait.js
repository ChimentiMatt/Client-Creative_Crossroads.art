import React from 'react';
import img1 from "./img-family/img1.jpeg";
import img2 from "./img-family/img2.jpeg";
import img3 from "./img-family/img3.jpeg";
import img4 from "./img-family/img4.jpeg";
import img5 from "./img-family/img5.jpeg";
import img6 from "./img-family/img6.jpeg";
import img7 from "./img-family/img7.jpeg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function FamilyPortraitPage() {
    return (
        <div className="family-page">
            <FamilyHeader />
            <Slideshow />
            <Gallery/>
        </div>
    )
}

function FamilyHeader() {
    return(
        <div className="family-header">
            <h1>Family Portraits</h1>
        </div>
    )
}


const images = [img1, img2, img3, img4, img5, img7];
const delay = 5000;

function Slideshow() {
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



// function FamilyPortrait() {
//     return (
//         <div className="container-cards-fam">
//             {/* <h1 className="header-gal">Gallery</h1> */}

//                 <div className="cards-img-fam">
//                     <img src={img1} alt="test" />
//                     <img src={img2} alt="test" />

//                 </div>

//         </div>
//     )
// }


function Gallery() {
    return (
        <div className="link-tag-view-gallery">
            <p>View Gallery</p>
        </div>
    )
}