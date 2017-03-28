import React from 'react';
import logo from './logo.svg';
import './style.css';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="wrapper">
          <img src={logo} className="logo" alt="logo" />

          <ul className="header">
             <li><a href="/" title="Home">Home</a></li>
             <li><a href="/news" title="News">News</a></li>
             <li><a href="/events" title="Events">Events</a></li>
             <li><a href="/shops" title="Shop">Shop</a></li>
          </ul>


          <div className="social-media-icons">
            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-spotify" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-soundcloud" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
          </div>
      </div>
    );
  }
}
