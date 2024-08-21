import React from 'react';
import {useCart} from '../../contexts/CartContext';
import cartIcon from '../../assets/cart.svg';
import {Link} from 'react-router-dom';
import './headerCart.css';

export default function HeaderCart() {
  const {getCartSize} = useCart();
  return (
    <div className="header-cart">
      <Link to="/cart" className="header-cart-link">
        <img src={cartIcon} alt="Cart Icon" />
        <p className='header-cart-size'>{getCartSize()}</p>
      </Link>
    </div>
  );
}
