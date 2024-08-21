import React from 'react';
import Filters from '../components/Filters';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import '../styles/products.css';

const products = [
  {
    id: 1,
    name: 'Dunk low',
    img: 'https://www.copclub.com.br/cdn/shop/products/Wethenew-Sneakers-France-Nike-Dunk-Low-University-Blue-DD1391-102-1.0_800x_81d4aafa-9f95-4f99-8532-1ea4dcb214b0_grande.png?v=1622127347',
    price: 1044.99,
    brand: 'Nike',
    onSale: false,
    salePrice: 0,
    color: 'blue',
  },
  {
    id: 2,
    name: 'Air jordan',
    img: 'https://www.copclub.com.br/cdn/shop/files/jordan-w-air-jordan-1-low-panda_20032224_45173127_2048_1200x.png?v=1685563664',
    price: 845.90,
    brand: 'Nike',
    onSale: true,
    salePrice: 789.99,
    color: 'white',
  },
  {
    id: 2,
    name: 'Air jordan',
    img: 'https://www.copclub.com.br/cdn/shop/files/jordan-w-air-jordan-1-low-panda_20032224_45173127_2048_1200x.png?v=1685563664',
    price: 845.90,
    brand: 'Nike',
    onSale: true,
    salePrice: 789.99,
    color: 'white',
  },
  {
    id: 2,
    name: 'Air jordan',
    img: 'https://www.copclub.com.br/cdn/shop/files/jordan-w-air-jordan-1-low-panda_20032224_45173127_2048_1200x.png?v=1685563664',
    price: 845.90,
    brand: 'Nike',
    onSale: true,
    salePrice: 789.99,
    color: 'white',
  },
  {
    id: 2,
    name: 'Air jordan',
    img: 'https://www.copclub.com.br/cdn/shop/files/jordan-w-air-jordan-1-low-panda_20032224_45173127_2048_1200x.png?v=1685563664',
    price: 845.90,
    brand: 'Nike',
    onSale: true,
    salePrice: 789.99,
    color: 'white',
  },
  {
    id: 2,
    name: 'Air jordan',
    img: 'https://www.copclub.com.br/cdn/shop/files/jordan-w-air-jordan-1-low-panda_20032224_45173127_2048_1200x.png?v=1685563664',
    price: 845.90,
    brand: 'Nike',
    onSale: true,
    salePrice: 789.99,
    color: 'white',
  },
  {
    id: 2,
    name: 'Air jordan',
    img: 'https://www.copclub.com.br/cdn/shop/files/jordan-w-air-jordan-1-low-panda_20032224_45173127_2048_1200x.png?v=1685563664',
    price: 845.90,
    brand: 'Nike',
    onSale: true,
    salePrice: 789.99,
    color: 'white',
  },
  {
    id: 1,
    name: 'Dunk low',
    img: 'https://www.copclub.com.br/cdn/shop/products/Wethenew-Sneakers-France-Nike-Dunk-Low-University-Blue-DD1391-102-1.0_800x_81d4aafa-9f95-4f99-8532-1ea4dcb214b0_grande.png?v=1622127347',
    price: 1044.99,
    brand: 'Nike',
    onSale: false,
    salePrice: 0,
    color: 'blue',
  },
  {
    id: 1,
    name: 'Dunk low',
    img: 'https://www.copclub.com.br/cdn/shop/products/Wethenew-Sneakers-France-Nike-Dunk-Low-University-Blue-DD1391-102-1.0_800x_81d4aafa-9f95-4f99-8532-1ea4dcb214b0_grande.png?v=1622127347',
    price: 1044.99,
    brand: 'Nike',
    onSale: false,
    salePrice: 0,
    color: 'blue',
  },
  {
    id: 1,
    name: 'Dunk low',
    img: 'https://www.copclub.com.br/cdn/shop/products/Wethenew-Sneakers-France-Nike-Dunk-Low-University-Blue-DD1391-102-1.0_800x_81d4aafa-9f95-4f99-8532-1ea4dcb214b0_grande.png?v=1622127347',
    price: 1044.99,
    brand: 'Nike',
    onSale: false,
    salePrice: 0,
    color: 'blue',
  },
];

export default function Products() {
  return (
    <main className="products-page">
      <Header />
      <div className="products-container">
        <Filters />
        <ul>
          {
            products.map((product) =>
              <ProductCard
                key={`${product.id} ${product.name}`} product={product} />)
          }
        </ul>
      </div>
    </main>
  );
}
