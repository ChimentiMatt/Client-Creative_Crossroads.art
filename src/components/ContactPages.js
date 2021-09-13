import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

// import { IconContext } from "react-icons";
// import { FaInstagram } from "react-icons/fa";
import Lake from "../img-phot/worlds2.jpg"

export default function ContactPages() {
    const [disabled, setDisabled] = useState(false);
    const [visibility, setBlock] = useState('none')

    useEffect(() => {
        document.title = 'Contact'
    })

    function sendEmail(e) {
        e.preventDefault();
        setDisabled(true)
        setBlock('block')
        document.getElementById('contact-h1').innerHTML = 'Thank You'
        document.getElementById('contact-h1').style.color = 'Teal'

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
                <img id="contact-img" src={Lake} alt={"lake"}></img>
            </div>




            <div className='sent-message'>

                <h1 id='contact-h1'>Contact Me </h1>
                <p style={{display: visibility}}>You will recieve a call within 24 Hours</p>
                <p style={{display: visibility}}>Suzanne Chimenti</p>

            </div>
            <div className="container-contact-form">
                <div className="inner-container-contact-form">

                    <form onSubmit={sendEmail}>
                        <label>
                            <input disabled={disabled} className="contact-form-field" name="name" placeholder="Name"></input>
                        </label>
                        <label>
                            <input disabled={disabled} className="contact-form-field" name="email" placeholder="Email"></input>
                        </label>
                        <label>
                            <input disabled={disabled} className="contact-form-field" name="phone_number"placeholder="Phone Number"></input>
                        </label>
                        <label>
                            <input disabled={disabled} className="contact-form-field" name="pre_date" placeholder="Preferred Date"></input>
                        </label>

                        <label for="product">
                            <select disabled={disabled} name="product" className="product-drop-down">
                                <option value="Weddings">Interested In</option>
                                <option value="Weddings">Weddings</option>
                                <option value="Photography">Photography</option>
                                <option value="Headshots">Headshots</option>
                                <option value="Family Portraits">Family Portraits</option>
                                <option value="Musical Performances">Musical Performances</option>
                            </select>
                        </label>
                        <label>
                            <textarea disabled={disabled} className="form-field" name="message" placeholder="Anything you want me to know" type="text"></textarea>
                        </label>
                        <label>
                            <input type="submit" disabled={disabled} className="form-btn" value="Submit" ></input>
                        </label>
                        </form>
                </div>
            </div>
                <div id="contactPageExtraSpacing"></div>
        </div>
    )
}




