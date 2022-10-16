import React from 'react';
import './scss/blog.scss';
import BlogItem from "../components/blogItem/BlogItem";
import bg from '../img/blog/blog.png';
import NewslettersInput from "../components/IU/newsletter-input/NewslettersInput";

const Blog = () => {

    const blogItems = [
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
        {
            id: 5,
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
            id: 6,
            title: "Community ",
            body: "We set up our founder meetups and discuss a wide range of topics from Product to Engineering to Growth and enable our portfolio companies to learn from one another.",
            list: '',
            photo: "../../img/blog/blog_04.png",
        },
    ]

    var data = require('../data.json');

    return (
        <div className="blog">

            <img className="bg-image" src={bg} alt=""/>

            <section className="blog-banner">
                <div className="container">
                    <h2>Blog</h2>
                </div>
            </section>

            <section className="container">
                <div className="items-frame">
                    {blogItems.map(item =>
                        <BlogItem key={item.id} item={item} />
                    )}
                </div>
            </section>

            <section className="newsletter-box">
                <div className="container">
                    <div className="newsletter-left">
                        <NewslettersInput />
                    </div>
                    <div className="newsletter-right">
                        <button className="btn-type-primary">Pich US</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;