import React from 'react';

export default class Nav extends React.Component {
  render() {
    return(
         <nav>
            <div className="logo"></div>

            <div className="social-media-icons">
               <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
               <li><i className="fa fa-youtube" aria-hidden="true"></i></li>
               <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
               <li><i className="fa fa-spotify" aria-hidden="true"></i></li>
               <li><i className="fa fa-soundcloud" aria-hidden="true"></i></li>
               <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
               <li><i className="fa fa-apple" aria-hidden="true"></i></li>
            </div>
         </nav>
    );
  }
}
