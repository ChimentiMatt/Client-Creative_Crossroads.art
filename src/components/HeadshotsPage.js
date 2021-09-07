import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import ImageGallery from 'react-image-gallery';


import dustin1 from '../img-headshots/dustin.jpeg'
import grif2 from '../img-headshots/griff.jpeg'
import june1 from '../img-headshots/June.jpeg'
import juneHus from '../img-headshots/junehus.jpeg'

export default function Headshots(props) {
  useEffect(() => {
    document.title = 'Headshots'
})
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
      original: `${grif2}`,
      thumbnail: `${grif2}`,
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
    document.getElementById('headshots-h1').innerHTML = 'Thank you'
    document.getElementById('headshots-h1').style.color = 'teal'
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
        <h1>Headshots</h1>
        <p>Want to book for headshots?</p>
        <p>Have any specific requests or questions?</p>
        <p>Eamil me or fill out the form below</p>
        <p>sfchim@msn.com</p>
        <div className="line"></div>  
      </div>


      <h1 id="headshots-about-header">About How I Take Your Headshots</h1>
                <div id="container-headshots-about">
                <p id="headshots-about">I have a home photography studio.  If you want formal photos I can either have you come to my home in Damascus, Oregon or I can bring my equipment to you.  For natural lighting, we can meet at your favorite park or whatever setting you would most enjoy.  It’s all about. You and I want you to be comfortable.</p>
              
                </div>
                <div className="line"></div>  
      <div className='sent-message'>

              <h1 id="headshots-h1">Contact Me </h1>
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