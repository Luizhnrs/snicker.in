import React from 'react';
import './cartSummaryTable.css';
import {CartProductType} from '../../types/CartProductType';

type CartSummaryTableProps = {
  products: CartProductType[],
  discount: number,
}


export default function CartSummaryTable({
  products, discount}: CartSummaryTableProps) {
  const totalPriceProducts = products
      .reduce((acc, cur) => acc +=
      ((cur.onSale ? cur.salePrice : cur.price) * cur.quantity), 0)
      .toFixed(2);
  const discountValue = ((discount/ 100) * Number(totalPriceProducts))
      .toFixed(2);
  const totalPrice = (Number(totalPriceProducts) - Number(discountValue))
      .toFixed(2);
  console.log(products);
  return (
    <div className='summary-container'>
      <p className='summary-title'>Resumo</p>
      <table className='summary-table'>
        <tbody>
          <tr className='summary-row'>
            <th className='summary-header'>Valor dos produtos</th>
            <td className='summary-data'>R$ {totalPriceProducts}</td>
          </tr>
          <tr className='summary-row'>
            <th className='summary-header'>Frete</th>
            <td className='summary-data'>Grátis</td>
          </tr>
          <tr className='summary-row'>
            <th className='summary-header'>Descontos</th>
            <td className='summary-data discount'>- R$ {discountValue}</td>
          </tr>
          <tr className='summary-row'>
            <th className='summary-header'>Total das compras</th>
            <td className='summary-data'>R$ {totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <button className='summary-button'>Continuar para o pagamento</button>
    </div>
  );
}
