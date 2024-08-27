import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import SearchForm from '../SearchForm';
import HeaderCategories from '../HeaderCategories';
import HeaderCart from '../HeaderCart';
import BurguerMenu from '../BurgerMenu';


export default function Header() {
  return (
    <header className="header">
      <BurguerMenu />
      <div className="header-logo">
        <Link to="/">Logo</Link>
      </div>
      <HeaderCategories />
      <div className="header-utils">
        <SearchForm />
        <HeaderCart />
        <div className="auth-links">
          <Link to="/auth/login" className="auth-link">Entrar</Link>
          {' | '}
          <Link to="/auth/register" className="auth-link">Criar Conta</Link>
        </div>
      </div>
    </header>
  );
}
