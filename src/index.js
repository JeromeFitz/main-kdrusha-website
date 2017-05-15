import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from '../src/soundcloud/stores/configureStore';
import * as actions from '../src/soundcloud/actions';
import Stream from '../src/soundcloud/components/Stream'; // This are the Tracks that render
import Nav from '../src/components/Nav';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import YTSearch from 'youtube-api-search';
import VideoList from '../src/youtube/video_list';
import VideoLightBox from '../src/youtube/video_lightbox';
import Instafeed from 'react-instafeed';
import Gallery from '../src/instagram/image_feed';
const  API_KEY_YouTube = '47618d1438ca41b081944b6b2ff83125'; // YouTube API Key


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

   YTSearch({key: API_KEY_YouTube, term: 'KD Rusha' }, (videos) => {
      // console.log(videos);
     this.setState({
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
        <Instafeed>
            <Gallery />
        </Instafeed>
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
