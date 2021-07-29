import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import centerpieceImg from "../img-phot/suzanne-cropped.jpg"

export default function MusicPage() {
    const [disabled, setDisabled] = useState(false);
    const [visibility, setBlock] = useState('none')
    const [hide, setHidden] = useState('visible')

    function sendEmail(e) {
        e.preventDefault();
        setDisabled(true)
        setBlock('block')
        setHidden('none')
        document.getElementById('music-h1').innerHTML = 'Thank You'
        document.getElementById('music-h1').style.color = 'Teal'
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
            <img id="music-img" src={centerpieceImg} alt="test" />
            </div>
            <div className="container-contact-body">

                <h1>Music</h1>
                <p>Want to book for Photos or Music?</p>
                <p>Have any specific requests or questions?</p>
                <p>Eamil me or fill out the form below</p>
                <p>Email: sfchim@msn.com</p>
            </div>
                <div className="line"></div>
                    <h1 id="music-about-header">About My Musical Career</h1>
                <div id="container-music-about">

                    <p id="music-about">Growing up in Milwaukie, Oregon, I was a reluctant and rebellious piano student of my piano
                        teacher mother. Her will proved to be stronger than mine and the music eventually won me
                        over and I feel deeply in love with most things artistic. I majored in voice in college and
                        continued my piano studies and became a choir teacher for Reynolds School District (currently
                        teaching at Walt Morey Middle School). Along my musical journey I also picked up violin (I am
                        current president of Willamette Falls Symphony), guitar, banjo and ukulele. I have been
                        selected to play Rhapsody in Blue by George Gershwin with Willamette Falls Symphony in
                        March of 2021.
                        My services for your event include your choice of music. I am experienced at classical and jazz
                        repertoire and can play most any music that we can find music to. I bring a professional
                        keyboard in a grand piano case to your event, making it look as well as sound classy. I also have
                        professional sound equipment that can be included in the package so if you need a sound
                        system to play music for dancing, or a cordless microphone for announcements, I am happy to
                        provide that. I also have many musician friends so if you would like another instrument to be
                        featured I can locate and hire those musicians for you.
                                        </p>
                </div>
     
            <div className="line"></div>


            <div className='sent-message'>

                <h1 id='music-h1'>Contact Me </h1>
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
