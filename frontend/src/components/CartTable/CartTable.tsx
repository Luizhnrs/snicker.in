import React from 'react';
import './cartTable.css';
import trashIcon from '../../assets/trash.svg';
import {useCart} from '../../contexts/CartContext';
import {CartProductType} from '../../types/CartProductType';

type CartTableProps = {
  products: CartProductType[],
}

export default function CartTable({products}: CartTableProps) {
  const {quantityIncrement, quantityDecrement, deleteCartProduct} = useCart();
  return (
    <div className="cart-table">
      <table>
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
                  <img src={img} alt={`${name} image`} />
                  <div className="ps">
                    <p>{brand} {name}</p>
                    <p>Cor: {color}</p>
                    <p>Tamanho: {size}</p>
                  </div>
                </td>
                <td>
                  <div className='quantity-buttons'>
                    <button
                      onClick={() => quantityIncrement(id, size)}>+</button>
                    <p>{quantity}</p>
                    <button
                      onClick={() => quantityDecrement(id, size)}>-</button>
                  </div>
                </td>
                <td>R$ {price}</td>
                <td>R$ {(price * quantity).toFixed(2)}</td>
                <td>
                  <button
                    className='trash-button'
                    onClick={() => deleteCartProduct(id, size)}>
                    <img src={trashIcon} alt="Trash Icon" />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
