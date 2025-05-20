import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../component/section-title/section-title';
import TestimonialStyle1, {
  TestimonialStyle2,
  TestimonialStyle3,
} from '../component/testimonial/testimonial-item';

// Site Data
import TestimonialList, {
  TestimonialList2,
  TestimonialList3,
} from '../data/testimonial-list';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function ElementsTestimonial(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Testimonial"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Testimonial', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5 text-center"
                    title="Testimonial : Style 1"
                  />
                  <Swiper
                    modules={[A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
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

          <section className="section-ptb bg-light testimonial-02">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5 text-center"
                    title="Testimonial : Style 2"
                  />
                  <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                  >
                    {TestimonialList2.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          {' '}
                          <TestimonialStyle2
                            key={ind}
                            authorImg={val.authorImg}
                            authorName={val.authorName}
                            authorPosition={val.authorPosition}
                            icon={val.icon}
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

          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5 text-center"
                    title="Testimonial : Style 3"
                  />
                  <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
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

export default ElementsTestimonial;
