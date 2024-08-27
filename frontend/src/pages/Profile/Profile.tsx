import React from 'react';
import './profile.css';
import {useAuth} from '../../contexts/AuthContext';
import Header from '../../components/Header';
import UserCardsForm from '../../components/UserCardsForm';

export default function Profile() {
  const {user} = useAuth();
  return (
    <main className="profile-page">
      <Header />
      <div className="profile-container">
        <h1>Olá, {user.fullName}</h1>
        <div className="user-cards">
          <h2>Cartões Salvos</h2>
          <UserCardsForm />
        </div>
      </div>
    </main>
  );
}
