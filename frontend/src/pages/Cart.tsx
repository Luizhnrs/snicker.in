import CartTable from "../components/CartTable";
import Header from "../components/Header"
import "../styles/cart.css";

export default function Cart() {
  return (
    <main className="cart-page">
      <Header />
      <div className="cart-container">
        <CartTable />
        <div>
          <p>Cupom de desconto</p>
          <form>
            <input type="text" id="cupon" />
            <button>Aplicar</button>
          </form>
        </div>
      </div>
    </main>
  )
};
