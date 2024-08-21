import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {StrictMode} from 'react';
import './styles/index.css';
import {AuthProvider} from './contexts/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>,
);
