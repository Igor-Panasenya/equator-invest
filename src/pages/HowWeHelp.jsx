import React from 'react';
import './scss/hwh.scss';
import bg from '../img/blog/blog.png';
import BlogItem from "../components/blogItem/BlogItem";

const HowWeHelp = () => {

    const helpItems = [
        {
            id: 1,
            title: "Investors",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, product and buWe focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, product and business founders. We will work with you if we see great potential. siness founders. We will work with you if we see great potential. ",
            list: '',
            photo: "../../img/blog/blog_01.png",
        },
        {
            id: 2,
            title: "Entrepreneurs",
            body: "We focus on investing in high-potential Fintech startups at angel to pre-seed stages, with teams that ideally include great engineers, designers, product and business founders. We will work with you if we see great potential.  ",
            list: '',
            photo: "../../img/blog/blog_02.png",
        },
        {
            id: 3,
            title: "Advice",
            body: "",
            list: [
                {
                    liTitle: "Product",
                    liBody: " As a team of former founders with a strong background, we are open to helping our founders get product-market fit."
                },
                {
                    liTitle: "Growth",
                    liBody: "We help you set your growth playbook right by advising on the best growth strategies at the early stage."
                },
                {
                    liTitle: "Engineering",
                    liBody: "We have strategic partnerships with studios such as Ultiro that will help our early-stage companies through major technical decisions."
                },
                {
                    liTitle: "Sales",
                    liBody: "We advise our founders on how to build the best sales engines that turn little resources into more."
                }
            ],
            photo: "../../img/blog/blog_03.png",
        },
        {
            id: 4,
            title: "Community ",
            body: "We set up our founder meetups and discuss a wide range of topics from Product to Engineering to Growth and enable our portfolio companies to learn from one another.",
            list: '',
            photo: "../../img/blog/blog_04.png",
        },
    ]
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

            <section className="hwh-items">
                <div className="container">

                    <div className="items-frame">
                        {helpItems.map(helpItem =>
                            <BlogItem item={helpItem} key={helpItem.id}/>
                        )}
                    </div>

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