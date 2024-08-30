import React, {MouseEvent} from 'react';
import './registerForm.css';
import CPFinput from '../CPFInput';

type RegisterFormProps = {
  firstName: string,
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  cpfCnpj: string;
  setCpfCnpj: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  onClickHandler: (event: MouseEvent<HTMLElement>) => void;
};

export default function RegisterForm({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  cpfCnpj,
  setCpfCnpj,
  password,
  setPassword,
  onClickHandler,
}: RegisterFormProps) {
  return (
    <form className="register-form">
      <div className="input-group">
        <label htmlFor="firstName">Nome</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          value={firstName}
          onChange={({target}) => setFirstName(target.value)}
          placeholder="Exemplo"
          autoComplete="name"
        />
      </div>

      <div className="input-group">
        <label htmlFor="lastName">Sobrenome</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          value={lastName}
          onChange={({target}) => setLastName(target.value)}
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
          <CPFinput cpf={cpfCnpj} setCpf={setCpfCnpj} />
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

      <button
        type="submit"
        className="submit-button"
        onClick={onClickHandler}
      >
        Criar Conta
      </button>
    </form>
  );
}
