import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import 'bootstrap'
import './css/main.min.css';
import './css/font-awesome/css/font-awesome.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
	, document.getElementById('root'));
