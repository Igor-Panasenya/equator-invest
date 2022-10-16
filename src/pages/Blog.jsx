import React from 'react';
import './scss/blog.scss';
import BlogItem from "../components/blogItem/BlogItem";
import bg from '../img/blog/blog.png';

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
            list: {
                liTitle: "Product",
                liBody: "As a team of former founders with a strong background, we are open to helping our founders get product-market fit.",
            },
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
            list: {
                liTitle: "Product",
                liBody: "As a team of former founders with a strong background, we are open to helping our founders get product-market fit.",
            },
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

    return (
        <section className="blog">

            <img className="bg-image" src={bg} alt=""/>

            <div className="blog-banner">
                <div className="container">
                    <h1>Blog</h1>
                </div>
            </div>

            <div className="container">
                <div className="items-frame">
                    {blogItems.map(item =>
                        <BlogItem key={item.id} item={item} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;