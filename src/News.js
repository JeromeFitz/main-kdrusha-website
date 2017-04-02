import React from 'react';
import './style.css';

export default class News extends React.Component {
    render(){
         return (

           <div className="row">
              <div className="tab-section">
                 <div className="titlebox">
                     <div className="titlegalleryleft">Latest News</div>
                     <div className="titlegalleryright">All News</div>
                  </div>
              </div>

              <div className="tab-section divder">
                 <div className="titlebox">
                     <div className="titlegalleryleft">Upcoming Events</div>
                     <div className="titlegalleryright">All Events</div>
                  </div>
              </div>

              <div className="tab-section">
                 <div className="titlebox">
                     <div className="titlegalleryleft">Latest Collection</div>
                     <div className="titlegalleryright">All Shops</div>
                  </div>
              </div>
           </div>

         );
      }
    }
