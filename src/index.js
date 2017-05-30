import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import './assets/css/font-awesome.css';
import './assets/css/front.css';

import Board from './components/Board';

import reducer from './reducers/reducer';

const store = createStore(reducer, applyMiddleware(thunk,createLogger()));

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>, 
  document.getElementById('root')
);