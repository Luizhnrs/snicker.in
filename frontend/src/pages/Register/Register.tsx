import React, {MouseEvent, useState} from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './register.css';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import {registerUser} from '../../services/userService';
import {useAuth} from '../../contexts/AuthContext';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useAuth();
  const navigate = useNavigate();

  const onClickHandler = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      const newUser = await registerUser({
        firstName,
        lastName,
        email,
        cpfCnpj,
        password,
      });
      setUser({
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        cpfCnpj: newUser.cpfCnpj,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
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
      <p className="register-message">
        Já tem uma conta?{' '}
        <Link to="/auth/login" className="register-link">
          Fazer login
        </Link>
      </p>
    </main>
  );
}
