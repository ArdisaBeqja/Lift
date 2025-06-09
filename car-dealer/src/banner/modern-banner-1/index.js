import React, { useEffect, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import img1 from './elll2.avif';
import img2 from './elll3.avif';
import img3 from './ell1.avif';
import img5 from './lift.avif';
import img0 from './img0.avif';

const images = [img3, img2, img1, img0, img5];

function ModernBanner1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Faster slide duration
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const sectionStyle = {
    position: 'relative',
    height: '600px',
    width: '100vw',
    overflow: 'hidden',
    backgroundColor: '#111',
  };

  const sliderWrapperStyle = {
    display: 'flex',
    height: '100%',
    width: `${images.length * 100}vw`,
    transition: 'transform 0.8s ease-in-out',
    transform: `translateX(-${currentIndex * 100}vw)`,
  };

  const slideStyle = {
    width: '100vw',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 15, 15, 0.6)',
    zIndex: 1,
  };

  const textContainerStyle = {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '100%',
    padding: '0 20px',
  };

  const textStyle = {
    color: 'white',
    fontSize: '60px',
    fontWeight: 600,
    fontStyle: 'italic',
    fontFamily: `'Playfair Display', serif`,
    letterSpacing: '2px',
    textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
  };

  return (
    <section style={sectionStyle}>
      <div style={sliderWrapperStyle}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              ...slideStyle,
              backgroundImage: `url(${img})`,
            }}
          >
            <div style={overlayStyle}></div>
          </div>
        ))}
      </div>
      <Container style={textContainerStyle}>
        <h1 style={textStyle}>Class Ashesnsor</h1>
      </Container>
    </section>
  );
}

export default ModernBanner1;
