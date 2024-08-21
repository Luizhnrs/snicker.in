import React from 'react';
import {useState} from 'react';
import burguerMenuIcon from '../../assets/burguerMenu.svg';
import './burguerMenu.css';
import {Link} from 'react-router-dom';

export default function BurguerMenu() {
  const [open, setOpen] = useState(true);
  const openMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="burguer-menu">
      <button onClick={openMenu} className="burguer-menu-button">
        <img src={burguerMenuIcon} alt="Burguer Menu Icon" />
      </button>
      {
        open && (
          <ul className="burguer-menu-list">
            <li>
              <Link
                to="/products/footwear"
                className="burguer-menu-list-link">
                <p>Calçados</p>
              </Link>
            </li>
            <li>
              <Link
                to="/products/clothes"
                className="burguer-menu-list-link"
              >
                <p>Roupas</p>
              </Link>
            </li>
            <li>
              <Link
                to="/products/accessories"
                className="burguer-menu-list-link">
                <p>Acessórios</p>
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="burguer-menu-list-link">
                <p>Carrinho</p>
              </Link>
            </li>
            <li>
              <Link
                to="/auth/login"
                className="burguer-menu-list-link">
                <p>Entrar</p>
              </Link>
            </li>
            <li>
              <Link
                to="/auth/register"
                className="burguer-menu-list-link">
                <p>Criar conta</p>
              </Link>
            </li>
          </ul>
        )
      }
    </div>
  );
}
