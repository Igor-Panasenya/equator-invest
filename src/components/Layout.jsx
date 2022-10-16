import React from 'react';
import { Outlet } from "react-router-dom";
import {useState} from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {

    const [isActiveHamburger, setIsActiveHamburger] = useState(false);
    const onClickLogo = () => {
        window.scroll(0,0);
        setIsActiveHamburger(false);
    }

    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;