import React from "react";
import Gallery from "react-photo-gallery";

import img1 from '../img-phot/another-world.jpeg';
import img2 from '../img-phot/bird.jpeg';
import img3 from '../img-phot/birds.jpeg';
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


const photos = [
    {
        class: 'photo',
        id: 0,
        src: img2,
        width: 4617,
        height: 3096
    },
    {
        class: 'photo',
        id: 1,
        src: img9,
        width: 4400,
        height: 2094
    },
    {
        class: 'photo',
        id: 2,
        src: img10,
        width: 3609,
        height: 1567
    },
    {
        class: 'photo',
        id: 3,
        src: img11,
        width: 1600,
        height: 1068

    },
    {
        class: 'photo',
        id: 4,
        src: img5,
        width: 5008,
        height: 3336
    },
    {
        class: 'photo',
        id: 5,
        src: img7,
        width: 768,
        height: 960
    },
    {
        class: 'photo',
        id: 6,
        src: img8,
        width: 5008,
        height: 3336
    },

    {
        class: 'photo',
        id: 7,
        src: img3,
        width: 5470,
        height: 3791
    },
    {
        class: 'photo',
        id: 8,
        src: img12,
        width: 6000,
        height: 4000
    },
    {
        class: 'photo',
        id: 9,
        src: img13,
        width: 960,
        height: 640
    },
    {
        class: 'photo',
        id: 10,
        src: img14,
        width: 960,
        height: 646
    },
    {
        class: 'photo',
        id: 11,
        src: img15,
        width: 3799,
        height: 2533
    },
    {
        class: 'photo',
        id: 12,
        src: img1,
        width: 2048,
        height: 1365
    },
    {
        class: 'photo',
        id: 13,
        src: img16,
        width: 3936,
        height: 2624
    },
    {
        class: 'photo',
        id: 14,
        src: img17,
        width: 3936,
        height: 2624
    },
    {
        class: 'photo',
        id: 15,
        src: img18,
        width: 2048,
        height: 1365
    },
    {
        class: 'photo',
        id: 16,
        src: img19,
        width: 1772,
        height: 1340
    },
    {
        class: 'photo',
        id: 17,
        src: img20,
        width: 1600,
        height: 1066
    },
    {
        class: 'photo',
        id: 18,
        src: img21,
        width: 4030,
        height: 2881
    },
    {
        class: 'photo',
        id: 19,
        src: img22,
        width: 2465,
        height: 1451
    },
];

const BasicRows = () => 
<Gallery 
    id='1' 
    photos={photos} 
/>

export default BasicRows