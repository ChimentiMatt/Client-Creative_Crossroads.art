import React from 'react'
import './App.css';

import { render } from "react-dom";
import { NavLink } from 'react-router-dom';

import BasicRows from "./components/PhotographyPage.js";
import PhotoInfo from "./components/PhotographyInfo.js";
import WeddingPage from './components/WeddingsPage.js';
import AboutPage from './components/AboutPage.js';
import FamilyPortraitPage from './components/FamilyPortraitPage.js';
import BottomBar from './components/BottomBar.js'
import ContactPage from './components/contactPage.js'
import HeadshotsPage from './components/HeadshotsPage.js'

import PianoCamera from "./img-phot/camera-square.jpeg";
import Logo from "./img-phot/Watermark.png";
import LogoHeader from "./img-phot/Watermark-for-header.png";
import Logo2 from "./img-phot/Watermark2.png";
import Logo3 from "./img-phot/Watermark3.png";
import Logo4 from "./img-phot/Watermark4.png";
import Logo5 from "./img-phot/Watermark5.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true,
      // activePage: false,
      // cat: 'kittens',
      activeLink: false
    };
  }


  render() {

    return (

      // Uess a Ternary webpage to landing page on first render 
      this.state.intro ?
        <div className="intro-page">
          <div className="container-intro-texts">

            <h1 className="intro-h1">CREATIVE CROSSROADS</h1>
            <img className="watermark" src={Logo5} ></img>

            <div className="container-rows">
              <Router>
                <div className="row0-buttons">
                  <NavLink onClick={() => this.setState({ intro: false })} className="intro-links" id="intro-about" to="/about">About</NavLink>
                  <NavLink onClick={() => this.setState({ intro: false })} className="intro-links" id="intro-contact" to="/contact">Contact</NavLink>
                </div>
    
                <div className="row1-buttons">
                  <NavLink onClick={() => this.setState({ intro: false })} className="intro-links" to="/photography">Photography</NavLink>
                  
                  <NavLink onClick={() => this.setState({ intro: false })} className="intro-links" to="/wedding">Weddings</NavLink>

                  <NavLink onClick={() => this.setState({ intro: false })} className="intro-links" to="/headshots">Headshots</NavLink>
                </div>
                
                <div className="row2-buttons">
                  <NavLink onClick={() => this.setState({ intro: false })} className="intro-links" to="/familyportrait">Family Portraits</NavLink>

                  <NavLink onClick={() => this.setState({ intro: false })} className="intro-links" to="/music">Musical Performances</NavLink>
                </div>
             </Router>
            </div>
            {/* Hidden button  */}
          </div>
          <div className="intro-page-img"></div>
        </div>

        : <div className="container-app">



          <Router>
            <div className="container-heading">
              <p className="header-font">CREATIVE CROSSROADS</p>
              <div>
                <img className="header-watermark" src={Logo5} ></img>

                <div className="about-contact">
                  <NavLink activeClassName="selected" activeStyle={{ opacity: 1}} className="links" to="/about">About</NavLink>

                  <NavLink activeClassName="selected" activeStyle={{ opacity: 1}} className="links"to="/contact">Contact</NavLink>
                </div>
              </div>

              <div className='container-a-tag'>
                <NavLink activeClassName="selected" activeStyle={{ opacity: 1}} className="links" to="/photography">Photography</NavLink>
      
                <NavLink activeClassName="selected" activeStyle={{ opacity: 1}} className="links" to="/wedding">Wedding Photography</NavLink>

                <NavLink activeClassName="selected" activeStyle={{ opacity: 1}} className="links" to="/headshots">Headshots</NavLink>

                <NavLink activeClassName="selected" activeStyle={{ opacity: 1}} className="links" to="/familyportrait">Family Portraits</NavLink>

                <NavLink activeClassName="selected"activeStyle={{ opacity: 1}} className="links" to="/music">Musical Performances</NavLink>



              </div>

            </div>
            <div className="content-body">
              <Switch>
                <Route exact path="/home">
                  {/* <Centerpiece /> */}
                </Route>

                <Route exact path="/photography">

                  <div className="container-photos">
                    <BasicRows />
                    <PhotoInfo />
                  </div>
                </Route>

                <Route exact path="/wedding">
                  <WeddingPage />
                </Route>

                <Route exact path="/headshots">
                  <HeadshotsPage />
                </Route>

                <Route exact path="/familyportrait" >
                  <FamilyPortraitPage toCallBack={(childState) => this.childStateCallback(childState)} />
                </Route>

                <Route exact path="/music">
                  <ContactPage />
                </Route>

                <Route exact path="/contact">
                  <ContactPage />
                </Route>


                <Route exact path="">
                  <AboutPage />
                </Route>
              </Switch>
            </div>

          </Router>
          <BottomBar />
        </div>
    );
  }
}



// export default function LandingPage() {
//   return (
//     <div>Test 1 2 3 4 5</div>
//   )
// }


// export default () => {
//   return {App, LandingPage}
// }
export default App;