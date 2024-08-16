type LoginFormProps = {
  email: string,
  setEmail: (value: string) => void,
  password: string,
  setPassword: (value: string) => void,
}

export default function LoginForm({ email, setEmail, password, setPassword }: LoginFormProps) {
  return (
    <form>
      <div className="input-div">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
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
          autoComplete="current-password"
        />
      </div>
      <button
        type="submit"
        className="login-form-button"
      >Entrar</button>
    </form>
  );
};
