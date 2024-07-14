import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component


// Replace ReactDOM.render with ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
