import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Player from '../components/Player';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Tracks from '../components/Tracks';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Nav />
        <Hero />
        <Player />
        <About />
        <Gallery />
        <Tracks />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
