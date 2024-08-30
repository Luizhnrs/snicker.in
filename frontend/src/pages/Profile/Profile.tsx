import React from 'react';
import './profile.css';
import {useAuth} from '../../contexts/AuthContext';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';
import gearIcon from '../../assets/gear.svg';
import {useCart} from '../../contexts/CartContext';

export default function Profile() {
  const {user} = useAuth();
  const {cartProducts} = useCart();
  return (
    <main className="profile-page">
      <Header />
      <div className="profile-container">
        <div className="div">
          <div className="profile-card">
            <div>
              <h3>Bem-vindo, {user.firstName}</h3>
              <p>{user.email}</p>
            </div>
            <Link to="/profile/profile-data">
              <img src={gearIcon} alt="Gear Icon" />
            </Link>
          </div>
          <div className="profile-card">
            <div>
              <p>Meus pontos: <span className="points">3000</span></p>
            </div>
            <Link to="/profile/profile-credit-cards">
              <p>Meus cartões</p>
            </Link>
          </div>
        </div>
        <div className="products-list">
          <h1>Meus pedidos</h1>
          <div className="order-infos">
            <h3>Pedido: <span>00000 - 29/10/20laele</span></h3>
            <Link to="/order/details">
              <p>Ver detalhes</p>
            </Link>
          </div>
          <ul>
            {
              cartProducts.map(({id, img, name, quantity}) => (
                <li key={`${id} ${name}`}>
                  <img src={img} alt={`${name} image`} />
                  <div>
                    <p className="products-list-name">{name}</p>
                    <p>Quantidade: {quantity}</p>
                  </div>
                  <hr />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </main>
  );
}
