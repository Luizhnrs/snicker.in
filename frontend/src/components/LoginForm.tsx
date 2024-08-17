import { Link } from "react-router-dom";

type LoginFormProps = {
  email: string,
  setEmail: (value: string) => void,
  password: string,
  setPassword: (value: string) => void,
}

export default function LoginForm({ email, setEmail, password, setPassword }: LoginFormProps) {
  return (
    <form className="login-form">
      <div className="input-div">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="exemplo@exemplo.com"
          autoComplete="email" />
      </div>
      <div className="input-div">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="exemplo123"
          autoComplete="current-password"
        />
      </div>
      <div className="password-forgot">
        <Link to="/password-forgot" >
          <p>Esqueceu sua senha?</p>
        </Link>
      </div>
      <button
        type="submit"
        className="login-form-button"
      >Entrar</button>
    </form>
  );
};
