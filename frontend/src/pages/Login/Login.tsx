import React, {MouseEvent, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import './login.css';
import logo from '../../assets/logo.jpeg';
import {useAuth} from '../../contexts/AuthContext';
import {login} from '../../services/userService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {setToken} = useAuth();
  const navigate = useNavigate();

  const onClickHandler = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      const response = await login({email, password});
      setToken(response.token);
      navigate('/');
    } catch (error) {
      setErrorMessage('Algo deu errado!');
    }
  };

  return (
    <main className="login-container">
      <img src={logo} alt="Snicker in logo" className="login-logo" />
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onClickHandler={onClickHandler}
      />
      <p className="register-message">
        Não tem uma conta?{' '}
        <Link to={'/auth/register'} className="register-link">
          Criar conta
        </Link>
      </p>
      <p className="error-message">
        {errorMessage}
      </p>
    </main>
  );
}
