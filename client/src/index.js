import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';

import './fonts/Roboto-Thin.ttf'
import './fonts/Roboto-Light.ttf'
import './fonts/Roboto-Regular.ttf'
import './fonts/Roboto-Medium.ttf'
import './fonts/Roboto-Bold.ttf'
import './fonts/Roboto-Black.ttf'

import './fonts/MPLUSRounded1c-Thin.ttf'
import './fonts/MPLUSRounded1c-Light.ttf'
import './fonts/MPLUSRounded1c-Regular.ttf'
import './fonts/MPLUSRounded1c-Medium.ttf'
import './fonts/MPLUSRounded1c-Bold.ttf'
import './fonts/MPLUSRounded1c-ExtraBold.ttf'
import './fonts/MPLUSRounded1c-Black.ttf'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
