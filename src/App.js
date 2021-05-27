import React from 'react'
import './App.css';

import { render } from "react-dom";

import BasicRows from "./photos.js";
import PhotoInfo from "./PhotosInfo.js";
import WeddingPage from './Wedding.js';
import AboutPage from './about';
import FamilyPortraitPage from './Familyportrait.js';
import BottomBar from './BottomBar.js'
import ContactPage from './contact.js'

import PianoCamera from "./img-phot/camera-square.jpeg";
import Logo from "./img-phot/Watermark.png";
import LogoHeader from "./img-phot/Watermark-for-header.png";
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
      activePage: false,
      cat: 'kittens',
      activeLink: 'dormant'
    };
  }

  makeActive(params) {
    this.setState({
      activeLink: params
    })
  }

  // function mActive(params) {
  //   const {  }
  // }

  render() {

    return (

      // Uess a Ternary webpage to landing page on first render 
      this.state.intro ?
        <div className="intro-page">
          <div className="container-intro-texts">

            <h1 className="intro-h1">CREATIVE CROSSROADS</h1>
            <img className="watermark" src={LogoHeader} ></img>
            <div className="container-rows">
              <div className="row1-buttons">
                <button className="intro-page-btn1" onClick={() => this.setState({ intro: false })}>Photography</button>
                <button className="intro-page-btn2" onClick={() => this.setState({ intro: false })}>Weddings </button>
                <button className="intro-page-btn3" onClick={() => this.setState({ intro: false })}>Headshots</button>
              </div>
              <div className="row2-buttons">
                <button className="intro-page-btn4" onClick={() => this.setState({ intro: false })}>Family Portraits</button>
                <button className="intro-page-btn5" onClick={() => this.setState({ intro: false })}>Musical Performances</button>
              </div>
            </div>
            {/* Hidden button  */}
          </div>
            <button className="intro-page-btn-catch-all" onClick={() => this.setState({ intro: false })}>.</button>
          <div className="intro-page-img"></div>
        </div>

        : <div className="container-app">



          <Router>
            <div className="container-heading">
              <p className="header-font">CREATIVE CROSSROADS</p>
              <div>
                <img className="header-watermark" src={LogoHeader} ></img>

                <div className="about-contact">
                <Link id="about" className="links" to="/about">About</Link>

                <Link id="contact" className="links" to="/contact">Contact</Link>  
                </div>
              </div>
              <div className='container-a-tag'>
                <Link className="links" to="/photography">Photography</Link>

                <Link className="links" to="/wedding">Wedding Photography</Link>

                <Link className="links" to="/headshots">Headshots</Link>

                <Link id={this.state.active} className="links" to="/familyportrait">Family Portraits</Link>

                <Link className="links" to="/music">Musical Performances</Link>
          


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
                </Route>

                <Route exact path="/familyportrait" >
                  <FamilyPortraitPage makeActive={this.makeActive.bind(this)} />
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