import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import './login.css';
import logo from '../../assets/logo.jpeg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="login-container">
      <img src={logo} alt="Snicker in logo" className="login-logo" />
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <p className="register-message">
        Não tem uma conta?{' '}
        <Link to={'/auth/register'} className="register-link">
          Criar conta
        </Link>
      </p>
    </main>
  );
}
