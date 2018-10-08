import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
=======

/*
 * не был подключен редак
 * надо импортировать эти штуки
 */
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
/*
 * thunk - для того, чтобы использовать асинхронные экшены и библиотеку axios
 */
import thunk from 'redux-thunk';
/*
 * а так же надо импортировать "главный" редьюсер,
 * в котором будут собраны все твои редьюсеры
 * если запутанно, то спрашивай :)
 */
>>>>>>> 92ba099dab5d38a5c0571c67a58d675511f5664d
import rootReducer from './reducers/users';

import './index.css';

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
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);

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
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
>>>>>>> 92ba099dab5d38a5c0571c67a58d675511f5664d
