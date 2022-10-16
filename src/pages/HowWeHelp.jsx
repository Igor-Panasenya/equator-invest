import React from 'react';
import './scss/hwh.scss';
import bg from '../img/blog/blog.png';

const HowWeHelp = () => {

    const compamiesItems = [
        {
            id: 1,
            logo: 'company_01.png',
        },
        {
            id: 2,
            logo: 'company_02.png',
        },
        {
            id: 3,
            logo: 'company_03.png',
        },
        {
            id: 4,
            logo: 'company_03.png',
        },
        {
            id: 5,
            logo: 'company_04.png',
        },
        {
            id: 6,
            logo: 'company_01.png',
        },
    ]

    return (
        <div className="how-we-help">
            <img className="bg-image" src={bg} alt=""/>

            <section className="hwh-banner">
                <div className="container">
                    <h1>How We Help</h1>
                </div>
            </section>

            <section className="hwh-companies">
                <div className="container">
                    <h3>Companies We have Worked With</h3>
                    <p>We set up our founder meetups and discuss a wide range of topics from Product to Engineering to Growth and enable our portfolio companies to learn from one another.</p>

                    <div className="compamies-frame">
                        {compamiesItems.map(company =>
                            <div className="company-item" key={company.id}>
                                <img src={`./img/companies/${company.logo}`}  alt="logo" />
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HowWeHelp;