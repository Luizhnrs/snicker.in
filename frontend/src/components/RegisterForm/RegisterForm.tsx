import React from 'react';
import './registerForm.css';
import PhoneNumberInput from '../PhoneNumberInput';
import CPFinput from '../CPFInput';

type RegisterFormProps = {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  cpf: string;
  setCpf: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
};

export default function RegisterForm({
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  cpf,
  setCpf,
  password,
  setPassword,
}: RegisterFormProps) {
  return (
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
            setPhoneNumber={setPhoneNumber}
          />
        </div>

        <div className="input-group">
          <CPFinput cpf={cpf} setCpf={setCpf} />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={({target}) => setPassword(target.value)}
          placeholder="exemplo123"
        />
      </div>

      <button type="submit" className="submit-button">
        Criar Conta
      </button>
    </form>
  );
}
