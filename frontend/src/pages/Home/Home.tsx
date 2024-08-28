import React from 'react';
import Header from '../../components/Header';
import './home.css';
import ProductCarousel from '../../components/ProductCarousel/ProductsCarousel';

export default function Home() {
  return (
    <main className="home-page">
      <Header />
      <div className="home-container">
        <img src="https://assets.propmark.com.br/uploads/2022/07/unnamed---2022-07-07T095945.233.jpg" alt="" />
        <div>
          <h3>Mais populares</h3>
          <ProductCarousel />
        </div>
        <div>
          <h3>Na promoção</h3>
        </div>
      </div>
    </main>
  );
}
