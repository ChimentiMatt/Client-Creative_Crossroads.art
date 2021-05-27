import React from 'react';

export default function PhotoInfo() {
    return(
        <div >
            {/* div that gives a top margin is much simplier than editing plug in */}
            <div className="margin-top"></div>
            <div className="line"></div>

            <div className="container-contact-body">
                <h2>Purchase A Print</h2>
                <p>Want to buy a print?</p>
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
        <div className="line"></div>
        </div>
        
    )
}
