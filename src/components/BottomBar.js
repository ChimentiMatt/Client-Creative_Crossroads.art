import React from 'react';

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

                    <div>
                        <p>ODYSSEY WEB DESIGN</p>
                        {/* <p id="ContainerInstagramIcon" onClick={() => window.open("https://www.instagram.com/suzannechim/", "_blank")}>
                            <IconContext.Provider value={{ size: "2em", hover: "red" }}>
                                <div id="instagramIcon">
                                    <FaInstagram />
                                </div>
                            </IconContext.Provider>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
