import React from 'react';

export default function CartSummaryTable() {
  return (
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

  );
}
