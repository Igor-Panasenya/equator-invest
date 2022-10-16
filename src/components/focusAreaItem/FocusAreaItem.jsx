import React from 'react';
import './focusAreaItem.scss';

const FocusAreaItem = ({item}) => {
    return (
        <div className="focus-areal-item">
            <div className="focus-areal-item-title">
                <img src={item.image} alt=""/>

                <p>{item.title}</p>
            </div>
            <p className="focus-areal-item-body">
                {item.body}
            </p>
        </div>
    );
};

export default FocusAreaItem;