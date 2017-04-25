import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../src/soundcloud/stores/configureStore';
import * as actions from '../src/soundcloud/actions';
import Stream from '../src/soundcloud/components/Stream';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

const store = configureStore();

store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
);
