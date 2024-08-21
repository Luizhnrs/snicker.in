import React from 'react';
import '../styles/cartTable.css';
import trashIcon from '../assets/trash.svg';
import {CartProductType} from '../types/CartProductType';
import {useCart} from '../contexts/CartContext';

type CartTableProps = {
  products: CartProductType[],
}

export default function CartTable({products}: CartTableProps) {
  const {quantityIncrement, quantityDecrement} = useCart();
  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Produtos</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Valor total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(({
            id, name, price, img, brand, color, size, quantity}) => (
            <tr key={`${id} ${name}`}>
              <td className="table-product">
                <img src={img} alt="" width="100" />
                <div className="ps">
                  <p>{brand} {name}</p>
                  <p>Cor: {color}</p>
                  <p>Tamanho: {size}</p>
                </div>
              </td>
              <td>
                <button
                  className='increment-button'
                  onClick={() => quantityIncrement(id, size)}>+</button>
                <p>{quantity}</p>
                <button
                  className='decrement-button'
                  onClick={() => quantityDecrement(id, size)}>-</button>
              </td>
              <td>R$ {price}</td>
              <td>R$ {price}</td>
              <td>
                <button>
                  <img src={trashIcon} alt="Trash Icon" />
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
