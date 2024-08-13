import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h1>
        <LoginForm />
      </div>
      <p className="mt-10 text-center text-sm text-gray-500">
        Não tem uma conta?{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Criar conta
        </a>
      </p>
    </main>
  )
};
