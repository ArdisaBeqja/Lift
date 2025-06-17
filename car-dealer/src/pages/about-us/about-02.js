import React from 'react';

// Libraritë
import { Col, Container, Row } from 'react-bootstrap';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Komponentët
import SectionTitle from '../../component/section-title/section-title';
import { CounterstyleThree } from '../../component/counter/counter';
import { TestimonialStyle3 } from '../../component/testimonial/testimonial-item';

// Seksioni i faqes
import { AboutWelcomeBlock } from './welcome-block-four';

// Importimi i stilit për Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ✅ Dëshmitë e klientëve – Tematika për ashensorë
const TestimonialList3 = [
  {
    authorImg: 'client1.jpg',
    authorName: 'Sarah Mendez',
    authorPosition: 'Menaxhere e Pronës, Oakridge Towers',
    icon: 'glyph-icon flaticon-quote',
    iconLeft: true,
    description:
      'Class Ashensor instaloi ashensorin tonë të ri për banesë përpara afatit dhe me saktësi të jashtëzakonshme. Ekipi ishte profesional dhe shërbimi i shkëlqyer.',
  },
  {
    authorImg: 'client2.jpg',
    authorName: 'Mark Thompson',
    authorPosition: 'Drejtor i Infrastrukturës, Westview Mall',
    icon: 'glyph-icon flaticon-quote',
    iconLeft: true,
    description:
      'Ekipi i mirëmbajtjes është jashtëzakonisht i përgjegjshëm dhe siguron funksionim të vazhdueshëm të ashensorëve tanë. Kohët e ndërprerjes janë ulur ndjeshëm.',
  },
  {
    authorImg: 'client3.jpg',
    authorName: 'Rina Patel',
    authorPosition: 'Arkitekte, Nova Builds',
    icon: 'glyph-icon flaticon-quote',
    iconLeft: true,
    description:
      'Bashkëpunimi me Class Ashensor gjatë projektit tonë komercial ishte i lehtë dhe efikas. Ekspertiza teknike dhe këshillat e personalizuara ishin thelbësore për suksesin tonë.',
  },
];

function AboutUsTwo() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Rreth Nesh"
          breadCrumbItems={[
            { label: 'Kreu', path: '/' },
            { label: 'Faqe', path: '#' },
            { label: 'Rreth Nesh', path: '#', active: true },
          ]}
        />

        <div className="content-wrapper">
          {/* Seksioni për mirëseardhje */}
          <AboutWelcomeBlock />

          <hr className="gray" />

          {/* Seksioni i numëruesve */}
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
                    countTitle="Ashensorë të Instaluar"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mt-4 mt-lg-0"
                    countStart="0"
                    countEnd="780"
                    countIcon="glyph-icon flaticon-customer-service"
                    countTitle="Kërkesa për Shërbim të Trajtuara"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mt-4 mt-lg-0"
                    countStart="0"
                    countEnd="250"
                    countIcon="glyph-icon flaticon-smile"
                    countTitle="Klientë të Kënaqur"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mt-4 mt-lg-0"
                    countStart="0"
                    countEnd="15"
                    countIcon="glyph-icon flaticon-award"
                    countTitle="Vite Eksperience"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          {/* Seksioni i dëshmive të klientëve */}
          <section className="section-ptb">
            <Container>
              <Row className="row justify-content-center">
                <Col lg={12}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="Çfarë Thonë Klientët Tanë"
                    title="Dëshmitë për Shërbimet e Ashensorëve"
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
