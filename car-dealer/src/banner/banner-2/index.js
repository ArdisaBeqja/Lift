import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import { Container } from 'react-bootstrap';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Site Data
import BannerImg1 from '../../assets/images/banner/home02/banner-img1.webp';
import BannerImg2 from '../../assets/images/banner/home02/banner-img2.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// SCSS
import './style.scss';

function Banner02() {
  return (
    <>
      <section className="banner-section banner-slider02">
        <Swiper
          className="mySwiper swiper-slider-light h-100"
          modules={[Pagination, A11y]}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          lazy="true"
        >
          <SwiperSlide
            key="1"
            className="slid01"
            style={{
              backgroundImage: `url(${BannerImg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="banner-item">
              <Container>
                <div className="banner-content">
                  <h2 className="banner-title01">
                    <span className="text-medium">2021 nsx</span>
                    <span className="text-large">Road &</span>
                  </h2>
                  <h2 className="banner-title02">Track</h2>
                  <Link className="button red" to="#">
                    Explore now
                  </Link>
                </div>
              </Container>
            </div>
          </SwiperSlide>

          <SwiperSlide
            key="2"
            className="slid02"
            style={{
              backgroundImage: `url(${BannerImg2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="banner-item">
              <Container>
                <div className="banner-content">
                  <h2 className="banner-title01">
                    <span className="text-medium">Ferrari</span>
                    <span className="text-large">drive me</span>
                  </h2>
                  <h2 className="banner-title02">but fast!</h2>
                  <Link className="button red" to="#">
                    Discover More
                  </Link>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Banner02;
