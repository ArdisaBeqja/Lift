import React, { useState, useEffect } from 'react';
import backtoptopImg from '../../assets/images/car.webp';
import './back-top.scss';

const BackTop = () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once after mounting

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`car-top  ${isActive ? 'show' : 'car-run'}`}
      onClick={handleScrollTop}
    >
      <span>
        <img src={backtoptopImg} alt="" />
      </span>
    </div>
  );
};

export default BackTop;
