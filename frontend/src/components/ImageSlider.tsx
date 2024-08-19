import { useState } from "react";
import "../styles/imageSlider.css";

type ImageSliderProps = {
  images: string[]
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <button onClick={goToPrevious} className="left-arrow">❮</button>
      <div className="slider-content">
        <img src={images[currentIndex]} alt="slide" className="slide-image" />
      </div>
      <button onClick={goToNext} className="right-arrow">❯</button>
      
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
