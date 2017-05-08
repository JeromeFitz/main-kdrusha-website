import React from 'react';

  const VideoLightBox = ({video}) => {

    if(!video) {
      return <div>Loading...</div>
    };

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

		return (
			<div className="video-lightbox">
				<div className="video-lightbox-background"></div>
				<div className="video-lightbox-content">
  				<iframe className="embed-respons-item" width='100%' height='100%' allowFullScreen="1"  title="YouTube Video Player" src={url}></iframe>
				</div>
			</div>
    );
  };

export default VideoLightBox;
