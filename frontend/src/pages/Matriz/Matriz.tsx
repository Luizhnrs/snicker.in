import React from 'react';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';
import './Matriz.css';

export default function Matriz() {
  return (
    <main className="matriz-page">
      <Header />
      <div className="matriz-container">
        <Link to="/matriz/create-product"><p>Adicionar produtos</p></Link>
      </div>
    </main>
  );
}
