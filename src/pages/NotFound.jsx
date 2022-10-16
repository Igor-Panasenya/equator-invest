import React from 'react';
import './scss/notFound.scss';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="container">
                <h1>Not Found Page</h1>
                <Link to="/" style={{color: "#333"}}>Home</Link>
            </div>
        </div>
    );
};

export default NotFound;