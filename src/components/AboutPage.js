import React from 'react';
import centerpieceImg from "../img-phot/suzanne-cropped.jpg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function AboutPage() {
    return (
        <div className="container-home">

            <div className="container-about-img">
                <img id="about-img" src={centerpieceImg} alt="test" />
            </div>
            <div className="container-about-text">
                <p className="about-heading-text">
                    About Me
                </p>
                <p className="about-text">
                    My name is Suzanne Chimenti and I have spent my life happily exploring the arts. I live right outside Portland in Damascus Oregon. I am specialized in music and photography. As a young girl, I learned how to sing and play the piano with my mother.  I continued music into adulthood by learning an assortment of instruments such as the violin, guitar, and banjo. I am in the Willamette Valley Orchestra, I have been a theatrical actor and I have directed high school productions. For my formal career, I became a music teacher and have taught elementary, middle, and high schools. 
                    I would love to hear from you and do a shoot, photograph your wedding, take headshots, take family portraits or play at a venue needing music. 
                </p>
                <p className="about-text">
                    My love of the arts is not limited to one medium. I became interested in photography and the visual arts and it grew from a hobby into a professional skill.
                </p>
                <p className="about-text">
                    On any given day I can be found in my music room/workshop playing the piano, practicing the violin, editing photos, or venturing out into the world for a photo shoot. 
                </p>
                <p className="about-text">
                    I would love to hear from you and do a shoot, photograph your wedding, take headshots, take family portraits or play at a venue needing music. 
                </p>
                <p className="about-name">
                   - Suzanne Chimenti
                </p>

            </div>
        </div>
    )

}
