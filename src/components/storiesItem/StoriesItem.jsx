import React from 'react';
import './storiesItem.scss';
import image_plane from '../../img/home/plane.jpg';

function StoriesItem({item}) {

    return (
      <a href="#" className="stories-item">
        <img src={image_plane} alt="photo" />

        <div className="bg-card"></div>

        <div className="stories-text">
            <p>{item.body}</p>
            <div className="reed-more">
                <span>Read more</span>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.989236 0.499563C0.858402 0.633509 0.785156 0.813322 0.785156 1.00056C0.785156 1.1878 0.858402 1.36762 0.989236 1.50156L8.29874 9.00006L0.989236 16.4971C0.858402 16.631 0.785156 16.8108 0.785156 16.9981C0.785156 17.1853 0.858402 17.3651 0.989236 17.4991C1.05283 17.5644 1.12886 17.6163 1.21285 17.6517C1.29684 17.6872 1.38707 17.7054 1.47824 17.7054C1.5694 17.7054 1.65963 17.6872 1.74362 17.6517C1.82761 17.6163 1.90364 17.5644 1.96724 17.4991L9.74024 9.52356C9.87676 9.3835 9.95316 9.19565 9.95316 9.00006C9.95316 8.80447 9.87676 8.61662 9.74024 8.47656L1.96724 0.501063C1.90364 0.435748 1.82761 0.383834 1.74362 0.348387C1.65963 0.31294 1.5694 0.294678 1.47824 0.294678C1.38707 0.294678 1.29684 0.31294 1.21285 0.348387C1.12886 0.383834 1.05283 0.435748 0.989236 0.501063V0.499563Z" fill="white"/>
                </svg>
            </div>
        </div>

      </a>
    );
  }
  
  export default StoriesItem;