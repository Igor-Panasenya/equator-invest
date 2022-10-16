import React from 'react';
import './blogItem.scss';

function BlogItem({item}) {

    return (
      <div className="blog-item">
          <div className="item-content">
            <h4 className="item-title">{item.title}</h4>
            <p className="item-body">{item.body}</p>
          </div>
          <img src={item.photo} alt="photo" />
      </div>
    );
  }
  
  export default BlogItem;