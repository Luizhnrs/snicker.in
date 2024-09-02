import React from 'react';
import './PersonDrawer.css';
import {Link} from 'react-router-dom';

type PersonDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
}

export default function PersonDrawer({isOpen, onClose}: PersonDrawerProps) {
  return (
    <>
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <button className="drawer-close" onClick={onClose}>
        &times;
        </button>
        <div className="drawer-content">
          <h2>Snicker.in</h2>
          <hr />
          <Link to="/profile"><p>Perfil</p></Link>
          <Link to="/about"><p>Sobre nós</p></Link>
          <Link to="/auth/login"><p>Entrar</p></Link>
          <Link to="/auth/register"><p>Criar Conta</p></Link>
          <p>Sair</p>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
    </>
  );
}

