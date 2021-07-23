import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Lake from "../img-phot/worlds2.jpg"
import LakeCropped from "../img-phot/worlds2.jpg"
import Lake2 from "../img-phot/two-worlds.jpeg"


export default function ContactPage() {
    const [disabled, setDisabled] = useState(false);
    const [visibility, setBlock] = useState('none')
    const [hide, setHidden] = useState('visible')

    function sendEmail(e) {
        e.preventDefault();
        setDisabled(true)
        setBlock('block')
        setHidden('none')
        document.getElementById('contact-h3').innerHTML = 'Thank You'
        document.getElementById('contact-h3').style.color = 'Teal'
        emailjs.sendForm('service_2201c2n', "template_a70c99a", e.target, 'user_7oFNkpAKDIKus9MJJpUuF')
            .then((result) => {
                console.log("result text", result.text);
                
            }, (error) => {
                console.log("error", error.text);
                
            });
    }

    return (
        <div >
            <div className="container-contact-img">
                <img src={Lake}></img>
            </div>
            <div className="container-contact-body">
                <h2>Contact</h2>
                <p>Want to book for Photos or Music?</p>
                <p>Have any specific requests or questions?</p>
                <p>Eamil me or fill out the form below</p>
                <p>Email: sfchim@msn.com</p>
            </div>
            <div className="line"></div>


            <div className='sent-message'>

                <h3 id='contact-h3'>Contact Me </h3>
                <p style={{display: visibility}}>You will recieve a call within 24 Hours</p>
                <p style={{display: visibility}}>Suzanne Chimenti</p>

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
                            <input disabled={disabled} class="contact-form-field" name="phone_number"placeholder="Phone Number"></input>
                        </label>
                        <label>
                            <input disabled={disabled} class="contact-form-field" name="pre_date" placeholder="Preferred Date"></input>
                        </label>

                        <label for="product">
                            <select disabled={disabled} name="product" class="product-drop-down">
                                <option value="Weddings">Interested In</option>
                                <option value="Weddings">Weddings</option>
                                <option value="Photography">Photography</option>
                                <option value="Headshots">Headshots</option>
                                <option value="Family Portraits">Family Portraits</option>
                                <option value="Musical Performances">Musical Performances</option>
                            </select>
                        </label>
                        <label>
                            <textarea disabled={disabled} class="form-field" name="message" placeholder="Anything you want me to know" type="text"></textarea>
                        </label>
                        <label>
                            <input type="submit" disabled={disabled} class="form-btn" value="Submit" ></input>
                        </label>
                        </form>
                </div>
                {/* <img className="right-img" src={Glory} alt="test" /> */}
            </div>
        </div>
    )
}
