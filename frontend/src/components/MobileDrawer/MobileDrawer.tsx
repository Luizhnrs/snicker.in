import React from 'react';
import './MobileDrawer.css';
import {Link} from 'react-router-dom';

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({isOpen, onClose}: MobileDrawerProps) {
  return (
    <>
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <button className="mobile-drawer-close" onClick={onClose}>
        &times;
        </button>
        <div className="mobile-drawer-content">
          <h2>Snicker.in</h2>
          <hr />
          <Link to="/products/sneakers"><p>SNEAKERS</p></Link>
          <Link to="/products/clothes"><p>ROUPAS</p></Link>
          <Link to="/products/acessories"><p>ACESSÓRIOS</p></Link>
        </div>
      </div>
    </>
  );
}

