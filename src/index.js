import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
<<<<<<< Updated upstream
=======
import { BrowserRouter } from "react-router-dom"
import { CookiesProvider } from "react-cookie";

>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <App />
=======
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>    
    </CookiesProvider>
    
>>>>>>> Stashed changes
  </React.StrictMode>
);

