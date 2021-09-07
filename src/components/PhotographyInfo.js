import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

export default function PhotoInfo() {
    const [disabled, setDisabled] = useState(false);
    const [visibility, setBlock] = useState('none')
    const [hide, setHidden] = useState('visible')

    useEffect(() => {
        document.title = 'Photography'
    })

    function sendEmail(e) {
        e.preventDefault();
        setDisabled(true)
        setBlock('block')
        setHidden('none')
        document.getElementById('photo-h1').innerHTML = "Thank You"
        document.getElementById('photo-h1').style.color = "teal"
        emailjs.sendForm('service_2201c2n', "template_yu30god", e.target, 'user_7oFNkpAKDIKus9MJJpUuF')
            .then((result) => {
                console.log("result text", result.text);

            }, (error) => {
                console.log("error", error.text);

            });
    }

    return (
        <div >

            {/* div that gives a top margin is much simplier than editing plug in */}
            <div className="margin-top"></div>
            <div className="line"></div>

            <div className="container-contact-body">
                <h1>Purchase A Print</h1>
                <p>Want to buy a print?</p>
                <p>Have any specific requests or questions?</p>
                <p>Email me or fill out the form below</p>
                <p>sfchim@msn.com</p>
            </div>
            <div className="line"></div>

            <div id="container-photog-about">
                <h1>About My Photography</h1>
                <p>My desire to create led me to the study of photography. I can often be found at the
                    Columbia River Gorge, at Mt. Hood or at the Oregon Coast capturing sunrises and sunsets. I
                    have recently turned my attention to photographing weddings and events.
                    <br></br><br></br>
                    I have invested a considerable amount of money into state-of-the-art photographic equipment
                    (currently shooting with a Nikon D850).
                    My skills include sophisticated editing to make your
                    photos as gorgeous as possible. I can also bring a drone to your event so that some of the
                    photos will have that magical overhead angle.
                    <br></br><br></br>
                    If you are interested in both music and photography I can bring along a second photographer
                    that can cover for me while I play music. Let’s talk.
                    <br></br><br></br>
                    Whether you need a musician or a photographer for your event, (or even a combination) I will
                    bring my skills, a finely tuned work ethic and a sense of joy in doing what I love to make your
                    day extra special.
                </p>
                </div>

            <div className="line"></div>

            <div className='sent-message'>
                <h1 id="photo-h1">Contact Me </h1>
                <p style={{display: visibility}}>You will recieve a call within 24 Hours</p>
                <p style={{display: visibility}}>Suzanne Chimenti</p>
            </div>
            <div className="container-contact-form">
                <div className="inner-container-contact-form">
                    <form onSubmit={sendEmail}>
                        <input disabled={disabled} class="contact-form-field" name="name" placeholder="Name"></input>
                        <input disabled={disabled} class="contact-form-field" name="email" placeholder="Email"></input>
                        <input disabled={disabled} class="contact-form-field" name="phone_number" placeholder="Phone Number"></input>
                        <input disabled={disabled} class="contact-form-field" name="product" placeholder="Which Photo"></input>
                        <textarea disabled={disabled} class="form-field" name="message" placeholder="Anything you want me to know" type="text"></textarea>
                        <button disabled={disabled} class="form-btn" >Submit Form</button>
                    </form>
                </div>
                {/* <img className="right-img" src={Glory} alt="test" /> */}
            </div>

        </div>

    )
}
