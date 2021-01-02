import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './scss/styles.scss';
import './scss/base.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
