import React from 'react';
import Lake from "./img-phot/worlds2.jpg"


export default function ContactPage() {
    return(
        <div >
            <div className="container-contact-img">
                <img src={Lake}></img>
            </div>
            <div className="container-contact-body">
                <h2>Contact</h2>
                <p>Want to book for Photos or Music?</p>
                <p>Have any specific requests or questions?</p>
                <p>Email: sfchim@msn.com</p>
            </div>

            {/* <div className="contact-line"></div> */}

        <div className="container-contact-form">
          <div className="inner-container-contact-form">
            <p><span className="underline">Email me,</span> or fill out the form below.</p>
            <input class="contact-form-field" placeholder="Name"></input>
            <input class="contact-form-field" placeholder="Email"></input>
            <input class="contact-form-field" placeholder="Phone Number"></input>
            <input class="contact-form-field" placeholder="Preferred Date"></input>
            
            <label for="product"></label>
                <select name="product" class="product-drop-down">
                    <option value="Weddings">Choose A Product</option>
                    <option value="Weddings">Weddings</option>
                    <option value="Photography">Photography</option>
                    <option value="Headshots">Headshots</option>
                    <option value="Family Portraits">Family Portraits</option>
                    <option value="Musical Performances">Musical Performances</option>
                </select>

            <textarea class="form-field" placeholder="Anything you want me to know" type="text"></textarea>
            <button class="form-btn" >Submit Form</button>
          </div>
         {/* <img className="right-img" src={Glory} alt="test" /> */}
        </div>
        </div>
    )
}
