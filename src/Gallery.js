import React from 'react';
import './style.css';

export default class Gallery extends React.Component {
  render() {
    return (
      <div className="galler-section">
        <div className="titlebox">
            <p className="titlegallery">Gallery</p>
            <p className="titleallimage">All Images</p>
        </div>
      </div>
    );
  }
}
