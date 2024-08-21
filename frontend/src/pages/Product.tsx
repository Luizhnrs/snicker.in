import React from 'react';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import '../styles/product.css';
import {useCart} from '../contexts/CartContext';

const product = {
  id: '8213281382jsandjas',
  name: 'Dunk low',
  imgs: ['https://www.copclub.com.br/cdn/shop/products/Wethenew-Sneakers-France-Nike-Dunk-Low-University-Blue-DD1391-102-1.0_800x_81d4aafa-9f95-4f99-8532-1ea4dcb214b0_grande.png?v=1622127347', 'https://www.copclub.com.br/cdn/shop/files/jordan-w-air-jordan-1-low-panda_20032224_45173127_2048_1200x.png?v=1685563664'],
  price: 1044.99,
  brand: 'Nike',
  onSale: true,
  salePrice: 0,
  color: 'blue',
  sizes: ['39', '40', '41', '42'],
};


export default function Product() {
  const {saveCartProduct} = useCart();
  const onClickHandler = () => {
    saveCartProduct({
      id: product.id,
      name: product.name,
      img: product.imgs[0],
      price: product.price,
      brand: product.brand,
      onSale: product.onSale,
      salePrice: product.salePrice,
      color: product.color,
    });
  };
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
          <div>
            <p>Selecione um tamanho</p>
            <ul className="sizes">
              {
                product.sizes.map((size) => (
                  <li key={size}>{size}</li>
                ))
              }
            </ul>
          </div>
          <button
            className="add-cart-button"
            onClick={onClickHandler}
          >Adicionar ao carrinho</button>
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
