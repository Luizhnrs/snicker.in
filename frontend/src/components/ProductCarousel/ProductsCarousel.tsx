import React, {useState} from 'react';
import './productCarousel.css';
import {useProducts} from '../../contexts/ProductsContext';

const ProductCarousel = () => {
  const {products} = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-content"
        style={
          {
            transform: `translateX(-${currentIndex * (70 + 10)}px)`}}
      >
        {products.map((product, index) => (
          <div key={index} className="carousel-item">
            <div className="product-card">
              <img
                src={product.images[0]}
                alt={product.name}
                className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="carousel-button left-button">
        &#8249;
      </button>
      <button onClick={nextSlide} className="carousel-button right-button">
        &#8250;
      </button>
    </div>
  );
};

export default ProductCarousel;
