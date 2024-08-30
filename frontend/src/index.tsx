import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {StrictMode} from 'react';
import './styles/index.css';
import {AuthProvider} from './contexts/AuthContext';
import {CartProvider} from './contexts/CartContext';
import {ProductsProvider} from './contexts/ProductsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <StrictMode>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </StrictMode>,
);
