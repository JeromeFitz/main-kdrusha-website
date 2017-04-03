import React from 'react';
import './style.css';

export default class Songs extends React.Component {
  render() {
    return (
      <div className="wrapper-song-box">
          <div className="info-tile">
             <h2 className="left-side">Top Videos</h2>
             <h2 className="right-side">All Videos</h2>
          </div>
      </div>
    );
  }
}
