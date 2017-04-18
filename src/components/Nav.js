import React from 'react';
// import './style.css';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">
          <div className="logo">KD Rusha</div>

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
