import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import "./fonts/Geometos_neue_bold.otf";
import "./fonts/Geometos_neue_light.otf";
import "./fonts/shineFont.woff2";
import "./fonts/iconfont.woff2";

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
