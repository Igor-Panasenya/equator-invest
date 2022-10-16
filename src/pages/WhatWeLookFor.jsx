import React from 'react';
import './scss/wwlf.scss';
import bg from '../img/wwlf/wwlf.png';
import FocusAreaItem from "../components/focusAreaItem/FocusAreaItem";
import FaqItem from "../components/FAQ-item/FAQItem";

const WhatWeLookFor = () => {

    const wwlfItem = [
        {
            id: 1,
            title: "Web 3.0",
            body: "Web 3.0 (Web3) is the third generation of the evolution of web technologies. The web, also known as the World Wide Web, is the foundational layer for how the internet is used, providing website and application services.",
            image: "../../img/wwlf/focus-item-01.png",
        },
        {
            id: 2,
            title: "Digital Infrastructure",
            body: "Digital infrastructure refers to the digital technologies that provide the foundation for an organization's information technology and operations",
            image: "../../img/wwlf/focus-item-02.png",
        },
        {
            id: 3,
            title: "Fintech",
            body: "Fintech a portmanteau of \"financial technology\" refers to firms using new technology to compete with traditional financial methods in the delivery of financial services.",
            image: "../../img/wwlf/focus-item-03.png",
        },
    ];
    const faqItem = [
        {
            id: 1,
            title: "Where do you invest?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 2,
            title: "What do you invest in?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 3,
            title: "What do you look for in a team?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 4,
            title: "How big is your fund?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 5,
            title: "What stage do you invest in? Do you invest in Series A rounds?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 6,
            title: "Where do you invest?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 7,
            title: "Do you lead rounds? ",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 8,
            title: "What is your check size?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 9,
            title: "How long do you take to decide?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 10,
            title: "Are you a diversity fund?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 11,
            title: "What don’t you invest in?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 12,
            title: "Does our product have to be ready to apply?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 13,
            title: "Where do you invest?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
        {
            id: 14,
            title: "What don’t you invest in?",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential. ",
        },
    ];

    return (
        <div className="what-we-look-for">
            <img className="bg-image" src={bg} alt=""/>

            <section className="wwlf-banner">
                <div className="container">
                    <h2>What We Look For</h2>
                    <p>We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders.
                        <br /><br />
                        DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential.
                    </p>
                </div>
            </section>

            <section className="wwlf-content">
                <div className="container">
                    <h3>Focus Areas</h3>

                    <div className="focus-frame">
                        {wwlfItem.map(item =>
                            <FocusAreaItem key={item.id} item={item}/>
                        )}
                    </div>

                    <div className="FAQ-frame">
                        <h5>Entrepreneur FAQs</h5>

                        <ul className="FAQ-items">
                            {faqItem.map(item =>
                                <FaqItem key={item.id} item={item} />
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhatWeLookFor;