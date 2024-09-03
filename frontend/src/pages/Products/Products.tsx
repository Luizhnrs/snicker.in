import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import './products.css';
import {useProducts} from '../../contexts/ProductsContext';
import {useParams} from 'react-router-dom';
import {ProductType} from '../../types/ProductType';
import NoProducts from '../../components/NoProducts';
import OrderByForm from '../../components/OrderByForm';
import {
  sortByHighestPrice,
  sortByLowestPrice,
  sortByRelevance,
} from '../../utils/orderByFuncs';

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [orderBy, setOrderBy] = useState('relevance');
  const {products} = useProducts();
  const {type} = useParams<{ type?: string }>();

  useEffect(() => {
    let updatedProducts = products;

    if (type) {
      const normalizedType = type
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');

      updatedProducts = products.filter((product) => {
        const megaString = `${product.productName} 
        ${product.productBrand} 
        ${product.productCategory} 
        ${product.productDescription}`
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');

        return megaString.includes(normalizedType);
      });
    }

    switch (orderBy) {
      case 'relevance':
        updatedProducts = sortByRelevance(updatedProducts);
        break;
      case 'highestPrice':
        updatedProducts = sortByHighestPrice(updatedProducts);
        break;
      case 'lowestPrice':
        updatedProducts = sortByLowestPrice(updatedProducts);
        break;
      default:
        break;
    }

    setFilteredProducts(updatedProducts);
  }, [type, orderBy, products]);

  return (
    <main className="products-page">
      <Header />
      <div className="products-container">
        {
          filteredProducts.length === 0 ? <NoProducts /> :
          (
            <>
              <h2>{type}</h2>
              <div className='products-div'>
                <p>{filteredProducts.length} itens encontrados</p>
                <OrderByForm orderBy={orderBy} setOrderBy={setOrderBy} />
              </div>
              <div>
                <ul>
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </ul>
              </div>
            </>
          )
        }
      </div>
    </main>
  );
}
