import React from 'react';
import './scss/wwa.scss';
import TeamItem from "../components/teamItem/TeamItem";
import bg from '../img/wwa/who we are.png';

const WhoWeAre = () => {

    const teamItems = [
        {
            id: 1,
            name: "Michael Akampa",
            jobTitle: "Managing Partner",
            photo: "../../img/wwa/team_01.png",
            linkedIn: "https://ru.linkedin.com/",
            twitter: "https://twitter.com/?lang=ru",
        },
        {
            id: 2,
            name: "Managing Partner",
            jobTitle: "Principal",
            photo: "../../img/wwa/team_02.png",
            linkedIn: "https://ru.linkedin.com/",
            twitter: "https://twitter.com/?lang=ru",
        },
        {
            id: 3,
            name: "James Mukasa",
            jobTitle: "Principal",
            photo: "../../img/wwa/team_03.png",
            linkedIn: "https://ru.linkedin.com/",
            twitter: "https://twitter.com/?lang=ru",
        },
    ]
    const advisorsItems = [
        {
            id: 1,
            name: "Jack Bonner",
            jobTitle: "Founder",
            photo: "../../img/wwa/team_04.png",
            linkedIn: "https://ru.linkedin.com/",
            twitter: "https://twitter.com/?lang=ru",
        },
        {
            id: 2,
            name: "Clava Si",
            jobTitle: "Founder",
            photo: "../../img/wwa/team_05.png",
            linkedIn: "https://ru.linkedin.com/",
            twitter: "https://twitter.com/?lang=ru",
        },
        {
            id: 3,
            name: "Vetal Pent",
            jobTitle: "Founder",
            photo: "../../img/wwa/team_06.png",
            linkedIn: "https://ru.linkedin.com/",
            twitter: "https://twitter.com/?lang=ru",
        },
    ]

    return (
        <section className="who-we-are">
            <img className="bg-image" src={bg} alt=""/>

            <div className="wwa-banner">
                <div className="container">
                    <h1>Who We are</h1>
                    <h3>We are builders just like you</h3>
                    <p>Way before we started this fund, we founded startups and were part of early-stage companies. We understand just amazing or hard doing a startup can be, therefore we will listen, empathize and give real advise.
                        <br /><br />
                        Equator Invest is a Swedish based early-stage venture studio, we are deploying a $5M fund over the next 2 years into great teams building Fintech companies in East-Africa
                    </p>
                </div>
            </div>

            <div className="wwa-content">
                <div className="container">
                    <h3>Our Team</h3>

                    <div className="items-frame">
                        {teamItems.map(item =>
                            <TeamItem key={item.id} item={item} />
                        )}
                    </div>


                    <h3 className="our-team-advisors">Advisors </h3>

                    <div className="items-frame">
                        {advisorsItems.map(item =>
                            <TeamItem key={item.id} item={item} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;