import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {StrictMode} from 'react';
import './styles/index.css';
import {AuthProvider} from './contexts/AuthContext';
import {CartProvider} from './contexts/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <StrictMode>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </StrictMode>,
);
