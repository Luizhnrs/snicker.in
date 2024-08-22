import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="login-container">
      <h1>Snicker.In</h1>
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
