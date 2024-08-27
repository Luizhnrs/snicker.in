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
        <div className="header-cart-icon">
          <img src={cartIcon} alt="Cart Icon" />
          <div className="header-cart-count">{getCartSize()}</div>
        </div>
      </Link>
    </div>
  );
}
