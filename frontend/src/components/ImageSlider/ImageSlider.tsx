import React from 'react';
import {useState} from 'react';
import './imageSlider.css';
import {ProductImage} from '../../types/ProductImage';

type ImageSliderProps = {
  images: ProductImage[]
}

export default function ImageSlider({images}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setCurrentIndex(index);
  };

  console.log(images);

  return (
    <div className="slider">
      <div className="slider-content">
        <img src={images.length > 0 ?
        `${process.env.REACT_APP_API_HOST}${images[currentIndex].imageUrl}` :
        ''}
        alt="slide" className="slide-image" />
      </div>

      <div className="thumbnails">
        {images.length > 0 && images.map((image, index) => (
          <img
            key={index}
            src={`${process.env.REACT_APP_API_HOST}${image.imageUrl}`}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
          />
        ))}
      </div>
    </div>
  );
}
