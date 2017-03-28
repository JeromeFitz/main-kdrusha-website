import React from 'react';
import './style.css';

export default class Playlist extends React.Component {
  render() {
    return (
      <div id="audio-player" className="audio-player-wrapper margin">
        <div className="audio-player-image">
          <span className="audio-player-song-name"></span>
        </div>

      <span className="audio-player-button-wrappers">
          <a role="button" className="audio-player-button small icon-backward"><i className="fa fa-backward" aria-hidden="true"></i></a>
          <a role="button" className="audio-player-button audio-player-place-pause-button icon-play"><i className="fa fa-play" aria-hidden="true"></i></a>
          <a role="button" className="audio-player-button small icon-forward"><i className="fa fa-forward" aria-hidden="true"></i></a>
      </span>

      <div className="audio-player-controls">
        <span className="audio-player-progress">
          <span className="audio-player-progress-bar"></span>
        </span>
      </div>
     </div>
    );
  }
}
