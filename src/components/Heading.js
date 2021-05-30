import React from 'react';
import WeddingPage from './Wedding.js';
import Centerpiece from './home.js';
import FamilyPortraitPage from './Familyportrait.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function Topbar() {
    return (
        <div>
            <div> <ProductATags /></div>
        </div>
    )
}

function ProductATags() {
    return (
        <Router>
            <div className="container-heading">
                <Link className="logo" to="/home">CREATIVE CROSSROADS</Link>


                    <div className='container-a-tag'>
                        <Link className="links" to="/photography">PHOTOGRAPHY</Link>
        
                        <Link className="links" to="/wedding">WEDDING PHOTOGRAPHY</Link>

                        <Link className="links" to="/headshots">HEADSHOTS</Link>

                        <Link className="links" to="/familyportrait">FAMILY PORTRAITS</Link>

                        <Link className="links" to="/music">MUSICAL PERFORMANCES</Link>
                    </div>

            </div>
            <div className="content-body">
                <Switch>
                    <Route exact path="">
                        <p>testing</p>
                    </Route>
                    <Route path="/home">
                        <Centerpiece />
                    </Route>
                    <Route path="/photography">

                    </Route>
                    <Route path="/wedding">
                        <WeddingPage />
                    </Route>
                    <Route path="/headshots">

                    </Route>
                    <Route path="/familyportrait">
                        <FamilyPortraitPage />
                    </Route>
                    <Route path="/music">

                    </Route>
                </Switch>
            </div>

        </Router>
    )
}

// export default LeftBar