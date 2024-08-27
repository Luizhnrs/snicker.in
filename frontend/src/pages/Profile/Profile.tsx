import React from 'react';
import './profile.css';
import {useAuth} from '../../contexts/AuthContext';
import Header from '../../components/Header';
import UserForm from '../../components/UserForm';
import UserCardsForm from '../../components/UserCardsForm';
import UserAddressForm from '../../components/UserAddressForm';

export default function Profile() {
  const {user} = useAuth();
  return (
    <main className="profile-page">
      <Header />
      <div className="profile-container">
        <h1>Olá, {user.fullName}</h1>
        <div className="user-informations">
          <h2>Informações Pessoais</h2>
          <UserForm user={user} />
        </div>
        <div className="user-cards">
          <h2>Cartões Salvos</h2>
          <UserCardsForm />
        </div>
        <div className="user-addresss">
          <h2>Endereços</h2>
          <UserAddressForm />
        </div>
      </div>
    </main>
  );
}
