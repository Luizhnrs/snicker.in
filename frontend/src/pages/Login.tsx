import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main>
      <div>
        <h1>Login</h1>
        <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      </div>
      <p>
        Não tem uma conta?{' '}
        <Link to={"/auth/register"}>
          Criar conta
        </Link>
      </p>
    </main>
  )
};
