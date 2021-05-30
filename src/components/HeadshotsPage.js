import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Headshots(props) {
  return (
    <div className="family-page">
      <FormHeadshots />
    </div>
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
        <p style={{ display: visibility }}>Thank you for your request. </p>
        <p style={{ display: visibility }}>You will recieve a call within 24 Hours</p>
        <p style={{ display: visibility }}>Suzanne Chimenti</p>
        <p style={{ display: hide }}>Make Contact</p>
        <p style={{ dissplay: hide }}>by filling out the form below</p>
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