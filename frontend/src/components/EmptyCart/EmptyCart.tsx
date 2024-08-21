import React from 'react';
import {Link} from 'react-router-dom';
import './emptyCart.css';

export default function EmptyCart() {
  return (
    <main className='empty-cart'>
      <h1 className='empty-cart-title'>Seu carrinho está vazio</h1>
      <Link to="/" className='empty-cart-button'>
        <p>Voltar para a página principal</p>
      </Link>
    </main>
  );
}
