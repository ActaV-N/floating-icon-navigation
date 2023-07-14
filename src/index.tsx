import React from 'react';
import { FinProvider } from '@actav/floating-icon-navigation';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FinProvider>
      <App />
    </FinProvider>
  </React.StrictMode>,
);