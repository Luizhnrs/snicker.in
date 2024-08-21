import React from 'react';

export default function CartSummaryTable() {
  return (
    <div className='cart-summary-table'>
      <p>Resumo</p>
      <table>
        <hr />
        <tr>
          <th>Valor dos produtos</th>
          <td>R$ 500,00</td>
        </tr>
        <hr />
        <tr>
          <th>Frete</th>
          <td>Grátis</td>
        </tr>
        <hr />
        <tr>
          <th>Descontos</th>
          <td className="discount"> - R$ 100,00</td>
        </tr>
        <hr />
        <tr>
          <th>Total das compras</th>
          <td>R$ 400,00</td>
        </tr>
        <hr />
      </table>
      <button>Continuar para o pagamento</button>
    </div>
  );
}
