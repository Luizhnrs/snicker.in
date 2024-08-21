import React, {MouseEvent, useState} from 'react';
import {useCart} from '../contexts/CartContext';

type ProductOptionsFormProps = {
  product: any,
}

export default function ProductOptionsForm(
    {product}: ProductOptionsFormProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const {saveCartProduct} = useCart();
  const onClickHandler = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    saveCartProduct({
      id: product.id,
      name: product.name,
      img: product.imgs[0],
      price: product.price,
      brand: product.brand,
      onSale: product.onSale,
      salePrice: product.salePrice,
      color: product.color,
      size: selectedSize,
    });
  };
  return (
    <form>
      <div>
        <p>Selecione um tamanho</p>
        <ul className="sizes">
          {
            product.sizes.map((size: string) => (
              <li key={size}>
                <label htmlFor={size}>{size}</label>
                <input
                  type="radio"
                  name="size"
                  id={size}
                  value={size}
                  onChange={({target}) => setSelectedSize(target.value)}
                />
              </li>
            ))
          }
        </ul>
      </div>
      <button
        className="add-cart-button"
        onClick={onClickHandler}
      >Adicionar ao carrinho</button>
    </form>
  );
}
