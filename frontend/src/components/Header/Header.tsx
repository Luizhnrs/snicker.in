import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import {useState} from 'react';
import burguerMenuIcon from '../../assets/burguerMenu.svg';
import cartIcon from '../../assets/cart.svg';
import {useCart} from '../../contexts/CartContext';
import SearchForm from '../SearchForm';

export default function Header() {
  const [open, setOpen] = useState(true);

  const {getCartSize} = useCart();

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        Logo
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
        <SearchForm />
        <div className="cart-div">
          <Link to="/cart">
            <img src={cartIcon} alt="Cart Icon" />
            <p className='cart-size'>{getCartSize()}</p>
          </Link>
        </div>
        <div className="auth-div">
          <Link to="/auth/login"><p>Entrar</p></Link>
          {'|'}
          <Link to="/auth/register"><p>Criar Conta</p></Link>
        </div>
      </div>
    </header>
  );
}
