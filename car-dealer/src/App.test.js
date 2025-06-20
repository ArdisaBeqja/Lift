import React, { useEffect, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import img1 from './elll2.avif';
import img2 from './elll3.avif';
import img3 from './el.avif';

const images = [img1, img2, img3];

function ModernBanner1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Faster transition: 2.5 seconds
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const sectionStyle = {
    position: 'relative',
    width: '100%',
    height: '600px',
    overflow: 'hidden',
    backgroundColor: '#000',
  };

  const sliderWrapperStyle = {
    display: 'flex',
    width: `${images.length * 100}%`,
    height: '100%',
    transition: 'transform 0.8s ease-in-out',
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  const slideStyle = {
    flex: '0 0 100%',
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures image fits exactlyy
    display: 'block',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  };

  const textContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    textAlign: 'center',
  };

  const textStyle = {
    color: '#ffffff',
    fontSize: '52px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    fontFamily: `'Playfair Display', serif`,
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)',
  };

  return (
    <section style={sectionStyle}>
      <div style={sliderWrapperStyle}>
        {images.map((img, index) => (
          <div key={index} style={slideStyle}>
            <img src={img} alt={`Slide ${index}`} style={imageStyle} />
            <div style={overlayStyle}></div>
          </div>
        ))}
      </div>
      <Container style={textContainerStyle}>
        <h1 style={textStyle}>*Elevator Compnay*</h1>
      </Container>
    </section>
  );
}

export default ModernBanner1;
