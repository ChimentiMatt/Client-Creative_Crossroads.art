import React from 'react';
import img1 from "../img-family/img1.jpeg";
import img2 from "../img-family/img2.jpeg";
import img3 from "../img-family/img3.jpeg";
import img4 from "../img-family/img4.jpeg";
import img5 from "../img-family/img5.jpeg";
// import img6 from "./img-family/img6.jpeg";
import img7 from "../img-family/img7.jpeg";
import img8 from "../img-family/img8.jpeg";
import Girl from "../img-family/squared-girl.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function FamilyPortraitPage(props) {
  return (
    <div className="family-page">
      <Slideshow />
    </div>
  )
}

// setStateAndRunCallback = (val) => {
//   this.setState(val, () => {
//       this.props.toCallBack(this.state.activeLink: true);
//   });
// }


const images = [img8, img2, img1, img3, img4, img5, img7];
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
    <div>
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
        <div className="left-arrow"></div>

      </div>

      <div className="line"></div>
      <div className="family-about">

        <p>Capture fleeting moments with a collection of photographs out in nature or at a venue of your liking. You can even bring your fur family to include everyone. </p>

      </div>

      <div className="line"></div>

      {/* <div className="container-family-form">
        <div className="inner-container-family-form">
          <h2>Schedule Your Family</h2>
          <input class="form-field" placeholder="Name"></input>
          <input class="form-field" placeholder="Email"></input>
          <input class="form-field" placeholder="Phone Number"></input>
          <input class="form-field" placeholder="Preferred Date"></input>
          <textarea class="form-field" placeholder="Anything you want me to know" type="text"></textarea>
          <button class="form-btn" >Submit Form</button>
        </div>
        <img className="right-img" src={Girl} alt="test" />
      </div> */}


      <br></br>
      <br></br>
      <br></br>


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

