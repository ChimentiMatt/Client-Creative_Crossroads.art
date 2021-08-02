import React from 'react';
import { IconContext } from "react-icons";
import { FaInstagram } from "react-icons/fa";

export default function BottomBar() {
    return (
        <div className="container-home">
            <div id="app"></div>
  
            <div className="footer">  
                <div className="footer-text">   
                    <div className="footer-left-container">
                        <p>CREATIVE CROSSROADS,</p> 
                        <p>SUZANNE CHIMENTI PHOTOGRAPHY</p>
                    </div>
                    <p id="ContainerInstagramIcon" onClick={()=> window.open("https://www.instagram.com/suzannechim/", "_blank")}>
                    <IconContext.Provider value={{ size: "2em", hover: "red"}}>
                        <div id="instagramIcon">
                            <FaInstagram/>
                        </div>
                    </IconContext.Provider>
                </p>
                    <p>ITHICA WEB DESIGN</p>
                </div>  
            </div>
        </div>
    )
}
