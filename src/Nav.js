import React from 'react';
import logo from './logo.svg';
import './style.css';

class Nav extends React.Component {
  render() {
    return (
      <div className="wrapper">
          <img src={logo} className="logo" alt="logo" />

          <ul className="header">
             <li><a href="#">Home</a></li>
             <li><a href="#">News</a></li>
             <li><a href="#">Events</a></li>
             <li><a href="#">Shop</a></li>
          </ul>

          <div className="social-media-icons">
            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-spotify" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-soundcloud" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
          </div>
      </div>
    );
  }
}

export default Nav;
