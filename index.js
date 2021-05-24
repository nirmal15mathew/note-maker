import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateManager from "./StateManager";

ReactDOM.render(
  <React.StrictMode>
    <StateManager>
      <App />
    </StateManager>
  </React.StrictMode>,
  document.getElementById('root')
);