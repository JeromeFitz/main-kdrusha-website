import React from 'react';

export default class Nav extends React.Component {
  render() {
    return(
         <nav>
            <div className="logo"></div>

            <div className="social-media-icons">
               <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
               <li><i class="fa fa-youtube" aria-hidden="true"></i></li>
               <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
               <li><i class="fa fa-spotify" aria-hidden="true"></i></li>
               <li><i class="fa fa-soundcloud" aria-hidden="true"></i></li>
               <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
               <li><i class="fa fa-apple" aria-hidden="true"></i></li>
            </div>
         </nav>
    );
  }
}
