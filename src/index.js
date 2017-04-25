import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Player from '../components/Player';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Tracks from '../components/Tracks';
import Events from '../components/Events';
import Videos from '../components/Videos';
import Footer from '../components/Footer';

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
        <Events />
        <Videos />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
