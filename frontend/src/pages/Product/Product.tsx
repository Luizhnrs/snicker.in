import React from 'react';
import Header from '../../components/Header';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ProductOptionsForm from '../../components/ProductOptionsForm';
import './product.css';

const product = {
  id: '8213281382jsandjas',
  name: 'Dunk low',
  imgs: ['https://www.copclub.com.br/cdn/shop/products/Wethenew-Sneakers-France-Nike-Dunk-Low-University-Blue-DD1391-102-1.0_800x_81d4aafa-9f95-4f99-8532-1ea4dcb214b0_grande.png?v=1622127347', 'https://www.copclub.com.br/cdn/shop/files/jordan-w-air-jordan-1-low-panda_20032224_45173127_2048_1200x.png?v=1685563664'],
  price: 1044.99,
  brand: 'Nike',
  onSale: false,
  salePrice: 800,
  color: 'blue',
  sizes: ['39', '40', '41', '42'],
};


export default function Product() {
  return (
    <main className="product-page">
      <Header />
      <div className="product-container">
        <ImageSlider images={product.imgs} />
        <div className="details">
          <h4>{product.name}</h4>
          <p>{product.brand}</p>
          {
            product.onSale ?
              <p>R$ {product.salePrice.toFixed(2)}
                <span
                  className="no-sale-price">R$ {product.price.toFixed(2)}</span>
              </p> :
              <p>R$ {product.price.toFixed(2)}</p>
          }
          <ProductOptionsForm product={product} />
          <div className="description">
            <article>
              Reconhecendo as raízes do Dunk como o tênis de time universitário
              de melhor classificação, o pacote “Be True To Your School”
              parece a campanha publicitária original em busca de inspiração.
               As cores representam universidades de primeira linha, enquanto
               o couro nítido tem a quantidade perfeita de brilho para torná-los
                uma vitória absoluta.
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
