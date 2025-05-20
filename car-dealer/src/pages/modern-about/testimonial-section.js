import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components
import SectionTitle from '../../component/section-title/section-title';
import TestimonialStyle1 from '../../component/testimonial/testimonial-item';

// Site Data
import TestimonialList from '../../data/testimonial-list';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function TestimonialSection() {

  return (
    <>
        <Container>
            <Row>
                <Col lg={12}>
                    <SectionTitle
                    extraClass="section-title-new text-center"
                    subtitle="Our Testimonial"
                    title="What Our Clients Say About"
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    navigation
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
    </>
  );
}
export default TestimonialSection;
