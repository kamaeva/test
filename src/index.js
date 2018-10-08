import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
=======

/*
 * не был подключен редак
 * надо импортировать эти штуки
 */
>>>>>>> master
import { createStore, compose, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
<<<<<<< HEAD

=======
/*
 * а так же надо импортировать "главный" редьюсер,
 * в котором будут собраны все твои редьюсеры
 * если запутанно, то спрашивай :)
 */
>>>>>>> 92ba099dab5d38a5c0571c67a58d675511f5664d
>>>>>>> master
import rootReducer from './reducers/users';
import App from './App';

import './index.css';

<<<<<<< HEAD
=======
// import 'bootstrap'
import './css/main.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

<<<<<<< HEAD
=======
/*
 * Здесь мы создаем наш store
 * сначала передаем наши редьюсеры,
 * а затем миддлвары. это различные функцииб
 * которые делают различные изменения.
 * обычно это уже готовые библиотеки,
 * но ты тоже можешь их написать :)
 */
>>>>>>> 92ba099dab5d38a5c0571c67a58d675511f5664d
>>>>>>> master
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);

<<<<<<< HEAD
=======
<<<<<<< HEAD
ReactDOM.render(
    <Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
    </Provider>
	, document.getElementById('root'));
=======
/*
 * а здесь мы уже соединяем redux с реактом,
 * и передаем в redux наш store
 */
>>>>>>> master
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
>>>>>>> 92ba099dab5d38a5c0571c67a58d675511f5664d
