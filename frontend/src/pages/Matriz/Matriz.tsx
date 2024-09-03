import React from 'react';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';
import './Matriz.css';

export default function Matriz() {
  return (
    <main className="matriz-page">
      <Header />
      <div className="matriz-container">
        <h1>Bem vindo a Matriz</h1>
        <h3>Faturamento total: </h3>
        <h3>Faturamento do último mês: </h3>
        <ul>
          <li >
            <Link to="/matriz/create-product">
              <p className="matriz-links">Adicionar produtos</p>
            </Link>
          </li>
          <li>
            <Link to="/matriz/edit-products">
              <p className="matriz-links">Editar produtos</p>
            </Link>
          </li>
          <li>
            <Link to="/matriz/orders">
              <p className="matriz-links">Ver todos os pedidos</p>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
