import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../../component/section-title/section-title';
import { CounterstyleThree } from '../../component/counter/counter';
import { TestimonialStyle3 } from '../../component/testimonial/testimonial-item';

// Page Section
import { AboutWelcomeBlock } from './welcome-block-four';

// Site Data
import { TestimonialList3 } from '../../data/testimonial-list';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function AboutUsTwo() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="About Us"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'About Us 02', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <AboutWelcomeBlock />

          <hr className="gray" />

          <section className="section-ptb bg-1">
            <div className="section-overlay bg-black" data-overlay-opacity="0.7"></div>
            <Container>
              <Row>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mt-4 mt-lg-0"
                    countStart="0"
                    countEnd="561"
                    countIcon="glyph-icon flaticon-beetle"
                    countTitle="Vehicles in Stock"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mt-4 mt-lg-0"
                    countStart="0"
                    countEnd="856"
                    countIcon="glyph-icon flaticon-interface"
                    countTitle="Dealer Reviews"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mt-4 mt-lg-0"
                    countStart="0"
                    countEnd="120"
                    countIcon="glyph-icon flaticon-circle"
                    countTitle="Happy Customer"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mt-4 mt-lg-0"
                    countStart="0"
                    countEnd="520"
                    countIcon="glyph-icon flaticon-cup"
                    countTitle="Awards"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          {/*Testimonial section*/}
          <section className="section-ptb ">
            <Container>
              <Row className="row justify-content-center">
                <Col lg={12}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="What Our Happy Clients say about us"
                    title="Our Testimonial"
                    separator="separator"
                  />
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col>
                  <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    lazy="true"
                  >
                    {TestimonialList3.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <TestimonialStyle3
                            key={ind}
                            authorImg={val.authorImg}
                            authorName={val.authorName}
                            authorPosition={val.authorPosition}
                            icon={val.icon}
                            iconLeft={val.iconLeft}
                            description={val.description}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default AboutUsTwo;
