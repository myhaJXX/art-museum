import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import GlobalStyles from './global';
// import './App.css'
import ContextProvider from './store/ContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ContextProvider>
    <App />
    <GlobalStyles />
  </ContextProvider>
);
