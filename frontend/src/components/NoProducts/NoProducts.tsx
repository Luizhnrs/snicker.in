import React from 'react';
import {Link} from 'react-router-dom';
import './NoProducts.css';

export default function NoProducts() {
  return (
    <main className='empty-cart'>
      <h1 className='empty-cart-title'>Nenhum produto encontrado</h1>
      <Link to="/" className='empty-cart-button'>
        <p>Voltar para a página principal</p>
      </Link>
    </main>
  );
}
