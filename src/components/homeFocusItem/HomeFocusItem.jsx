import React from 'react';
import './homeFocusItem.scss';
import {Link} from "react-router-dom";

function HomeFocusItem({item}) {
    return (
      <div className="home-focus-item">
            <img src={item.image} alt=""/>
            <p className="card-title">{item.title}</p>
            <Link onClick={() => window.scroll(0,0)} className="link-read-more" to="/what-we-look-for">Read More</Link>
      </div>
    );
  }
  
  export default HomeFocusItem;