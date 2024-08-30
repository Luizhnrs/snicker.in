import React from 'react';
import {Link} from 'react-router-dom';
import './headerCategories.css';

export default function HeaderCategories() {
  return (
    <div className="header-categories">
      <Link className="category-link" to="/products/sneakers">
        <p>SNEAKERS</p>
      </Link>
      <Link className="category-link" to="/products/clothes">
        <p>ROUPAS</p>
      </Link>
      <Link className="category-link" to="/products/accessories">
        <p>ACESSÓRIOS</p>
      </Link>
    </div>
  );
}
