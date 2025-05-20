import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components
import SectionTitle from '../../component/section-title/section-title';
import { PostStyle3 } from '../../component/blog';
import { VehicleShowcase3 } from '../../component/car-list';
import Button from '../../component/button/button';
import {CounterstyleThree} from '../../component/counter/counter';

// Site Data
import BlogList from '../../data/blog-list';
// ****************import CarList from '../../data/car-list';
import useCarList from '../../data/fetchData/carList1';

import filterBG from '../../assets/images/modern-demo/section-bg-pattern-2.webp';
import sectionBG1 from '../../assets/images/modern-demo/video-bg-image.webp';

// Page Section
import Banner from './banner';
import VehiclesSearchSection from './vehicles-search-section';
import ClientLogoSection from './client-logo';
import InfoBoxSection from './infobox-section';
import SolutionServicesSection from './solution-services-section';
import HaveQuestionSection from './have-question-section';

// SCSS
import './home.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ModernHome3() {
  const CarList = useCarList();  // Fetch data once when the component loads
  
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          
          {/* Main Banner */}
          <Banner />

          {/* Filter Section */}
          <section className="section-sm-ptb bg-gradient-grey">
              <div className="section-overlay" data-overlay-opacity="0.2" style={{backgroundImage: `url(${filterBG})`}}></div>
              <VehiclesSearchSection />
          </section>
          
          {/* Feature Car section*/}
          <section className="feature-car section-ptb">
            <Container>
              <Row className="row align-items-center mb-lg-4">
                <Col lg={7}>
                  <SectionTitle
                    extraClass="section-title-new mb-0"
                    title="Our Featured Cars"
                    content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
                  />
                </Col>
                <Col lg={5} className="text-lg-end mt-4 mt-lg-0">
                  <Button btnClass="btn-lg me-3" btnText="All Feature Car" btnURL="/car-grid" />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
                    {CarList.map((val, index) => {
                        return (
                          <VehicleShowcase3
                            className="car-item-grid"
                            key={index}
                            imgSrc={val.imgSrc}
                            carName={val.carName}
                            carPrice={val.carPrice}
                            carNewPrice={val.carNewPrice}
                            id={val.id}
                            attri={val.attributes}
                            lightboxImages={val.gallery}
                          />
                        );
                      })}
                    </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Counter section*/}
          <section className="counter-section my-0 my-sm-4">
            <Container>
              <Row className="bg-primary new-counter-box mx-0">
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mb-4"
                    countStart="0"
                    countEnd="10"
                    countSuffix="k"
                    countIcon="glyph-icon flaticon-beetle"
                    countTitle="Vehicles Stock"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mb-4"
                    countStart="0"
                    countEnd="25"
                    countSuffix="+"
                    countIcon="glyph-icon flaticon-interface"
                    countTitle="Years Experience"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mb-4"
                    countStart="0"
                    countEnd="100"
                    countSuffix="+"
                    countIcon="glyph-icon flaticon-circle"
                    countTitle="Satisfied Clients"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mb-4"
                    countStart="0"
                    countEnd="100"
                    countSuffix="+"
                    countIcon="glyph-icon flaticon-cup"
                    countTitle="Dealer Review"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          {/* 6 Infobox section*/}
          <section className="section-ptb infobox6-section">
            <InfoBoxSection />
          </section>

          {/* Client Logo Section */}
          <section className="section-pb">
            <ClientLogoSection />
          </section>

          {/* Solution & Services section */}
          <section className="section-ptb solution-services-section" style={{backgroundImage: `url(${sectionBG1})`}}>
            <div className="section-overlay bg-black" data-overlay-opacity="0.8"></div>
            <SolutionServicesSection />
          </section>

          {/* Have any Questions section */}
          <section className="have-question-section">
            <HaveQuestionSection />
          </section>
          
          {/* Latest News Section */}
          <section className="section-ptb latest-news-section">
            <Container>
              <Row className="row justify-content-center">
                <Col md={8}>
                  <SectionTitle
                    extraClass="text-center section-title-new"
                    title="Our Recent News & Articles"
                    content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Swiper
                    modules={[Navigation, A11y]}
                    navigation
                    spaceBetween={30}
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
                        slidesPerView: 2,
                      },
                      1199: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {BlogList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <PostStyle3
                            key={ind}
                            id={val.id}
                            imgSrc={val.imgSrc}
                            metaDate={val.metaDate}
                            category={val.category}
                            title={val.title}
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

export default ModernHome3;
