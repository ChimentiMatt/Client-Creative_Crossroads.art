import React from 'react';
import img1 from './img-phot/another-world.jpeg';
import img2 from './img-phot/bird.jpeg';
import img3 from './img-phot/birds.jpeg';
import img4 from './img-phot/camera-square.jpeg';
import img5 from './img-phot/children.jpeg';
import img7 from './img-phot/falls.jpeg';
import img8 from './img-phot/floral-corssroads.jpeg';
import img9 from './img-phot/glory.jpeg';
import img10 from './img-phot/godrays.jpeg';
import img11 from './img-phot/hidden-gods.jpeg';
import img12 from './img-phot/hill-and-horizon.jpeg';
import img13 from './img-phot/little-dots.jpeg';
import img14 from './img-phot/lost-dreams.jpeg';
import img15 from './img-phot/piano-camera-b-w.jpeg';
import img16 from './img-phot/piano-camera-white-back.jpeg';
import img17 from './img-phot/piano-camera.jpeg';
import img18 from './img-phot/rocks-over-forest.jpeg';
import img19 from './img-phot/salty-flight.jpeg';
import img20 from './img-phot/Sandy.jpeg';
import img21 from './img-phot/the-man.jpeg';
import img22 from './img-phot/two-worlds.jpeg';
import img23 from './img-phot/exodus.jpeg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function PhotogPage() {
    return(
        <div>
            <Gallery />

        </div>
    )
}

function Gallery() {
    return( 
 
        <div className="gallery">
            <figure className="gallery__item gallery__item--1">
                <img className="gallery__img" src={img1} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--2">
                <img className="gallery__img" src={img2} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--3">
                <img className="gallery__img" src={img3} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--4">
                <img className="gallery__img" src={img4} alt="test" />   
            </figure>
            <figure className="gallery__item gallery__item--5">
                <img className="gallery__img" src={img5} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--6">
                <img className="gallery__img" src={img7} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--7">
                <img className="gallery__img" src={img8} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--8">
                <img className="gallery__img" src={img9} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--9">
                <img className="gallery__img" src={img10} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--10">
                <img className="gallery__img" src={img11} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--11">            
                <img className="gallery__img" src={img12} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--12">
                <img className="gallery__img" src={img13} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--13">
                <img className="gallery__img" src={img14} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--14">
                <img className="gallery__img" src={img15} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--15">
                <img className="gallery__img"src={img16} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--16">
                <img className="gallery__img" src={img17} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--17">
                <img className="gallery__img" src={img18} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--18">               
                <img className="gallery__img" src={img19} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--19">  
                <img className="gallery__img" src={img20} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--20">
                <img className="gallery__img" src={img21} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--21">
                <img className="gallery__img" src={img22} alt="test" />
            </figure>
            <figure className="gallery__item gallery__item--22">
                <img className="gallery__img" src={img23} alt="test" />
            </figure>
        </div>
    )
}