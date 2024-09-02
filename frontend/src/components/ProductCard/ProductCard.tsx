import React from 'react';
import {Link} from 'react-router-dom';
import './productCard.css';
import {ProductType} from '../../types/ProductType';

type ProductCardProps = {
  product: ProductType
};

export default function ProductCard({product}: ProductCardProps) {
  const {
    id,
    productBrand,
    productName,
    productImages,
    productPrice,
    productOnSale,
    productSalePrice} = product;
  return (
    <li className="product-card">
      <Link to={`/product/${id}`}>
        {
          productImages && <img src={productImages.length > 0 ?
            `http://localhost:8080${productImages[0].imageUrl}` : ''}
          alt={`${productBrand} ${productName} image`} />
        }
        <p>{productBrand} - {productName}</p>
        { productOnSale ?
        <p>R$ {productSalePrice.toFixed(2)}
          <span className="no-sale-price">R$ {productPrice.toFixed(2)}</span>
        </p> :
        <p>R$ {productPrice.toFixed(2)}</p> }
      </Link>
    </li>
  );
}
