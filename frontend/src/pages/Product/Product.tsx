import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ProductOptionsForm from '../../components/ProductOptionsForm';
import './product.css';
import {ProductType} from '../../types/ProductType';
import {useParams} from 'react-router-dom';
import {getProductById} from '../../services/productService';


export default function Product() {
  const [product, setProduct] = useState<ProductType>({
    id: '',
    productName: '',
    productDescription: '',
    productImages: '',
    productPrice: 0,
    productBrand: '',
    productOnSale: false,
    productSalePrice: 0,
    productCategory: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const {productId} = useParams();

  const getProduct = async () => {
    try {
      const response = await getProductById(String(productId));
      setProduct(response);
    } catch (error) {
      setErrorMessage('Produto não encontrado');
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (errorMessage) return (<>{errorMessage}</>);

  return (
    <main className="product-page">
      <Header />
      <div className="product-container">
        <ImageSlider images={[product.productImages]} />
        <div className="details">
          <h4>{product.productName}</h4>
          <p>{product.productBrand}</p>
          {
            product.productOnSale ?
              <p>R$ {product.productSalePrice.toFixed(2)}
                <span
                  className="no-sale-price">
                    R$ {product.productPrice.toFixed(2)}</span>
              </p> :
              <p>R$ {product.productPrice.toFixed(2)}</p>
          }
          <ProductOptionsForm product={product} />
          <div className="description">
            <article>
              {product.productDescription}
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
