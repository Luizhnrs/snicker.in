export default function RegisterForm() {
  return (
    <div>
      <form>

        <div>
          <label htmlFor="name">Nome Completo</label>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phoneNumber">Nuḿero de Telefone</label>
          <div>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              required
              autoComplete="tel"
            />
          </div>
        </div>

        <div>
          <label htmlFor="cpf">CPF</label>
          <div>
            <input
              type="text"
              id="cpf"
              name="cpf"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
        </div>

        <div>
          <button
          type="submit"
          >Criar Conta</button>
        </div>

      </form>
    </div>
  )
};
