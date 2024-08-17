import { Link } from "react-router-dom";

type RegisterFormProps = {
  name: string,
  setName: (value: string) => void,
  email: string,
  setEmail: (value: string) => void,
  phoneNumber: string,
  setPhoneNumber: (value: string) => void,
  cpf: string,
  setCpf: (value: string) => void,
  password: string,
  setPassword: (value: string) => void,
};

export default function RegisterForm({ name, setName, email, setEmail, phoneNumber, setPhoneNumber, cpf, setCpf, password, setPassword }: RegisterFormProps) {
  return (
    <form className="register-form">

      <div className="input-div">
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Exemplo do exemplo"
          autoComplete="name"
        />
      </div>

      <div className="input-div">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="exemplo@exemplo.com"
          autoComplete="email"
        />
      </div>

      <div className="mini-inputs">
        <div>
          <label htmlFor="phoneNumber">Nuḿero de Telefone</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            required
            value={phoneNumber}
            onChange={({ target }) => setPhoneNumber(target.value)}
            placeholder="(99) 9 9999-9999"
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            required
            value={cpf}
            onChange={({ target }) => setCpf(target.value)}
            placeholder="999.999.999-99"
          />
        </div>
      </div>


      <div className="input-div">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="exemplo123"
        />
      </div>

      <button
        type="submit"
      >Criar Conta</button>

      <p className="register-message">
        Já tem uma conta?{' '}
        <Link to="/auth/login" className="register-link">
          Fazer login
        </Link>
      </p>

    </form>
  )
};
