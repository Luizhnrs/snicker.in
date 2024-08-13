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
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6">

        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nome Completo</label>
          <div className="mt-2">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={({target}) => setName(target.value)}
              autoComplete="name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div className="mt-2">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={({target}) => setEmail(target.value)}
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">Nuḿero de Telefone</label>
          <div>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={phoneNumber}
              onChange={({target}) => setPhoneNumber(target.value)}
              autoComplete="tel"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">CPF</label>
          <div className="mt-2">
            <input
              type="text"
              id="cpf"
              name="cpf"
              required
              value={cpf}
              onChange={({target}) => setCpf(target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
          <div className="mt-2">
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={({target}) => setPassword(target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Criar Conta</button>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
            Já tem uma conta?{' '}
            <Link to="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Fazer login
            </Link>
          </p>

      </form>
    </div>
  )
};
