import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ImageGallery from 'react-image-gallery';


import dustin1 from '../img-headshots/dustin.jpeg'
import grif1 from '../img-headshots/grif.jpeg'
import june1 from '../img-headshots/June.jpeg'
import juneHus from '../img-headshots/junehus.jpeg'

export default function Headshots(props) {
  return (
    <div >
      <GalleryHeadshots />
      <FormHeadshots />
    </div>
  )
}

function GalleryHeadshots() {
  const images = [
    {
      original: `${grif1}`,
      thumbnail: `${grif1}`,
    },
    {
      original: `${dustin1}`,
      thumbnail: `${dustin1}`,
    },
    {
      original: `${june1}`,
      thumbnail: `${june1}`,
    },
    {
      original: `${juneHus}`,
      thumbnail: `${juneHus}`,
    },
  ];
  return(
    <>
      <div id="headshot-gallery">
        <ImageGallery items={images} />
      </div>
    </>
  )
}



function FormHeadshots(params) {
  const [disabled, setDisabled] = useState(false);
  const [visibility, setBlock] = useState('none')
  const [hide, setHidden] = useState('visible')

  function sendEmail(e) {
    e.preventDefault();
    setDisabled(true)
    setBlock('block')
    setHidden('none')
    document.getElementById('headshots-h3').innerHTML = 'Thank you'
    document.getElementById('headshots-h3').style.color = 'teal'
    emailjs.sendForm('service_2201c2n', "template_xitg4tf", e.target, 'user_7oFNkpAKDIKus9MJJpUuF')
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
        <h2>Headshots</h2>
        <p>Want to book for Photos or Music?</p>
        <p>Have any specific requests or questions?</p>
        <p>Email: sfchim@msn.com</p>
        <div className="line"></div>  
      </div>
      <div className='sent-message'>

              <h3 id="headshots-h3">Contact Me </h3>
              <p style={{display: visibility}}>You will recieve a call within 24 Hours</p>
              <p style={{display: visibility}}>Suzanne Chimenti</p>
      </div>

      <div className="container-contact-form">

        <div className="inner-container-contact-form">

          <form onSubmit={sendEmail}>
            <input disabled={disabled} class="contact-form-field" name="name" placeholder="Name"></input>
            <input disabled={disabled} class="contact-form-field" name="email" placeholder="Email"></input>
            <input disabled={disabled} class="contact-form-field" name="phone_number" placeholder="Phone Number"></input>

            <input disabled={disabled} class="contact-form-field" name="pre_date" placeholder="Preferred Date"></input>

            <textarea disabled={disabled} class="form-field" name="message" placeholder="Anything you want me to know" type="text"></textarea>
            <button disabled={disabled} class="form-btn" >Submit Form</button>
          </form>
        </div>
        {/* <img className="right-img" src={Glory} alt="test" /> */}
      </div>
    </>
  )
}