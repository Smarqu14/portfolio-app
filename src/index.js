import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './scss/styles.scss';
import './scss/base.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <App />,

  document.getElementById('root')
);

reportWebVitals();
