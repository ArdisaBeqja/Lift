import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../../component/section-title/section-title';
import Timeline from '../../component/timeline/timeline';
import { CounterstyleThree } from '../../component/counter/counter';
import TestimonialStyle1 from '../../component/testimonial/testimonial-item';

// Page Section
import WelcomeBlockFour from './welcome-block-four';

// Site Data
import TimelineList from '../../data/timeline-list';
import TestimonialList from '../../data/testimonial-list';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function AboutUs() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="About Us"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'About Us', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <WelcomeBlockFour />

          <hr className="gray" />
          <section className="section-ptb">
            <Container>
              <Row>
                <Col md={12}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="Car dealer's 30 year timeline from the beginning"
                    title="Our History"
                    separator="separator"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="timeline-step-wrapper">
                    {TimelineList.map((val, ind) => {
                      if (ind < 4) {
                        return (
                          <Timeline
                            key={ind}
                            extraClass=""
                            featureImg={val.featureImg}
                            stepNumber={val.stepNumber}
                            title={val.title}
                            description={val.description}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-ptb bg-1">
          <div className="section-overlay bg-black" data-overlay-opacity="0.7"></div>
            <Container>
              <Row>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03"
                    countStart="0"
                    countEnd="561"
                    countIcon="glyph-icon flaticon-beetle"
                    countTitle="Vehicles in Stock"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03"
                    countStart="0"
                    countEnd="856"
                    countIcon="glyph-icon flaticon-interface"
                    countTitle="Dealer Reviews"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03"
                    countStart="0"
                    countEnd="120"
                    countIcon="glyph-icon flaticon-circle"
                    countTitle="Happy Customer"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03"
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
          <section className="section-ptb">
            <Container>
              <Row>
                <Col lg={12}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="What Our Happy Clients say about us"
                    title="Our Testimonial"
                    separator="separator"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    pagination={{ clickable: true }}
                    lazy="true"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      400: {
                        slidesPerView: 1,
                      },
                      570: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {TestimonialList.map((val, ind) => {
                      if (ind < 4) {
                        return (
                          <SwiperSlide key={ind}>
                            {' '}
                            <TestimonialStyle1
                              key={ind}
                              testimonialImg={val.testimonialImg}
                              authorImg={val.authorImg}
                              authorName={val.authorName}
                              authorPosition={val.authorPosition}
                              description={val.description}
                              icon={val.icon}
                            />
                          </SwiperSlide>
                        );
                      }
                      return null;
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

export default AboutUs;
