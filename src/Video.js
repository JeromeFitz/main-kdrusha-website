import React from 'react';
import './style.css';


export default class Video extends React.Component {
  render() {
    return (

      <div className="wrapper-song-box">
          <div className="info-tile">
             <h2 className="left-side">Top Music</h2>
             <h2 className="right-side">All Music</h2>
          </div>
      </div>
    );
  }
}
