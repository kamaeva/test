import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/users';

import './index.css';

// import 'bootstrap'
import './css/main.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

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
    </Provider>
	, document.getElementById('root'));
