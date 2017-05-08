import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from '../src/soundcloud/stores/configureStore';
import * as actions from '../src/soundcloud/actions';
import Stream from '../src/soundcloud/components/Stream'; // This are the Tracks that render
import Nav from '../src/components/Nav';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
// import YTSearch from 'youtube-api-search';
import YouTubeV3 from 'youtube-api';
import VideoList from '../src/youtube/video_list';
import VideoLightBox from '../src/youtube/video_lightbox';

const  API_KEY_YouTube = 'Here API'; // YouTube API Key
const  KD_RUSHA_YouTube = 'Client ID'; // Youtube Client ID


export const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));// This is store the information to the Tracks

export default class App extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    videos: [],
    selectedVideo: null
   };

   YouTubeV3({key: API_KEY_YouTube, ClientID: KD_RUSHA_YouTube  }, (videos) => {
      // console.log(videos);
     this.setState({
       type: "oauth",
       videos: videos,
       selectedVideo: videos[0]
      });
  });
}

  render() {
    return(
      <div>
        <Nav />
        <Hero />
        <About />
        <Provider store={store}>
          <Stream />
        </Provider>
        <VideoLightBox video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.main'));
