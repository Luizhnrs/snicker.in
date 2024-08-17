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

export default function RegisterForm({ name, setName, email, setEmail, phoneNumber, setPhoneNumber, cpf, setCpf, password, setPassword}: RegisterFormProps) {
  return (
    <div>
      <form>

        <div className="input-div">
          <label htmlFor="name">Nome Completo</label>
          <div className="mt-2">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={({target}) => setName(target.value)}
              autoComplete="name"
            />
          </div>
        </div>

        <div className="input-div">
          <label htmlFor="email">Email</label>
          <div className="mt-2">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={({target}) => setEmail(target.value)}
              autoComplete="email"
            />
          </div>
        </div>

        <div className="input-div">
          <label htmlFor="phoneNumber">Nuḿero de Telefone</label>
          <div>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={phoneNumber}
              onChange={({target}) => setPhoneNumber(target.value)}
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="input-div">
          <label htmlFor="cpf">CPF</label>
          <div>
            <input
              type="text"
              id="cpf"
              name="cpf"
              required
              value={cpf}
              onChange={({target}) => setCpf(target.value)}
            />
          </div>
        </div>

        <div className="input-div">
          <label htmlFor="password">Senha</label>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={({target}) => setPassword(target.value)}
            />
          </div>
        </div>

        <div>
          <button
          type="submit"
          >Criar Conta</button>
        </div>

        <p>
            Já tem uma conta?{' '}
            <Link to="/auth/login">
              Fazer login
            </Link>
          </p>

      </form>
    </div>
  )
};
