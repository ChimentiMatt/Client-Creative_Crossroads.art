import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function WeddingPage() {
    return (
        <div>
            <Wedding/>
            <div className="container-photography">
            <p>TESTTTTTTTTTTTTTTTTTTTTTTTTT</p>
        </div>     
        </div>
    )
}

function Wedding() {
    return ( 
        <div className="container-photography">
            <p>TESTTTTTTTTTTTTTTTTTTTTTTTTT</p>
        </div>     
    )
}