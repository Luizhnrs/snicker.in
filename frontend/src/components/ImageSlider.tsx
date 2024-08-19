import { useState } from "react";
import "../styles/imageSlider.css";

type ImageSliderProps = {
  images: string[]
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider-content">
        <img src={images[currentIndex]} alt="slide" className="slide-image" />
      </div>
      
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;