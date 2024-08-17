import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="login-container">
      <h1>SnickerIn</h1>
      <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      <p className="login-message">
        Não tem uma conta?{' '}
        <Link to={"/auth/register"} className="register-link">
          Criar conta
        </Link>
      </p>
    </main>
  )
};
