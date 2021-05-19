import React from 'react'
import './App.css';
import LeftBar from './Left-bar.js';
import Title from './home.js'
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
      car: 'test'
    };
  }
  render() { 
    return (
      <div className="container-app">
        <LeftBar/>
        <Router>
        <div className="App">
          <Switch>
            <Route path ='/home'>
              <Title /> 
            </Route>
            <Route path="/wedding">
              <div className="container-photography">
              <p>TESTTTTTTTTTTTTTTTTTTTTTTTTT</p>
              </div>
            </Route>   
          </Switch>
        </div>
        </Router>
      </div>
    );
  }
}
export default App;
