import React from 'react';
import './cartSummaryTable.css';

export default function CartSummaryTable() {
  return (
    <div className='summary-container'>
      <p className='summary-title'>Resumo</p>
      <table className='summary-table'>
        <tbody>
          <tr className='summary-row'>
            <th className='summary-header'>Valor dos produtos</th>
            <td className='summary-data'>R$ 500,00</td>
          </tr>
          <tr className='summary-row'>
            <th className='summary-header'>Frete</th>
            <td className='summary-data'>Grátis</td>
          </tr>
          <tr className='summary-row'>
            <th className='summary-header'>Descontos</th>
            <td className='summary-data discount'>- R$ 100,00</td>
          </tr>
          <tr className='summary-row'>
            <th className='summary-header'>Total das compras</th>
            <td className='summary-data'>R$ 400,00</td>
          </tr>
        </tbody>
      </table>
      <button className='summary-button'>Continuar para o pagamento</button>
    </div>
  );
}
