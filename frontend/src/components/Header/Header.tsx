import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import {useState} from 'react';
import burguerMenuIcon from '../../assets/burguerMenu.svg';
import SearchForm from '../SearchForm';
import HeaderCategories from '../HeaderCategories';
import HeaderCart from '../HeaderCart';

export default function Header() {
  const [open, setOpen] = useState(true);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        Logo
      </div>
      <HeaderCategories />
      <div className="menu" onClick={openMenu}>
        <img src={burguerMenuIcon} alt="Burguer Menu Icon" />
      </div>
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
