import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import ImageGallery from 'react-image-gallery';

import vicky1 from '../img-wedding/vicky1.jpg'
import vicky2 from '../img-wedding/vicky5.jpg'
import rings from '../img-wedding/rings1.jpg'
import forest from '../img-wedding/forest2.jpeg'

import maids from '../img-wedding/maids3.jpeg'
import men from '../img-wedding/men1.jpg'

import party from '../img-wedding/party1.jpg'
import car from '../img-wedding/car.jpg'
import legs from '../img-wedding/legs.jpeg'
import blackWhite from '../img-wedding/couple1.jpg'
import vickyArch from '../img-wedding/vicky4.jpg'
import ido from '../img-wedding/ido.jpeg'

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
            <WeddingGallery />
            <FormWedding />
        
        </div>
    );
}

function WeddingGallery( ) {
    const images = [
        {
          original: `${vicky2}`,
          thumbnail: `${vicky2}`,
        },
        {
          original: `${forest}`,
          thumbnail: `${forest}`,
        },
        {
          original: `${rings}`,
          thumbnail: `${rings}`,
        },
        {
          original: `${vicky1}`,
          thumbnail: `${vicky1}`,
        },
        {
            original: `${vickyArch}`,
            thumbnail: `${vickyArch}`,
          },
          {
            original: `${ido}`,
            thumbnail: `${ido}`,
          },
          {
            original: `${maids}`,
            thumbnail: `${maids}`,
          },
          {
            original: `${party}`,
            thumbnail: `${party}`,
          },
          {
            original: `${men}`,
            thumbnail: `${men}`,
          },
          {
            original: `${car}`,
            thumbnail: `${car}`,
          },
          {
            original: `${blackWhite}`,
            thumbnail: `${blackWhite}`,
          },
          {
            original: `${legs}`,
            thumbnail: `${legs}`,
          },
          



        
      ];
    return(
        <>
        <ImageGallery items={images} />
        </>
    )
}


function FormWedding(params) {
    const [disabled, setDisabled] = useState(false);
    const [visibility, setBlock] = useState('none')
    const [hide, setHidden] = useState('visible')

    function sendEmail(e) {
        e.preventDefault();
        setDisabled(true)
        setBlock('block')
        setHidden('none')
        document.getElementById('wedding-h3').innerHTML = 'Thank You'
        document.getElementById('wedding-h3').style.color = 'teal'
        emailjs.sendForm('service_2201c2n', "template_abtq1im", e.target, 'user_7oFNkpAKDIKus9MJJpUuF')
            .then((result) => {
                console.log("result text", result.text);

            }, (error) => {
                console.log("error", error.text);

            });
    }
    

    return (
        <>
            <div className="line"></div>
            <div className="container-contact-body">
                <h2>Book For Your Wedding</h2>
                <p>Want to book for your big day</p>
                <p>Have any specific requests or questions?</p>
                <p>Eamil me or fill out the form below</p>
                <p>Email: sfchim@msn.com</p>
            </div>
            <div className="line"></div>
            <div className='sent-message'>

                <h3 id="wedding-h3">Contact Me</h3>
                <p style={{ display: visibility }}>You will recieve a call within 24 Hours</p>
                <p style={{ display: visibility }}>Suzanne Chimenti</p>
            </div>
            <div className="container-contact-form">
                <div className="inner-container-contact-form">
                    <form onSubmit={sendEmail}>
                        <label>
                            <input disabled={disabled} class="contact-form-field" name="name" placeholder="Name"></input>
                        </label>
                        <label>
                            <input disabled={disabled} class="contact-form-field" name="email" placeholder="Email"></input>
                        </label>
                        <label>
                            <input disabled={disabled} class="contact-form-field" name="phone_number" placeholder="Phone Number"></input>
                        </label>
                        <label>
                            <input disabled={disabled} class="contact-form-field" name="pre_date" placeholder="Event Date(s)"></input>
                        </label>

                        <label>
                            <textarea disabled={disabled} class="form-field" name="message" placeholder="Anything you want me to know" type="text"></textarea>
                        </label>
                        <label>
                            <input disabled={disabled} type="submit" class="form-btn" value="Submit" ></input>
                        </label>
                    </form>

                </div>
            </div>

        </>
    )
}