import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from '../src/soundcloud/stores/configureStore';
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

export default class App extends   {
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

ReactDOM.render(<App />, document.getElementById('container'))
