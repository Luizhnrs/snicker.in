import React from 'react';
import {useState} from 'react';
import RegisterForm from '../components/RegisterForm';
import '../styles/register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  return (
    <main className="register-container">
      <div>
        <h1>Snicker.In</h1>
      </div>
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
    </main>
  );
}
