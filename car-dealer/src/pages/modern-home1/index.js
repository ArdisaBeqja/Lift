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
          {/* Banneri Kryesor */}
          <ModernBanner1 />

          {/* Seksioni i Infobox-it */}
          <section className="section-ptb bg-gradient-grey">
            <Container>
              <Row className="row align-items-center mb-lg-4">
                <Col lg={6}>
                  <SectionTitle
                    title="Ngritje e Ekselencës"
                    extraClass="mb-0"
                  />
                </Col>
                <Col lg={6}>
                  <p className="mb-0">
                    Te Class Ashensor, sjellim teknologjinë më të avancuar dhe besueshmëri të pakrahasueshme në çdo zgjidhje transporti vertikal. Qoftë për qëllime komerciale apo banimi, ashensorët tanë janë projektuar për siguri, stil dhe performancë të qetë.
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
                      title="Zgjidhje të Larmishme"
                      description="Nga ashensorët për shtëpi te ngarkuesit industrialë, ne ofrojmë zgjidhje të përshtatura për çdo nevojë."
                    />
                    <InfoBox
                      className="mt-4"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-disc-brake"
                      title="Mbështetje 24/7"
                      description="Teknikët dhe agjentët tanë të shërbimit janë në dispozicion 24/7 për të garantuar shërbim të pandërprerë."
                    />
                    <InfoBox
                      className="mt-4"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-disc-brake"
                      title="Çmime Konkurruese"
                      description="Teknologji dhe shërbime të nivelit të lartë me çmime konkuruese në treg."
                    />
                    <InfoBox
                      className="mt-4"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-wallet"
                      title="Mirëmbajtje Parandaluese"
                      description="Kontrolle të planifikuara dhe diagnostikime në kohë reale për të mbajtur ashensorët tuaj të sigurt dhe funksional."
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Seksioni Rreth Nesh */}
          <section className="section-ptb provides-best-solution">
            <AboutSection />
          </section>

          {/* Seksioni i Videos */}
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

          {/* Seksioni i Statistikave */}
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
                    countTitle="Ashensorë të instaluar"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleFour
                    className="text-center"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="10"
                    countSuffix="+"
                    countTitle="Vite përvojë"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleFour
                    className="text-center"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="1000"
                    countSuffix="+"
                    countTitle="Klientë të kënaqur"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleFour
                    className="text-center"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="500"
                    countSuffix="+"
                    countTitle="Vlerësime të shërbimit"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          {/* Seksioni i Lajmeve të Fundit */}
          <section className="section-pb latest-news-section" style={{ marginTop: '45px' }}>
            <Container>
              <Row className="row justify-content-center">
                <Col md={8}>
                  <SectionTitle
                    extraClass="text-center section-title-new"
                    title="Lajmet dhe Artikujt Tanë të Fundit"
                    content="Qëndroni të përditësuar me tendencat më të fundit në teknologjinë e ashensorëve, standardet e sigurisë dhe risitë e Class Ashensor përmes blogut tonë."
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
