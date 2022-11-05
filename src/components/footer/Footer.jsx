import React from 'react';
import './footer.scss';
import Logo from "../IU/logo/Logo";
import logo from '../../img/logo_footer.png';
import {NavLink} from "react-router-dom";
import {BsTwitter} from "react-icons/bs";
import {IoLogoLinkedin} from "react-icons/io";
import NewslettersInput from "../IU/newsletter-input/NewslettersInput";
import imagePhone from '../../img/footer/phone.png';
import imageEmail from '../../img/footer/email.png';
import imageLocation from '../../img/footer/location.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">

                <div className="left-column footer-column">
                    <Logo image={logo}/>

                    <div className="socials">
                        <a target="_blank" href="https://twitter.com/?lang=ru"><BsTwitter color="white" size={40}/></a>
                        <a target="_blank"  href="https://about.linkedin.com/ru-ru?lr=1"><IoLogoLinkedin color="white" size={40}/></a>
                    </div>

                </div>
                <div className="mid-column footer-column">
                    <div className="menu">
                        <NavLink onClick={() => window.scroll(0,0)} className="menu-item" to="/">Home</NavLink>
                        <NavLink onClick={() => window.scroll(0,0)} className="menu-item" to="/who-we-are">Who We are</NavLink>
                        <NavLink onClick={() => window.scroll(0,0)} className="menu-item" to="/blog">Blog</NavLink>
                        <NavLink onClick={() => window.scroll(0,0)} className="menu-item" to="/what-we-look-for">What We Look For</NavLink>
                        <NavLink onClick={() => window.scroll(0,0)} className="menu-item" to="/how-we-help">How We Help</NavLink>
                    </div>

                    <div className="newsletter">
                        <NewslettersInput />
                    </div>
                </div>
                <div className="right-column footer-column">
                    <a href="tel:+74951234567" className="contact-item">
                        <img src={imagePhone} alt="phone"/>
                        <p>+374 96977770</p>
                    </a>
                    <a href="mailto:makaryanartur.am@gmail.com" className="contact-item">
                        <img src={imageEmail} alt="email"/>
                        <p>makaryanartur.am@gmail.com</p>
                    </a>
                    <a href="https://www.google.com/maps/place/Drottninggatan+86,+111+36+Stockholm,+%D0%A8%D0%B2%D0%B5%D1%86%D0%B8%D1%8F/@59.3359346,18.0605218,18.25z/data=!4m5!3m4!1s0x465f9d670535d027:0xc99b86a21445b773!8m2!3d59.3359135!4d18.0595112?hl=ru"  target="_blank" className="contact-item">
                        <img src={imageLocation} alt="location"/>
                        <p>Drottninggatan 86, 111 36 Stockholm Sweden. <br /> Nairobi, Kenya</p>
                    </a>
                </div>
            </div>
            <div className="footer-info">
                ©2022 Equator invest. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;