import React from 'react';
import './header.scss';
import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import Logo from "../IU/logo/Logo";
import logo from '../../img/logo_header.svg';

const Header = () => {

    const [isActiveHamburger, setIsActiveHamburger] = useState(false);

    return (
        <header>
            <div className="navbar-container">
                <Logo setIsActiveHamburger={setIsActiveHamburger} image={logo}/>

                <div className={isActiveHamburger ? "menu active" : "menu"}>
                    <NavLink className="menu-item" onClick={() => {setIsActiveHamburger(false)}} to="/">Home</NavLink>
                    <NavLink className="menu-item" onClick={() => {setIsActiveHamburger(false)}} to="/who-we-are">Who We are</NavLink>
                    <NavLink className="menu-item" onClick={() => {setIsActiveHamburger(false)}} to="/blog">Blog</NavLink>
                    <NavLink className="menu-item" onClick={() => {setIsActiveHamburger(false)}} to="/what-we-look-for">What We Look For</NavLink>
                    <NavLink className="menu-item" onClick={() => {setIsActiveHamburger(false)}} to="/how-we-help">How We Help</NavLink>
                </div>

                <div className={isActiveHamburger ? "header-buttons active" : "header-buttons"}>
                    <Link className="btn-type-primary" onClick={() => {setIsActiveHamburger(false)}} to="/invest-with-us">Invest</Link>
                    <a href="#" className="btn-type-secondary">Pitch Us</a>
                </div>


                <button
                    onClick={() => setIsActiveHamburger(!isActiveHamburger)}
                    className={isActiveHamburger ? "hamburger active" : "hamburger"}>
                    <span className="bar bar-top"></span>
                    <span className="bar bar-mid"></span>
                    <span className="bar bar-bottom"></span>
                </button>

                <div className={isActiveHamburger ? "bg-blur active" : "bg-blur"}></div>

            </div>
        </header>
    );
};

export default Header;