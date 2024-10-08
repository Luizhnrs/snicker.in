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
            `${process.env.REACT_APP_API_HOST}${productImages[0].imageUrl}` :
            ''}
          alt={`${productBrand} ${productName} image`} />
        }
        <p>{productBrand} - {productName}</p>
        { productOnSale ?
        <p className="price">R$ {productSalePrice.toFixed(2)}
          <span className="no-sale-price">R$ {productPrice.toFixed(2)}</span>
        </p> :
        <p className="price">R$ {productPrice.toFixed(2)}</p> }
      </Link>
    </li>
  );
}
