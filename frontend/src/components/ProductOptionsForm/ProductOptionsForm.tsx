import React, {MouseEvent, useState} from 'react';
import {useCart} from '../../contexts/CartContext';
import {ProductType} from '../../types/ProductType';


type ProductOptionsFormProps = {
  product: ProductType,
}

export default function ProductOptionsForm(
    {product}: ProductOptionsFormProps) {
  const [selectedSize, setSelectedSize] = useState('');

  const {saveCartProduct} = useCart();

  const onClickHandler = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (selectedSize) {
      saveCartProduct({
        id: product.id ? product.id : '',
        name: product.productName,
        img: product.productImages ? product.productImages[0].imageUrl: '',
        price: product.productPrice,
        brand: product.productBrand,
        onSale: product.productOnSale,
        salePrice: product.productSalePrice,
        color: 'black',
        size: selectedSize,
        quantity: 1,
      });
    }
  };
  return (
    <form>
      <div>
        <p>Selecione um tamanho</p>
        <ul className="sizes">
          {
            ['38', '39'].map((size: string) => (
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
