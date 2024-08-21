import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/productCard.css';

type ProductCardProps = {
  product: {
    id: number,
    name: string,
    img: string,
    price: number,
    brand: string,
    onSale: boolean,
    salePrice: number,
    color: string,
  },
};

export default function ProductCard({product}: ProductCardProps) {
  const {id, name, img, price, brand, onSale, salePrice} = product;
  return (
    <li className="product-card">
      <Link to={`/product/${id}`}>
        <img src={img} alt={`${brand} ${name} image`} />
        <p>{brand} - {name}</p>
        { onSale ?
        <p>R$ {salePrice.toFixed(2)}
          <span className="no-sale-price">R$ {price.toFixed(2)}</span>
        </p> :
        <p>R$ {price.toFixed(2)}</p> }
      </Link>
    </li>
  );
}
