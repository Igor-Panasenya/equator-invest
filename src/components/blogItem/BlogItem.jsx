import React from 'react';
import './blogItem.scss';

function BlogItem({item}) {

    return (
      <div className="blog-item">
          <div className="item-content">
            <h5>{item.title}</h5>
            <p className="item-body">{item.body}</p>

              {item.list &&
                  <ul className="blog-item-list">

                      {item.list.map(itemList =>

                          <li key={itemList.liTitle} >
                              <p>
                                  <span>{itemList.liTitle}</span> - {itemList.liBody}
                              </p>
                          </li>
                      )}

                  </ul>
              }

          </div>
          <img src={item.photo} alt="photo" />
      </div>
    );
  }
  
  export default BlogItem;