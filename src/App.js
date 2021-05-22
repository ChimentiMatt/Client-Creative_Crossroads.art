import React from 'react'
import './App.css';
import Topbar from './Heading.js';
import WeddingPage from './Wedding.js';
import Centerpiece from './home.js';
import FamilyPortraitPage from './Familyportrait.js';
import PianoCamera from "./img-phot/camera-square.jpeg";
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
          <div className="intro-page-img" >
            {/* <img src={PianoCamera} ></img> */}
          </div>
          <button onClick={ ()=> this.setState({intro: false})}>Click me!</button>
        </div>

      : <div className="container-app">
          
  

        <Router>
            <div className="container-heading">
                <Link className="logo" to="/home">CREATIVE CROSSROADS</Link>


                    <div className='container-a-tag'>
                        <Link className="links" to="/photography">PHOTOGRAPHY</Link>
        
                        <Link className="links" to="/wedding">WEDDING PHOTOGRAPHY</Link>

                        <Link className="links" to="/headshots">HEADSHOTS</Link>

                        <Link id={this.state.active} className="links" to="/familyportrait">FAMILY PORTRAITS</Link>

                        <Link className="links" to="/music">MUSICAL PERFORMANCES</Link>
                    </div>

            </div>
            <div className="content-body">
                <Switch>
                    <Route exact path="/home">
                        <Centerpiece />
                    </Route>
                    <Route exact path="/photography">

                    </Route>
                    <Route exact path="/wedding">
                        <WeddingPage />
                    </Route>
                    <Route exact path="/headshots">

                    </Route>
                    <Route exact path="/:familyportrait" >
                        <FamilyPortraitPage makeActive={this.makeActive.bind(this)}/>
                        
                    </Route>
                    <Route exact path="/music">

                    </Route>
                    <Route exact path="">
                        <p>testing</p>
                    </Route>
                </Switch>
            </div>

        </Router>
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