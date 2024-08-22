import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import burgerMenuIcon from '../../assets/burgerMenu.svg';
import arrowIcon from '../../assets/arrow.svg';
import './burgerMenu.css';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button onClick={toggleMenu} className="burger-menu-button">
        <img src={burgerMenuIcon} alt="Menu Icon" />
      </button>
      <ul className={`burger-menu-list ${isOpen ? 'open' : ''}`}>
        <hr />
        <div className="burger-menu-categories">
          <li>
            <Link to="/products/footwear" onClick={toggleMenu}>
              <p>CALÇADOS</p>
              <img src={arrowIcon} alt="Arrow Icon" />
            </Link>
          </li>
          <li>
            <Link to="/products/clothes" onClick={toggleMenu}>
              <p>ROUPAS</p>
              <img src={arrowIcon} alt="Arrow Icon" />
            </Link>
          </li>
          <li>
            <Link to="/products/accessories" onClick={toggleMenu}>
              <p>ACESSÓRIOS</p>
              <img src={arrowIcon} alt="Arrow Icon" />
            </Link>
          </li>
        </div>
        <hr />
        <div className="burger-menu-utils">
          <li>
            <Link to="/cart">
              <p>Carrinho</p>
            </Link>
          </li>
          <li>
            <Link to="/auth/login">
              <p>Entrar</p>
            </Link>
          </li>
          <li>
            <Link to="/auth/register">
              <p>Criar conta</p>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
