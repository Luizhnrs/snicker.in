import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import SearchForm from '../SearchForm';
import HeaderCategories from '../HeaderCategories';
import HeaderCart from '../HeaderCart';
import BurguerMenu from '../BurguerMenu';

export default function Header() {
  return (
    <header className="header-container">
      <BurguerMenu />
      <div className="header-logo">
        Logo
      </div>
      <HeaderCategories />
      <div className="utils">
        <SearchForm />
        <HeaderCart />
        <div className="auth-div">
          <Link to="/auth/login"><p>Entrar</p></Link>
          {'|'}
          <Link to="/auth/register"><p>Criar Conta</p></Link>
        </div>
      </div>
    </header>
  );
}
