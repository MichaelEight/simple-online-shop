import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.css';
import AppRoutes from './routes';
import { AppProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);