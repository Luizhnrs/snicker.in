import React from 'react';
import './profile.css';
import {useAuth} from '../../contexts/AuthContext';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';
import gearIcon from '../../assets/gear.svg';

export default function Profile() {
  const {user} = useAuth();
  return (
    <main className="profile-page">
      <Header />
      <div className="profile-container">
        <div className="div">
          <div className="profile-card">
            <div>
              <h3>Bem-vindo, {user.fullName}</h3>
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
      </div>
    </main>
  );
}
