import React, {useEffect, useState} from 'react';
import Filters from '../../components/Filters/Filters';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import './products.css';
import {useProducts} from '../../contexts/ProductsContext';
import {useParams} from 'react-router-dom';
import {ProductType} from '../../types/ProductType';
import NoProducts from '../../components/NoProducts';

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const {products} = useProducts();
  const {type} = useParams<{ type?: string }>();

  useEffect(() => {
    if (type) {
      const normalizedType = type
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');

      const filterProducts = products.filter((product) => {
        const megaString = `${product.productName} 
        ${product.productBrand} 
        ${product.productCategory} 
        ${product.productDescription} 
        `
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');

        return megaString.includes(normalizedType);
      });

      setFilteredProducts(filterProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [type, products]);

  return (
    <main className="products-page">
      <Header />
      <div className="products-container">
        {
          filteredProducts.length === 0 ? <NoProducts /> :
          (
            <>
              <Filters />
              <ul>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </ul>
            </>
          )
        }
      </div>
    </main>
  );
}
