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
    <div className="cart-list-container">
      <ul className="cart-list">
        {products.map(({
          id, name, price, img, brand, color, size, quantity}) => (
          <li key={`${id} ${name}`} className="cart-item">
            <div className="product-info">
              <img
                src={`${process.env.REACT_APP_API_HOST}${img}`}
                alt={`${name} image`}
                className="product-image" />
              <div className="product-details">
                <p>{brand} {name}</p>
                <p>Cor: {color}</p>
                <p>Tamanho: {size}</p>
              </div>
            </div>
            <div className="quantity-controls">
              <button onClick={() => quantityIncrement(id, size)}>+</button>
              <p>{quantity}</p>
              <button onClick={() => quantityDecrement(id, size)}>-</button>
            </div>
            <div className="price-info">
              <p>R$ {(price * quantity).toFixed(2)}</p>
            </div>
            <button
              className="remove-item-button"
              onClick={() => deleteCartProduct(id, size)}>
              <img src={trashIcon} alt="Remove Item" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
