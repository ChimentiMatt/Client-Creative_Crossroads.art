import React, { useState, useEffect } from 'react';
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
    useEffect(() => {
        document.title = 'Weddings'
    })
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
        document.getElementById('wedding-h1').innerHTML = 'Thank You'
        document.getElementById('wedding-h1').style.color = 'teal'
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
                <h1>Book For Your Wedding</h1>
                <p>Want to book for your Wedding and events?</p>
                <p>Have any specific requests or questions?</p>
                <p>Eamil me or fill out the form below</p>
                <p>sfchim@msn.com</p>
            </div>
            <div className="line"></div>
                <h1 id="weddings-about-header">About How I Photography Your Wedding</h1>
                <div id="container-weddings-about">
                <p id="weddings-about">It’s your day and I want the shots to be a wonderful memory for you.  Before the wedding we will talk about your needs and I will do my best to make you 100% happy.  

                    I believe that every photo is important.  I photograph everyone involved including the wedding party and the guests.  My goal is to have always made a plan with my client so that when the day comes, it is something that can just take off their plate and not worry about.  Turn it over to me so you can enjoy your day. As a bonus, I bring my drone so you can have that movie star effect of overhead shots. I use state-of-the art equipment for both taking the photos and for processing afterwards.  I can easily remove blemishes, soften skin, and even take away pounds.  I want you to feel and look your absolute best.

                    If you choose, I can hire an extra photographer for part of the day.  I can use that person to shoot the actual wedding while I provide music. If I haul out my piano for the event, you can use my Bose Sound System and cordless microphone for your wedding.  Make a play list and hook it up to the sound system through your phone and you can have beautiful music for the reception and save money on a DJ.  Let’s talk...</p>
                </div>
            <div className="line"></div>


            <div className='sent-message'>
                <h1>Contact Me</h1>
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