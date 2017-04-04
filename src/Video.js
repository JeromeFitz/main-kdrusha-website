import React from 'react';
import './style.css';

export default class Songs extends React.Component {
  render() {
    return (
      <div className="wrapper-song-box">
          <div className="info-tile">
             <h2 className="left-side">Top Songs</h2>
             <h2 className="right-side">All Songs</h2>
          </div>

          <div className="ablum-song-list">
              <li><a href="#"><img src="https://static.gigwise.com/gallery/5209864_8262181_JasonDeruloTatGall.jpg" alt="placeholder" /></a></li>
              <li><a href="#"><img src="https://static.gigwise.com/gallery/5209864_8262181_JasonDeruloTatGall.jpg" alt="placeholder" /></a></li>
              <li><a href="#"><img src="https://static.gigwise.com/gallery/5209864_8262181_JasonDeruloTatGall.jpg" alt="placeholder" /></a></li>
              <li><a href="#"><img src="https://static.gigwise.com/gallery/5209864_8262181_JasonDeruloTatGall.jpg" alt="placeholder" /></a></li>
              <li><a href="#"><img src="https://static.gigwise.com/gallery/5209864_8262181_JasonDeruloTatGall.jpg" alt="placeholder" /></a></li>
              <li><a href="#"><img src="https://static.gigwise.com/gallery/5209864_8262181_JasonDeruloTatGall.jpg" alt="placeholder" /></a></li>
              <li><a href="#"><img src="https://static.gigwise.com/gallery/5209864_8262181_JasonDeruloTatGall.jpg" alt="placeholder" /></a></li>
              <li><a href="#"><img src="https://static.gigwise.com/gallery/5209864_8262181_JasonDeruloTatGall.jpg" alt="placeholder" /></a></li>
          </div>

          <div className="arrow-right btn-arrow"></div>
          <div className="arrow-left btn-arrow"></div>
      </div>
    );
  }
}
