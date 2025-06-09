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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ✅ Updated Testimonial Data – Elevator Themed (images retained)
const TestimonialList3 = [
  {
    authorImg: 'client1.jpg',
    authorName: 'Sarah Mendez',
    authorPosition: 'Property Manager, Oakridge Towers',
    icon: 'glyph-icon flaticon-quote',
    iconLeft: true,
    description:
      'Elevate Solutions installed our new residential lift ahead of schedule and with flawless precision. The team was professional, and the service was outstanding.',
  },
  {
    authorImg: 'client2.jpg',
    authorName: 'Mark Thompson',
    authorPosition: 'Facilities Director, Westview Mall',
    icon: 'glyph-icon flaticon-quote',
    iconLeft: true,
    description:
      'Their maintenance team is incredibly responsive and keeps our elevators running smoothly. We’ve reduced downtime significantly since working with them.',
  },
  {
    authorImg: 'client3.jpg',
    authorName: 'Rina Patel',
    authorPosition: 'Architect, Nova Builds',
    icon: 'glyph-icon flaticon-quote',
    iconLeft: true,
    description:
      'Working with Elevate Solutions during our commercial build was seamless. Their technical knowledge and custom design advice were crucial to our success.',
  },
];

function AboutUsTwo() {
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
          {/* About Section */}
          <AboutWelcomeBlock />

          <hr className="gray" />

          {/* Counter Section */}
          <section className="section-ptb bg-1">
            <div className="section-overlay bg-black" data-overlay-opacity="0.7"></div>
            <Container>
              <Row>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mt-4 mt-lg-0"
                    countStart="0"
                    countEnd="320"
                    countIcon="glyph-icon flaticon-elevator"
                    countTitle="Lifts Installed"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mt-4 mt-lg-0"
                    countStart="0"
                    countEnd="780"
                    countIcon="glyph-icon flaticon-customer-service"
                    countTitle="Service Requests Handled"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mt-4 mt-lg-0"
                    countStart="0"
                    countEnd="250"
                    countIcon="glyph-icon flaticon-smile"
                    countTitle="Satisfied Clients"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mt-4 mt-lg-0"
                    countStart="0"
                    countEnd="15"
                    countIcon="glyph-icon flaticon-award"
                    countTitle="Years of Experience"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          {/* Testimonial Section */}
          <section className="section-ptb">
            <Container>
              <Row className="row justify-content-center">
                <Col lg={12}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="What Our Clients Say"
                    title="Testimonials About Our Lift Services"
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
                    {TestimonialList3.map((val, ind) => (
                      <SwiperSlide key={ind}>
                        <TestimonialStyle3
                          authorImg={val.authorImg}
                          authorName={val.authorName}
                          authorPosition={val.authorPosition}
                          icon={val.icon}
                          iconLeft={val.iconLeft}
                          description={val.description}
                        />
                      </SwiperSlide>
                    ))}
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
