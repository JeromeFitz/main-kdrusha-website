import React from 'react';

class Stream extends React.Component {
  function Stream({ tracks = [] }) {
    return (
      <div>
        {
          tracks.map((track, key) => {
            return <div className="track" key={key}>{track.title}</div>;
          })
        }
      </div>
    );
  }
export default Stream;
