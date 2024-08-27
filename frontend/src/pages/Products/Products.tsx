import React from 'react';
import Filters from '../../components/Filters/Filters';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import './products.css';
import {useProducts} from '../../contexts/ProductsContext';

export default function Products() {
  const {products} = useProducts();
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
