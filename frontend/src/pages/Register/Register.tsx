import React, {MouseEvent, useState} from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './register.css';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import {registerUser} from '../../services/userService';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const onClickHandler = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      await registerUser({
        firstName,
        lastName,
        email,
        cpfCnpj,
        password,
      });
      navigate('/login');
    } catch (error) {
      setErrorMessage('Ocorreu um erro!');
    }
  };

  return (
    <main className="register-container">
      <img src={logo} alt="Snicker in logo" className="register-logo" />
      <RegisterForm
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        cpfCnpj={cpfCnpj}
        setCpfCnpj={setCpfCnpj}
        password={password}
        setPassword={setPassword}
        onClickHandler={onClickHandler}
      />
      <p className="error-message">
        {errorMessage}
      </p>
      <p className="register-message">
        Já tem uma conta?{' '}
        <Link to="/auth/login" className="register-link">
          Fazer login
        </Link>
      </p>
    </main>
  );
}
