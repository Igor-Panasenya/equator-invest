import React, {useEffect, useRef} from 'react';
import './faqItem.scss';
import {useState} from "react";

const FaqItem = ({item}) => {

    const [isActiveFAQ, setIsActiveFAQ] = useState(false);

    //  ЗАКРЫТИЕ FAQ-item ПРИ КЛИКЕ ВНЕ ЕЕ ОБЛАСТИ
    const sortRef = useRef()
    const outSideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setIsActiveFAQ(false);
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', outSideClick)
    }, [])

    return (
        <li ref={sortRef} onClick={() => setIsActiveFAQ(!isActiveFAQ)} className={isActiveFAQ ? "faq-item active" : "faq-item"}>
            <div className="faq-main">
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4977 0.989027L9.00072 8.29703L1.50372 0.989027C1.36978 0.858193 1.18997 0.784947 1.00272 0.784947C0.815484 0.784947 0.635671 0.858193 0.501725 0.989027C0.436868 1.05257 0.385343 1.12842 0.350168 1.21213C0.314993 1.29584 0.296875 1.38573 0.296875 1.47653C0.296875 1.56733 0.314993 1.65721 0.350168 1.74092C0.385343 1.82463 0.436868 1.90048 0.501725 1.96403L8.47722 9.74003C8.61729 9.87655 8.80514 9.95295 9.00072 9.95295C9.19631 9.95295 9.38416 9.87655 9.52423 9.74003L17.4997 1.96553C17.565 1.90193 17.617 1.8259 17.6524 1.74191C17.6878 1.65792 17.7061 1.56769 17.7061 1.47653C17.7061 1.38537 17.6878 1.29513 17.6524 1.21114C17.617 1.12715 17.565 1.05112 17.4997 0.987526C17.3658 0.856693 17.186 0.783447 16.9987 0.783447C16.8115 0.783447 16.6317 0.856693 16.4977 0.987526V0.989027Z" fill="#00975A"/>
                </svg>
                <p className="faq-item-title">{item.title}</p>
            </div>
            <p className="faq-item-body">{item.body}</p>
        </li>
    );
};

export default FaqItem;