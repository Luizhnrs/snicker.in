import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';
import {useState} from 'react';
import burguerMenuIcon from '../assets/burguerMenu.svg';
import searchIcon from '../assets/search.svg';
import cartIcon from '../assets/cart.svg';

export default function Header() {
  const [open, setOpen] = useState(true);

  const openMenu = () => {
    setOpen(!open);
    console.log('oi');
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        SnickerIn
      </div>
      <div className="categories">
        <div className="menu" onClick={openMenu}>
          <img src={burguerMenuIcon} alt="Burgue Menu Icon" />
        </div>
        <Link to="/products/footwear">
          <p>Calçados</p>
        </Link>
        <Link to="/products/clothes">
          <p>Roupas</p>
        </Link>
        <Link to="/products/accessories">
          <p>Acessórios</p>
        </Link>
      </div>
      <div className="utils">
        <form className="search">
          <img src={searchIcon} alt="Search Icon" />
          <input
            type="text"
            name="search"
            placeholder="Buscar"
          />
        </form>
        <div className="cart-div">
          <Link to="/cart">
            <img src={cartIcon} alt="Cart Icon" />
          </Link>
        </div>
        <div className="auth-div">
          <Link to="/auth/login"><p>Fazer Login</p></Link>
          {'|'}
          <Link to="/auth/register"><p>Criar Conta</p></Link>
        </div>
      </div>
    </header>
  );
}
