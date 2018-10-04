import React from 'react';
import ReactDOM from 'react-dom';

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
import rootReducer from './reducers/users';

import './index.css';

// import 'bootstrap'
import './css/main.min.css';
import './css/font-awesome/css/font-awesome.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

/*
 * Здесь мы создаем наш store
 * сначала передаем наши редьюсеры,
 * а затем миддлвары. это различные функцииб
 * которые делают различные изменения.
 * обычно это уже готовые библиотеки,
 * но ты тоже можешь их написать :)
 */
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);

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
