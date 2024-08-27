import React, {ChangeEvent, useState} from 'react';
import './profile.css';
import {useAuth} from '../../contexts/AuthContext';
import Header from '../../components/Header';
import PhoneNumberInput from '../../components/PhoneNumberInput';

export default function Profile() {
  const {user} = useAuth();
  const [name, setName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [cpf, setCpf] = useState(user.cpf);

  const handleCpfChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {target} = event;
    const {value} = target;
    const input = value.replace(/\D/g, '');
    const match = input.match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);

    if (match) {
      const formattedCpf = !match[2] ?
        match[1] :
        `${match[1]}.${match[2]}${match[3] ?
          `.${match[3]}` : ''}${match[4] ? `-${match[4]}` : ''}`;
      setCpf(formattedCpf);
    } else {
      setCpf(input);
    }
  };
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
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                required
                value={cpf}
                onChange={handleCpfChange}
                placeholder="999.999.999-99"
              />
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
