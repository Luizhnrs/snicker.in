import React from 'react';
import '../styles/cartTable.css';
import trashIcon from '../assets/trash.svg';
import {CartProductType} from '../types/CartProductType';

type CartTableProps = {
  products: CartProductType[],
}

export default function CartTable({products}: CartTableProps) {
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
          products.map(({id, name, price, img, brand, color}) => (
            <tr key={`${id} ${name}`}>
              <td className="table-product">
                <img src={img} alt="" width="100" />
                <div>
                  <p>{brand} {name}</p>
                  <p>Cor: {color}</p>
                </div>
              </td>
              <td>1</td>
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
