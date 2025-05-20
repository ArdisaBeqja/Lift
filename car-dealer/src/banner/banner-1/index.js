import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Site Data
import BannerImg1 from '../../assets/images/banner/home01/banner-img1.webp';
import BannerImg2 from '../../assets/images/banner/home01/banner-img2.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// SCSS
import './style.scss';

function Banner01() {
  return (
    <>
      <section className="banner-section banner-slider">
        <Swiper
          className="mySwiper swiper-slider-light h-100"
          modules={[A11y, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          lazy="true"
        >
          <SwiperSlide
            key="1"
            className="d-flex justify-content-center bg-overlay-secondary overlay-30"
            style={{
              backgroundImage: `url(${BannerImg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="banner-item">
              <div className="banner-content">
                <div className="banner-title">
                  <h6 className="sub-title">welcome to the most stunning </h6>
                  <h2 className="title">Car Dealer Website</h2>
                </div>
                <Link className="button red" to="#">
                  learn more
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            key="2"
            className="d-flex justify-content-center bg-overlay-secondary overlay-30"
            style={{
              backgroundImage: `url(${BannerImg2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="banner-item">
              <div className="banner-content">
                <div className="banner-title">
                  <h6 className="sub-title">we have everything</h6>
                  <h2 className="title">Your car needs!</h2>
                </div>
                <Link className="button red" to="#">
                  learn more
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Banner01;
