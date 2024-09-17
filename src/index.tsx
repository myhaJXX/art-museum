import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from '@store/ContextProvider';
import GlobalStyles from './global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ContextProvider>
    <App />
    <GlobalStyles />
  </ContextProvider>
);
