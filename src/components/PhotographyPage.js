import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

import img1 from '../img-phot/another-world.jpeg';
import img2 from '../img-phot/bird.jpeg';
import img3 from '../img-phot/birds.jpeg';
// import img4 from '../img-phot/camera-square.jpeg';
import img5 from '../img-phot/children.jpeg';
import img7 from '../img-phot/falls.jpeg';
import img8 from '../img-phot/floral-corssroads.jpeg';
import img9 from '../img-phot/glory.jpeg';
import img10 from '../img-phot/godrays.jpeg';
import img11 from '../img-phot/hidden-gods.jpeg';
import img12 from '../img-phot/hill-and-horizon.jpeg';
import img13 from '../img-phot/little-dots.jpeg';
import img14 from '../img-phot/lost-dreams.jpeg';
import img15 from '../img-phot/piano-camera-b-w.jpeg';
import img16 from '../img-phot/piano-camera-white-back.jpeg';
import img17 from '../img-phot/piano-camera.jpeg';
import img18 from '../img-phot/rocks-over-forest.jpeg';
import img19 from '../img-phot/salty-flight.jpeg';
import img20 from '../img-phot/Sandy.jpeg';
import img21 from '../img-phot/the-man.jpeg';
import img22 from '../img-phot/two-worlds.jpeg';
import img23 from '../img-phot/exodus.jpeg';


const photos = [
    {
        class: 'photo',
        src: img2,
        width: 4617,
        height: 3096
    },
    {
        class: 'photo',
        src: img9,
        width: 4400,
        height: 2094
    },
    {
        class: 'photo',
        src: img10,
        width: 3609,
        height: 1567
    },
    {
        class: 'photo',
        src: img11,
        width: 1600,
        height: 1068

    },
    {
        class: 'photo',
        src: img5,
        width: 5008,
        height: 3336
    },
    {
        class: 'photo',
        src: img7,
        width: 768,
        height: 960
    },
    {
        class: 'photo',
        src: img8,
        width: 5008,
        height: 3336
    },

    {
        class: 'photo',
        src: img3,
        width: 5470,
        height: 3791
    },
    {
        class: 'photo',
        src: img12,
        width: 6000,
        height: 4000
    },
    {
        class: 'photo',
        src: img13,
        width: 960,
        height: 640
    },
    {
        class: 'photo',
        src: img14,
        width: 960,
        height: 646
    },
    {
        class: 'photo',
        src: img15,
        width: 3799,
        height: 2533
    },
    {
        class: 'photo',
        src: img1,
        width: 2048,
        height: 1365
    },
    {
        class: 'photo',
        src: img16,
        width: 3936,
        height: 2624
    },
    {
        class: 'photo',
        src: img17,
        width: 3936,
        height: 2624
    },
    {
        class: 'photo',
        src: img18,
        width: 2048,
        height: 1365
    },
    {
        class: 'photo',
        src: img19,
        width: 1772,
        height: 1340
    },
    {
        class: 'photo',
        src: img20,
        width: 1600,
        height: 1066
    },
    {
        class: 'photo',
        src: img21,
        width: 4030,
        height: 2881
    },
    {
        class: 'photo',
        src: img22,
        width: 2465,
        height: 1451
    },

];
const BasicRows = () => <Gallery id='1' photos={photos} />;
export default BasicRows