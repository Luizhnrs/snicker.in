import React from 'react';
import CartTable from '../components/CartTable';
import Header from '../components/Header';
import ShippingEstimateForm from '../components/ShippingEstimateForm';
import '../styles/cart.css';
import DiscountCouponForm from '../components/DiscountCouponForm';

export default function Cart() {
  return (
    <main className="cart-page">
      <Header />
      <div className="cart-container">
        <CartTable />
        <div className="div">
          <ShippingEstimateForm />
          <DiscountCouponForm />
          <div>
            <p>Resumo</p>
            <table>
              <hr />
              <tr>
                <th>Valor dos produtos</th>
                <td>R$</td>
              </tr>
              <hr />
              <tr>
                <th>Frete</th>
                <td>Grátis</td>
              </tr>
              <hr />
              <tr>
                <th>Descontos</th>
                <td> - R$</td>
              </tr>
              <hr />
              <tr>
                <th>Total das compras</th>
                <td>R$</td>
              </tr>
            </table>
            <button>Continuar para o pagamento</button>
          </div>
        </div>
      </div>
    </main>
  );
}
