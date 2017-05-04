import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>
  };

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="">
      <div className="video-detail">
        <iframe className="embed-respons-item" src={url}></iframe>
      </div>
    </div>
  );
};

export default VideoDetail;
