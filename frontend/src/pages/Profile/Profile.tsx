import React from 'react';
import './profile.css';
import {useAuth} from '../../contexts/AuthContext';
import Header from '../../components/Header';
import UserForm from '../../components/UserForm';

export default function Profile() {
  const {user} = useAuth();
  return (
    <main className="profile-page">
      <Header />
      <div className="profile-container">
        <h1>Perfil</h1>
        <UserForm user={user} />
      </div>
    </main>
  );
}
