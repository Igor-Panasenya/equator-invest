import React from 'react';
import './scss/notFound.scss';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="container">
                <h1>Soory, Not Found Page ! :(</h1>
                <Link onClick={() => window.scroll(0,0)} to="/" style={{color: "#333"}}>Home</Link>
            </div>
        </div>
    );
};

export default NotFound;