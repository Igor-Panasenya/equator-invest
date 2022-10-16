import React from 'react';
import {Link} from "react-router-dom";

const Logo = ({setIsActiveHamburger, image}) => {

    const onClickLogo = () => {
        window.scroll(0,0);
        setIsActiveHamburger(false);
    }

    return (
        <Link onClick={() => onClickLogo()} to="/" className="logo">
            <img src={image} alt="logo"/>
        </Link>
    );
};

export default Logo;