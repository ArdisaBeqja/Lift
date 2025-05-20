import React from 'react';

// Libraries
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import ClientLogo from '../../component/client-logo';

// Site Data
import ClientLogoList from '../../data/client-logo-list';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ClientLogoSection() {
  return (
    <>
        <Container>
          <Row>
            <Col md={12}>
              <div className="divider-separator">
                <span className="separator-1">
                  <span className="separator-line"></span>
                </span>
                <h4 className="separator-title">Our Partners &amp; Suppoters</h4>
                <span className="separator-1">
                  <span className="separator-line"></span>
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Swiper
                modules={[A11y]}
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  400: {
                    slidesPerView: 2,
                  },
                  570: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 5,
                  },
                }}
              >
                {ClientLogoList.map((val, ind) => {
                  return (
                    <SwiperSlide key={ind}>
                      <ClientLogo
                        key={ind}
                        className="cl-size-md"
                        theme="logo-grayscale"
                        data={val.imgSrc}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
          </Row>
        </Container>
    </>
  );
}
export default ClientLogoSection;
