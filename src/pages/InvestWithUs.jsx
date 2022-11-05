import React, {useState} from 'react';
import './scss/iwu.scss';
import bg from "../img/iwu/iwu.png";
import FaqItem from "../components/FAQ-item/FAQItem";
import ModalSyndicate from "../components/IU/modal-syndicate/ModalSyndicate";

function InvestWithUs() {

    const investItem= [
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
            id: 4,
            title: "How big is your fund?",
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
    ]
    const [joinSyndicate, setJoinSyndicate] = useState(false)
    const [step, setStep] = useState(1)
    const onClickButtonSyndicate = () => {
        setJoinSyndicate(true);
        setStep(1);
        window.scroll(0,0);
    }

    return (
        <div className="invest-with-us">
            <img className="bg-image" src={bg} alt=""/>

            <section className="iwu-banner">
                <div className="container">
                    <h2>Invest With Us</h2>
                    <p>We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders.</p>
                </div>
            </section>

            <section className="iwu-FAQ">
                <div className="container">
                    <h5>Investor FAQs</h5>

                    <ul className="investor-FAQ-frame">
                        {investItem.map(item =>
                            <FaqItem key={item.id} item={item} />
                        )}
                    </ul>
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
                        <button onClick={() => onClickButtonSyndicate()} className="btn-type-primary">Join Our Syndicate</button>
                        <button className="btn-type-secondary">Became an LP</button>
                    </div>

                    {
                        step <= 4 &&
                        <ModalSyndicate joinSyndicate={joinSyndicate} step={step} setStep={setStep}/>
                    }

                    {joinSyndicate && <div onClick={() => {setJoinSyndicate(false)}} className="bg-dark"></div>}

                </div>
            </section>
        </div>
    );
  }

  export default InvestWithUs;
