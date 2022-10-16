import React from 'react';
import './scss/iwu.scss';
import bg from "../img/iwu/iwu.png";

function InvestWithUsBanner() {
    return (
        <div className="invest-with-us">
            <img className="bg-image" src={bg} alt=""/>

            <section className="iwu-banner">
                <div className="container">
                    <h1>Invest With Us</h1>
                    <p>We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders.</p>
                </div>
            </section>

            <section className="iwu-FAQ">
                <div className="container">
                    <h4>Investor FAQs</h4>

                    <div className="investor-FAQ-frame">

                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>

                    </div>
                </div>
            </section>

            <section className="iwu-about-equator">
                <div className="container">

                    <h3>About Equator Syndicate</h3>

                    <p>
                        Are you an ex-operator, tech professional or other high net worth individual
                        interested in diversifying your portfolio and investing in high-growth
                        tech startups looking to change the world? If so, you’ve come to the right place.
                    </p>
                    <br/><br/>
                    <p>
                        nvestment Criteria: Our angel group invests alongside leading climate funds and accelerators
                        in breakthrough pre-seed and seed stage climate startups led by world-class, crazy founders
                        tackling MASSIVE problems in the areas of Food & Agriculture, Construction & Manufacturing,
                        Commerce & Circular Economy, Recycling & Waste Reduction, Energy & Renewables, Transportation
                        & Mobility and anything with positive “climate-economics” that has the opportunity to massively better our world.
                    </p>
                    <br/><br/>
                    <p>
                        NOTE: By applying to join our investor network, you are actively approaching us and by no
                        means legally represents a solicitation of investment opportunities.
                    </p>
                    <br/><br/>
                    <p>
                        NOTE: Certain startup investment opportunities are only available for accredited
                        investors (folks with net worth > $1M or yearly income of at least $200k).
                    </p>

                    <div className="about-equator-btns">
                        <button className="btn-type-primary">Join Our Syndicate</button>
                        <button className="btn-type-secondary">Became an LP</button>
                    </div>
                </div>
            </section>
        </div>
    );
  }
  
  export default InvestWithUsBanner;
  