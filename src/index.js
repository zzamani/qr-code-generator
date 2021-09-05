import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from "react-qr-code";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(<QRCode value="4000410" />, document.getElementById("root"));
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
