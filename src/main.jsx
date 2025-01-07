import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Make sure to import BrowserRouter
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename="/Recipe-Finder-App/"> {/* Set basename */}
    <App />
  </BrowserRouter>
);
