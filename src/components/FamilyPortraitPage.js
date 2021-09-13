import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import emailjs from 'emailjs-com';

import img1 from "../img-family/img1.jpeg";
import img2 from "../img-family/img2.jpeg";
import img3 from "../img-family/img3.jpeg";
import img4 from "../img-family/img4.jpeg";
import img7 from "../img-family/img7.jpeg";
import img8 from "../img-family/img8.jpeg";

export default function FamilyPortraitPage(props) {
  useEffect(() => {
    document.title = 'Family'
})
  return (
    <div className="family-page">
      <FamilyGallery />
      <FamilyContent />
    </div>
  )
}

function FamilyGallery() {
  const images = [
    {
      original: `${img1}`,
      thumbnail: `${img1}`,
    },
    {
      original: `${img2}`,
      thumbnail: `${img2}`,
    },
    {
      original: `${img3}`,
      thumbnail: `${img3}`,
    },
    {
      original: `${img4}`,
      thumbnail: `${img4}`,
    },
    {
      original: `${img7}`,
      thumbnail: `${img7}`,
    },
    {
      original: `${img8}`,
      thumbnail: `${img8}`,
    },
  ];
return(
    <>
    <ImageGallery items={images} />
    </>
)
}

function FamilyContent() {
  const [disabled, setDisabled] = useState(false);
  const [visibility, setBlock] = useState('none')

  function sendEmail(e) {
    e.preventDefault();
    setDisabled(true)
    setBlock('block')
    document.getElementById('family-h1').innerHTML = 'Thank You'
    document.getElementById('family-h1').style.color = 'Teal'
    emailjs.sendForm('service_2201c2n', "template_a70c99a", e.target, 'user_7oFNkpAKDIKus9MJJpUuF')
        .then((result) => {
            console.log("result text", result.text);

        }, (error) => {
            console.log("error", error.text);

        });
}
  return(
    <div className="familyContent">
        
            <div className="line"></div>
            <div className="container-contact-body">
                <h1>Book Your Family</h1>
                {/* <p>Want to book for your big day</p> */}
                <p>Have any specific requests or questions?</p>
                <p>Eamil me or fill out the form below</p>
                <p>sfchim@msn.com</p>
                <div className="line"></div>
            </div>
            <h1 id="family-about-header">About How I Photograph Your Family</h1>
                <div id="container-family-about">
                <p id="family-about">When you have family photos taken, you create memories for both yourself and for future generations. I especially love photographing kids. It reminds me of all of those years of teaching music in public schools. 
Together we can choose a location that is especially meaningful to you.  Contact me and let’s talk about it.
                    </p>
              
                </div>


            <div className="line"></div>

            <div className='sent-message'>

                <h1 id="family-h1">Contact Me </h1>
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
                            <input disabled={disabled} class="contact-form-field" name="pre_date" placeholder="Preferred Date"></input>
                        </label>

                        <label>
                            <textarea disabled={disabled} class="form-field" name="message" placeholder="Anything you want me to know" type="text"></textarea>
                        </label>
                        <label>
                            <input disabled={disabled} type="submit" class="form-btn" value="Submit" ></input>
                        </label>
                    </form>
                </div>
                {/* <img className="right-img" src={Glory} alt="test" /> */}
            </div>
    </div>    
  )
}




