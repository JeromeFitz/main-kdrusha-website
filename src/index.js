import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Hero from './Hero';
import Playlist from './Playlist';
import About from './About';
import Song from './Song';
import News from './News';
import Video from './Video';
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
  <Song />,
  document.querySelector('.boxsongs')
);
ReactDOM.render(
  <News />,
  document.querySelector('.boxnews')
);
ReactDOM.render(
  <Video />,
  document.querySelector('.boxvideos')
);
