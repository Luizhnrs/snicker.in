import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import burguerMenuIcon from '../../assets/burguerMenu.svg';
import arrowIcon from '../../assets/arrow.svg';
import './burguerMenu.css';

export default function BurguerMenu() {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="burguer-menu">
      <button onClick={openMenu} className="burguer-menu-button">
        <img src={burguerMenuIcon} alt="Burguer Menu Icon" />
      </button>
      <ul className={`burguer-menu-list ${open ? 'open' : ''}`}>
        <hr />
        <div className="burguer-menu-categories">
          <li>
            <Link to="/products/footwear" onClick={openMenu}>
              <p>CALÇADOS</p>
              <img src={arrowIcon} alt="Arrow Icon" />
            </Link>
          </li>
          <li>
            <Link to="/products/clothes" onClick={openMenu}>
              <p>ROUPAS</p>
              <img src={arrowIcon} alt="Arrow Icon" />
            </Link>
          </li>
          <li>
            <Link to="/products/accessories" onClick={openMenu}>
              <p>ACESSÓRIOS</p>
              <img src={arrowIcon} alt="Arrow Icon" />
            </Link>
          </li>
        </div>
        <hr />
        <div className="burguer-menu-utils">
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
