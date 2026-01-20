import React, { useState } from 'react';
import '../styles/Carousel.css';

// Este componente recibe una "prop" llamada images (un array de rutas de fotos)
const Carousel = ({ images }) => {
  // Estado para saber qué foto estamos viendo (0, 1, 2...)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica para ir al siguiente
  const nextSlide = () => {
    // Si no es la última foto, sumamos 1
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Lógica para ir al anterior
  const prevSlide = () => {
    // Si no es la primera foto, restamos 1
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      {/* Contenedor deslizante */}
      <div 
        className="carousel-slide"
        // Aquí ocurre el movimiento: movemos el div a la izquierda según el índice
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imgSrc, index) => (
          <img 
            key={index} 
            src={imgSrc} 
            alt={`Slide ${index + 1}`} 
            className="carousel-image" 
            loading="lazy"
          />
        ))}
      </div>

      {/* Botones (solo se muestran si tienen sentido) */}
      <button 
        className="carousel-btn prev" 
        onClick={prevSlide}
        disabled={currentIndex === 0} // Desactiva si es la primera
      >
        &#10094;
      </button>

      <button 
        className="carousel-btn next" 
        onClick={nextSlide}
        disabled={currentIndex === images.length - 1} // Desactiva si es la última
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;