import React, {useState} from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './register.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="register-container">
      <img src={logo} alt="Snicker in logo" className="register-logo" />
      <RegisterForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        cpf={cpf}
        setCpf={setCpf}
        password={password}
        setPassword={setPassword}
      />
      <p className="register-message">
        Já tem uma conta?{' '}
        <Link to="/auth/login" className="register-link">
          Fazer login
        </Link>
      </p>
    </main>
  );
}
