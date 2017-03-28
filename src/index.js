import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Hero from './Hero';
import Playlist from './Playlist';
import About from './About';
import Gallery from './Gallery';
import Song from './Song';
import './index.css';

ReactDOM.render(
  <Nav />,
  document.querySelector('.navbar')
);

ReactDOM.render(
  <Hero />,
  document.querySelector('.hero')
);

ReactDOM.render(
  <Playlist />,
  document.querySelector('.homeplayer')
);

ReactDOM.render(
  <About />,
  document.querySelector('.boxabout')
);

ReactDOM.render(
  <Gallery />,
  document.querySelector('.boxgallery')
);

ReactDOM.render(
  <Song />,
  document.querySelector('.boxsongs')
);
