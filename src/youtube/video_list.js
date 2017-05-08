import React from 'react';
import VideoListItem from '../youtube/video_list_item';

  const VideoList = (props) => {
    // console.log(props);
   const videoItems = props.videos.map((video) => {
     return (
       <VideoListItem
        onVideoSelect={props.onVideoSelect}
         key={video.etag}
         video={video} />
      );
    });

      return (
          <ul className="youtube-thumbnail">
             {videoItems}
          </ul>
      );
  };

export default VideoList;
