import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom'


import rootReducer from './reducers/users';
import App from './App';

import './index.css';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

