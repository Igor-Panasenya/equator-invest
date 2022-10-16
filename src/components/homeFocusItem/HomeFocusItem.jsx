import React from 'react';
import './homeFocusItem.scss';
import {Link} from "react-router-dom";

function HomeFocusItem({item}) {
    return (
      <div className="home-focus-item">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.671 1.41963e-07C20.8113 -0.00124987 8.28286 8.25261 2.81388 20.9878C-2.6551 33.723 -0.0133417 48.4913 9.53116 58.5408C19.0757 68.5903 33.6885 71.9893 46.6884 67.1836L50.1111 77.937C50.4876 79.1507 51.603 79.9842 52.8738 80.0011H52.9378C54.1844 80.009 55.2999 79.2284 55.7193 78.0543L61.65 61.8394C61.6815 61.7572 61.7465 61.6922 61.8286 61.6608L78.0555 55.7128C79.2458 55.2759 80.0269 54.1307 79.9993 52.8629C79.9716 51.5952 79.1412 50.4852 77.9329 50.1007L67.1847 46.6806C71.1142 36.0441 69.5935 24.1581 63.1127 14.8535C56.6318 5.54882 46.0102 0.00171891 34.671 1.41963e-07ZM55.9832 33.3337C55.8885 27.7405 54.8793 22.2006 52.9952 16.9335C55.1274 16.1722 57.1813 15.2072 59.1285 14.0521C63.7074 19.4646 66.3499 26.2499 66.638 33.3337H55.9832ZM42.4657 38.8152C41.4327 38.4765 40.2969 38.746 39.5262 39.5127C38.7556 40.2794 38.4803 41.4138 38.8136 42.4485L41.1189 49.6886C39.4403 49.5007 37.7283 49.3966 36.0042 49.358V36.0005H53.3097C53.2627 38.0439 53.0966 40.083 52.8124 42.1073L42.4657 38.8152ZM10.2199 55.2754C5.6522 49.8605 3.01764 43.0789 2.73185 36.0005H13.3667C13.4581 41.5915 14.4578 47.1305 16.3267 52.4007C14.2036 53.1607 12.1585 54.1234 10.2199 55.2754ZM10.2199 14.0575C12.1673 15.2125 14.2212 16.1774 16.3533 16.939C14.4675 22.204 13.4559 27.7421 13.3586 33.3339H2.70373C2.99404 26.2516 5.63798 19.4682 10.2171 14.0577L10.2199 14.0575ZM18.8588 51.5566C17.0777 46.5592 16.1234 41.3049 16.0334 36.0005H33.3377V49.3593C28.4341 49.4422 23.5637 50.1813 18.8561 51.5566H18.8588ZM16.0241 33.3337C16.1136 28.0288 17.0591 22.7731 18.8241 17.7695C23.5415 19.1504 28.423 19.8921 33.3376 19.9748V33.3336L16.0241 33.3337ZM49.5125 15.2882C45.1171 16.5482 40.576 17.2277 36.0043 17.3096V2.75738C41.5044 3.42676 46.3524 8.19214 49.5125 15.2882ZM33.3376 2.75738V17.3096C28.7658 17.2284 24.2245 16.5483 19.8294 15.2869C22.9909 8.19214 27.8375 3.42676 33.3376 2.75738ZM33.3376 52.0248V66.5703C28.0534 65.9209 23.1134 61.3288 19.8533 54.0368C24.2414 52.782 28.7744 52.1055 33.3376 52.0248ZM36.0043 33.3337V19.975C40.9172 19.8921 45.797 19.1504 50.5125 17.7696C52.2794 22.7728 53.2267 28.0285 53.3178 33.3339L36.0043 33.3337ZM57.2899 12.0522C55.5983 13.0106 53.8257 13.8188 51.9925 14.4669C50.4003 10.6748 48.0443 7.25119 45.071 4.40943C49.6712 5.9968 53.8497 8.61043 57.2899 12.0522ZM24.2709 4.40943C21.2959 7.25072 18.9378 10.6744 17.3441 14.4669C15.513 13.818 13.7422 13.01 12.052 12.0522C15.4923 8.61043 19.6707 5.9968 24.2709 4.40943ZM12.0334 57.2928C13.7201 56.3361 15.4873 55.5286 17.3149 54.8795C18.8847 58.6511 21.2196 62.0563 24.1723 64.8796C19.6063 63.2968 15.4569 60.7033 12.0334 57.2928ZM36.0043 66.6356V52.0487C38.0153 52.0913 40.0225 52.2454 42.0164 52.5101L45.1005 62.1969C45.1005 62.2155 45.1112 62.2343 45.1179 62.2529L45.8779 64.637C42.7136 65.8232 39.3808 66.4979 36.0043 66.6356ZM77.3382 52.9248C77.3525 53.0556 77.2692 53.1773 77.1422 53.2115L60.9153 59.1595C60.0961 59.46 59.4504 60.1056 59.1499 60.9249L53.2178 77.1398C53.1836 77.2637 53.0658 77.3456 52.9378 77.3345C52.8067 77.3437 52.6885 77.256 52.6592 77.1278L41.3511 41.6259C41.3211 41.5473 41.3435 41.4582 41.4071 41.4032C41.4452 41.3606 41.4992 41.3354 41.5564 41.3338C41.5861 41.3341 41.6155 41.3399 41.6432 41.3512L77.1289 52.6434C77.2575 52.6741 77.3457 52.7926 77.3382 52.9248ZM55.3858 42.9246C55.7277 40.6313 55.9249 38.3186 55.9765 36.0005H66.6433C66.5063 39.3749 65.831 42.7059 64.6433 45.8673L55.3858 42.9246Z" fill="#00463D"/>
            </svg>
            <p className="card-title">{item}</p>
            <Link onClick={() => window.scroll(0,0)} className="link-read-more" to="/what-we-look-for">Read More</Link>
      </div>
    );
  }
  
  export default HomeFocusItem;