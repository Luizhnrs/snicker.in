import { Link } from "react-router-dom";
import "../styles/header.css"

export default function Header() {
  return (
    <header className="header-container">
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
