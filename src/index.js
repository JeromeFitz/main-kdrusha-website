import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../src/soundcloud/stores/configureStore';
import * as actions from '../src/soundcloud/actions';
import Stream from '../src/soundcloud/components/Stream'; // This are the Tracks that render
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Player from '../components/Player';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Events from '../components/Events';
import Videos from '../components/Videos';
import Footer from '../components/Footer';

const store = configureStore();
conl
store.dispatch(actions.setTracks(tracks));

export const tracks = [ // Tracks that getting render on the page
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];



export default class App extends React.Component {
  render() {
    return(
      <div>
        <Nav />
        <Hero />
        <Player />
        <About />
        <Gallery />
        <Provider store={store}> <Stream /> </Provider>
        <Events />
        <Videos />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
