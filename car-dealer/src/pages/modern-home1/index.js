import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components
import SectionTitle from '../../component/section-title/section-title';
import InfoBox from '../../component/infobox';
import { PostStyle3 } from '../../component/blog';
import { CounterstyleFour } from '../../component/counter/counter';

// Site Data
import BlogList from '../../data/blog-list';

// Assets
import videoImage from './ui.avif';
import appBG from '../../assets/images/modern-demo/section-bg-map.webp';

// Page Section
import ModernBanner1 from '../../banner/modern-banner-1';
import AboutSection from './about-section';
import VideoCounter from './video-counter';

// SCSS
import './home.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ModernHome1() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          {/* Main Banner */}
          <ModernBanner1 />

          {/* Infobox section */}
          <section className="section-ptb bg-gradient-grey">
            <Container>
              <Row className="row align-items-center mb-lg-4">
                <Col lg={6}>
                  <SectionTitle
                    title="Elevating Excellence, One Floor at a Time"
                    extraClass="mb-0"
                  />
                </Col>
                <Col lg={6}>
                  <p className="mb-0">
                    At Class Ashensor, we bring cutting-edge technology and unmatched reliability to every vertical transportation solution. Whether it's commercial or residential, our lifts are designed for safety, style, and smooth performance.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
                    <InfoBox
                      className="mt-4"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-travel"
                      title="Diverse Solutions"
                      description="From home elevators to industrial freight lifts, we offer tailored solutions for every requirement."
                    />
                    <InfoBox
                      className="mt-4"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-disc-brake"

                      title="24/7 Support"
                      description="Our technicians and service agents are available around the clock to ensure uninterrupted service."
                    />
                    <InfoBox
                      className="mt-4"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-disc-brake"
                      title="Competitive Pricing"
                      description="Top-tier technology and services at market-leading rates."
                    />
                    <InfoBox
                      className="mt-4"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-wallet"
                      title="Preventive Maintenance"
                      description="Scheduled checkups and real-time diagnostics to keep your lifts running safely and efficiently."
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* About Section */}
          <section className="section-ptb provides-best-solution">
            <AboutSection />
          </section>

          {/* Video Section */}
          <section
            className="section-ptb video-section"
            style={{
              backgroundImage: `url(${videoImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <VideoCounter />
          </section>

          {/* Counter Section */}
          <section className="">
            <Container>
              <Row className="bg-danger new-counter-box mx-0">
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleFour
                    className="text-center"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="1500"
                    countSuffix="+"
                    countTitle="Lifts Installed"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleFour
                    className="text-center"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="10"
                    countSuffix="+"
                    countTitle="Years in Business"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleFour
                    className="text-center"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="1000"
                    countSuffix="+"
                    countTitle="Happy Clientsz"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleFour
                    className="text-center"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="500"
                    countSuffix="+"
                    countTitle="Service Reviews"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          {/* Latest News Section */}
          <section className="section-pb latest-news-section" style={{ marginTop: '45px' }}>
            <Container>
              <Row className="row justify-content-center">
                <Col md={8}>
                  <SectionTitle
                    extraClass="text-center section-title-new"
                    title="Our Recent News & Articles"
                    content="Stay updated with the latest trends in elevator technology, safety standards, and LiftCo innovations through our blog."
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
                      0: { slidesPerView: 1 },
                      400: { slidesPerView: 1 },
                      570: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      992: { slidesPerView: 2 },
                      1199: { slidesPerView: 3 },
                    }}
                  >
                    {BlogList.map((val, ind) => (
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

export default ModernHome1;
