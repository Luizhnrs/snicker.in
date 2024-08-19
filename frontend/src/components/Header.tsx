import { Link } from "react-router-dom";
import "../styles/header.css"
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(true);

  const openMenu = () => {
    setOpen(!open);
    console.log('oi')
  }

  return (
    <header className="header-container">
      <div className="header-logo">
        SnickerIn
      </div>
      <div className="categories">
        <div className="menu" onClick={openMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </div>
        <Link to="/footwear">
          <p>Calçados</p>
        </Link>
        <Link to="/clothes">
          <p>Roupas</p>
        </Link>
        <Link to="/accessories">
          <p>Acessórios</p>
        </Link>
      </div>
      <div className="utils">
        <form className="search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            type="text"
            name="search"
            placeholder="Buscar"
          />
        </form>
        <div className="cart-div">
          <Link to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
          </Link>
        </div>
        <div className="auth-div">
          <Link to="/auth/login"><p>Fazer Login</p></Link>
          {'|'}
          <Link to="/auth/register"><p>Criar Conta</p></Link>
        </div>
      </div>
    </header>
  );
}
