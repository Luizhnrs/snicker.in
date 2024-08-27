import React, {useState} from 'react';
import './profile.css';
import {useAuth} from '../../contexts/AuthContext';
import Header from '../../components/Header';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import CPFinput from '../../components/CPFInput';

export default function Profile() {
  const {user} = useAuth();
  const [name, setName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [cpf, setCpf] = useState(user.cpf);
  return (
    <main className="profile-page">
      <Header />
      <div className="profile-container">
        <h1>Perfil</h1>
        <form className="register-form">
          <div className="input-group">
            <label htmlFor="name">Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={({target}) => setName(target.value)}
              placeholder="Exemplo do exemplo"
              autoComplete="name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={({target}) => setEmail(target.value)}
              placeholder="exemplo@exemplo.com"
              autoComplete="email"
            />
          </div>

          <div className="mini-inputs">
            <div className="input-group">
              <PhoneNumberInput
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber} />
            </div>

            <div className="input-group">
              <CPFinput cpf={cpf} setCpf={setCpf} />
            </div>
          </div>
          <button type="submit" className="submit-button">
        Salvar
          </button>
        </form>
      </div>
    </main>
  );
}
