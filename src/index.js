import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from '../src/soundcloud/stores/configureStore';
import * as actions from '../src/soundcloud/actions';
import Stream from '../src/soundcloud/components/Stream'; // This are the Tracks that render
import Nav from '../src/components/Nav';
import Hero from '../src/components/Hero';
import About from '../src/components/About';

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
  render() {
    return(
      <div>
        <Nav />
        <Hero />
        <About />
        <Provider store={store}>
          <Stream />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
