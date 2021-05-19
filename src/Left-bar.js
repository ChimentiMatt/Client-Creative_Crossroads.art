import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function LeftBar() {
    return (
        <div>
          <div> <ProductATags/></div>
        </div>
    )

}

function ProductATags() {
    return <div className="container-left-bar"> 
        <Router>
            <div className="title">
                <Link className="logo" to="/home">CREATIVE CROSSROADS</Link>
            </div>
            <div className='container-a-tag'>
                <Link className="links" to="/photography">PHOTOGRAPHY</Link>
                <br></br>
                <br></br>
                <Link className="links" to="/wedding">WEDDING PHOTOGRAPHY</Link>
                <br></br>
                <br></br>
                <Link className="links" to="/headshots">HEADSHOTS</Link>
                <br></br>
                <br></br>
                <Link className="links" to="/music">MUSICAL PERFORMANCES</Link>
            </div>

        </Router>
    </div>
}

// export default LeftBar