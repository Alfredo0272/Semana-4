import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './components/Contetx/App.provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <Router>
        <App />
      </Router>
    </AppContextProvider>
  </React.StrictMode>
);
