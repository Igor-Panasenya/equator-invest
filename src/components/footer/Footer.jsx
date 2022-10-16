import React from 'react';
import './footer.scss';
import Logo from "../IU/logo/Logo";
import logo from '../../img/logo_footer.png';
import {NavLink} from "react-router-dom";
import {BsTwitter} from "react-icons/bs";
import {IoLogoLinkedin} from "react-icons/io";
import { useForm } from "react-hook-form";

const Footer = () => {

    const { register,
        formState: {
        errors,
        },
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data));
        reset();
    };

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
                        <NavLink className="menu-item" to="/">Home</NavLink>
                        <NavLink className="menu-item" to="/who-we-are">Who We are</NavLink>
                        <NavLink className="menu-item" to="/blog">Blog</NavLink>
                        <NavLink className="menu-item" to="/what-we-look-for">What We Look For</NavLink>
                        <NavLink className="menu-item" to="/how-we-help">How We Help</NavLink>
                    </div>

                    <div className="newsletter">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                Join Our Newsletter
                                <input {...register("email", { required: true, pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu })} placeholder="Email"/>
                                {errors.email && <p>Error</p>}
                            </label>
                            <input className="submit" type="submit" />
                        </form>
                    </div>
                </div>
                <div className="right-column footer-column"></div>
            </div>
            <div className="footer-info">
                ©2022 Equator invest. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;