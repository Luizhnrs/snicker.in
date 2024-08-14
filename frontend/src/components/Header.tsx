import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        Logo
      </div>
      <div>
        Produtos
      </div>
      <div>
        <div>
          Busca
        </div>
        <Link to="/cart">Cart</Link>
        <Link to="/auth/login">Fazer Login</Link>
        <Link to="/auth/register">Criar Conta</Link>
      </div>
    </header>
  );
}
