export default function LoginForm() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        autoComplete="email" />
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        required
      />
      <button>Entrar</button>
    </form>
  );
};
