import React from 'react';
import './scss/home.scss';
import imageWWA from "../img/home/home_wwa.png";
import HomeFocusItem from "../components/homeFocusItem/HomeFocusItem";
import TeamItem from "../components/teamItem/TeamItem";
import StoriesItem from "../components/storiesItem/StoriesItem";
import {Link} from "react-router-dom";

const Home = () => {

    const focusItems = ["Web 3.0", "Digital Infrastructure", "Fintech"]
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
    const storiesItems = [
        {
            id: 1,
            body: "How the Africa Startup space is evolving",
        },
        {
            id: 2,
            body: "Identifying the best founders",
        },
        {
            id: 3,
            body: "Applying the Venture Studio Model in Africa",
        },
    ]

    return (
        <div className="home">
            <section className="home-banner">
                <div className="container">
                    <h1>We Back Very <br />early-stage Founders</h1>
                    <p>We are a venture studio partnering with entrepreneurs to start scalable Fintech companies within the African market.</p>
                    <button className="btn-type-primary">Pitch Us</button>
                </div>
            </section>

            <section className="wwa-home-content">
                <div className="container">

                    <div className="wwa-home-text">
                        <h2>Who We are</h2>
                        <h3>We are builders just like you</h3>

                        <p>Way before we started this fund, we founded startups and were part of early-stage companies. We understand just amazing or hard doing a startup can be, therefore we will listen, empathize and give real advise.
                            <br /><br />
                            Equator Invest is a Swedish based early-stage venture studio, we are deploying a $5M fund over the next 2 years into great teams building Fintech companies in East-Africa
                        </p>

                        <Link to="/who-we-are" onClick={() => window.scroll(0,0)} className="btn-type-secondary">Learn more</Link>
                    </div>

                    <div className="wwa-home-image-box">
                        <img className="wwa-home-image" src={imageWWA} alt="photo" />
                        <p className="img-text">We back you when no one else want to</p>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 27.5C4.9087 27.5 3.38258 26.8679 2.25736 25.7426C1.13214 24.6174 0.5 23.0913 0.5 21.5C0.5 19.2905 2.4995 12.29 6.5 0.5H9.5L6.5 15.5C8.0913 15.5 9.61742 16.1321 10.7426 17.2574C11.8679 18.3826 12.5 19.9087 12.5 21.5C12.5 23.0913 11.8679 24.6174 10.7426 25.7426C9.61742 26.8679 8.0913 27.5 6.5 27.5V27.5ZM21.5 27.5C19.9087 27.5 18.3826 26.8679 17.2574 25.7426C16.1321 24.6174 15.5 23.0913 15.5 21.5C15.5 19.2905 17.4995 12.29 21.5 0.5H24.5L21.5 15.5C23.0913 15.5 24.6174 16.1321 25.7426 17.2574C26.8679 18.3826 27.5 19.9087 27.5 21.5C27.5 23.0913 26.8679 24.6174 25.7426 25.7426C24.6174 26.8679 23.0913 27.5 21.5 27.5Z" fill="white"/>
                        </svg>
                    </div>


                </div>

            </section>

            <section className="focus-area-home-content">
                <div className="container">
                    <h4>Our Focus Areas</h4>

                    <div className="focus-area-cards">

                        {focusItems.map(item =>
                            <HomeFocusItem item={item} key={item} />
                        )}
                    </div>
                </div>
            </section>

            <section className="team-home-content">
                <div className="container">
                    <h4>Our Team</h4>

                    <Link onClick={() => window.scroll(0,0)} className="link-see-more" to="/who-we-are">
                        <span>See more</span>
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.658348 0.916221C0.54932 1.02784 0.488281 1.17769 0.488281 1.33372C0.488281 1.48976 0.54932 1.6396 0.658348 1.75122L6.7496 7.99997L0.658348 14.2475C0.54932 14.3591 0.488281 14.5089 0.488281 14.665C0.488281 14.821 0.54932 14.9708 0.658348 15.0825C0.711343 15.1369 0.774705 15.1802 0.844694 15.2097C0.914683 15.2392 0.98988 15.2545 1.06585 15.2545C1.14181 15.2545 1.21701 15.2392 1.287 15.2097C1.35699 15.1802 1.42035 15.1369 1.47335 15.0825L7.95085 8.43622C8.06461 8.3195 8.12829 8.16296 8.12829 7.99997C8.12829 7.83698 8.06461 7.68044 7.95085 7.56372L1.47335 0.917471C1.42035 0.863042 1.35699 0.819781 1.287 0.790241C1.21701 0.760702 1.14181 0.745483 1.06585 0.745483C0.98988 0.745483 0.914683 0.760702 0.844694 0.790241C0.774705 0.819781 0.711343 0.863042 0.658348 0.917471V0.916221Z" fill="#00463D"/>
                        </svg>
                    </Link>

                    <div className="items-frame">
                        {teamItems.map(item =>
                            <TeamItem key={item.id} item={item} />
                        )}
                    </div>

                </div>
            </section>

            <section className="stories-home-content">
                <div className="container">
                    <h2>Our Stories</h2>

                    <div className="items-frame">
                        {storiesItems.map(item =>
                            <StoriesItem key={item.id} item={item} />
                        )}
                    </div>

                </div>
            </section>

            <section className="wwlf-content">
                <div className="container">
                    <h2>What We Look For</h2>
                    <p>
                        We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. DO not worry if you don’t have the “perfect” team, we will work with you if we see great potential.
                    </p>

                    <button className="btn-type-secondary">Pitch Us</button>
                </div>
            </section>
        </div>

    );
};

export default Home;