import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Hero from './Hero'
import './index.css';

ReactDOM.render(
  <Nav />,
  document.querySelector('.navbar')
);

ReactDOM.render(
  <Hero />,
  document.querySelector('.hero')
);

ReactDom.render(
  <Playlist />,
  document.querySelector('.home-player')
);
