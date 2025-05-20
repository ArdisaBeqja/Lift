import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Site Data
import BannerImg1 from '../../assets/images/banner/home03/banner-img1.webp';
import BannerImg2 from '../../assets/images/banner/home03/banner-img2.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// SCSS
import './style.scss';

function Banner03() {
  return (
    <>
      <section className="banner-section banner-slider03">
        <Swiper
          className="mySwiper swiper-slider-light h-100"
          modules={[A11y, Navigation]}
          navigation
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
              <Container>
                <Row>
                  <Col xl={9} lg={10} md={12}>
                    <div className="banner-content">
                      <div className="banner-title">
                        <h2 className="title">
                          <span>The wind is</span>not even close to us
                        </h2>
                        <p>
                          We are dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                        <Link className="button red" to="#">
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
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
              <Container>
                <Row>
                  <Col xl={9} lg={10} md={12}>
                    <div className="banner-content">
                      <div className="banner-title">
                        <h2 className="title">
                          <span>We have everything </span>Your car needs!
                        </h2>
                        <p>
                          We Provide best solution. consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco.
                        </p>
                        <Link className="button red" to="#">
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Banner03;
