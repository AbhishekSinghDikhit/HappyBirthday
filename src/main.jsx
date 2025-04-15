import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
// Ensure 'root' exists before rendering
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found! Make sure your HTML file has a <div id='root'></div>");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
