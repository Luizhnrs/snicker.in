import React from 'react';
import {Link} from 'react-router-dom';
import './headerCategories.css';

export default function HeaderCategories() {
  return (
    <div className="header-categories">
      <Link className="header-categories-link" to="/products/footwear">
        <p>Calçados</p>
      </Link>
      <Link className="header-categories-link" to="/products/clothes">
        <p>Roupas</p>
      </Link>
      <Link className="header-categories-link" to="/products/accessories">
        <p>Acessórios</p>
      </Link>
    </div>
  );
}
