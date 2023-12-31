// import React from "react";
// import ReactDOM from "react-dom";
// // import NAV from "./components/navbar/App.jsx";
// // import LOADER from "./components/Loading/loading.jsx";
// import App from "./App.js";

// const rootElement = document.getElementById("body");
// // const footer = document.getElementById("footer");

// ReactDOM.render(
//  <App/>,
//   rootElement
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const rootElement = document.getElementById("root"); // Use "root" ID for consistency
// const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();