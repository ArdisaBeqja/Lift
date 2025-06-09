// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components
import SectionTitle from '../../component/section-title/section-title';
import FeatureInfo from '../../component/feature-info';
import { CarSlider } from '../../component/car-list'; // Assuming it's a generic slider
import { CarSliderList } from '../../data/car-list'; // You might rename this to LiftSliderList

// Images
import Value2 from './values2.avif';

function WelcomeBlockFour(props) {
  return (
    <section className="section-ptb welcome-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <SectionTitle
              extraClass="text-center mb-5"
              subtitle="Welcome to"
              title="Elevate Solutions"
              separator="separator"
              content="Elevate Solutions is a premium lift installation and maintenance provider. We specialize in high-quality elevator systems for residential, commercial, and industrial buildings. Whether you're installing a new lift or maintaining an existing one, our expert team ensures safety, efficiency, and reliability."
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Swiper
              modules={[Navigation, A11y]}
              navigation
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
            >
              {CarSliderList.map((val, index) => {
                if (index < 3) {
                  return (
                    <SwiperSlide key={index}>
                      <CarSlider key={index} imgSrc={val.imgSrc} id={val.id} />
                    </SwiperSlide>
                  );
                }
                return null;
              })}
            </Swiper>
          </Col>
          <Col md={6}>
            <p>
              At Elevate Solutions, we prioritize innovation and safety. Our team is dedicated to delivering lift systems that enhance mobility and accessibility across all environments.
            </p>
            <p>
              With decades of experience, we’ve earned the trust of clients through reliable service and expert craftsmanship. From design to aftercare, we support your vertical transportation needs.
            </p>
            <p>
              Whether you're upgrading a current system or building new, Elevate Solutions delivers excellence in every project. Let us help you move smarter and safer.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className="feature-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
              <FeatureInfo
                className="feature-box-style-03"
                icon="glyph-icon flaticon-beetle"
                title="All Building Types"
                content="We provide lift solutions for residential, commercial, and industrial buildings."
              />
              <FeatureInfo
                className="feature-box-style-03"
                icon="glyph-icon flaticon-interface-1"
                title="24/7 Support"
                content="Reliable technical support and emergency service, available whenever you need it."
              />
              <FeatureInfo
                className="feature-box-style-03"
                icon="glyph-icon flaticon-key"
                title="Certified Technicians"
                content="Our licensed experts ensure installations meet the highest safety standards."
              />
              <FeatureInfo
                className="feature-box-style-03"
                icon="glyph-icon flaticon-wallet"
                title="Cost-Effective"
                content="Top-quality service tailored to your budget and project scope."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function AboutWelcomeBlock(props) {
  return (
    <section className="section-ptb welcome-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <SectionTitle
              extraClass="text-center"
              subtitle="Welcome to"
              title="Our Core Values"
              separator="separator"
              content="At Elevate Solutions, our mission is grounded in integrity, innovation, and exceptional service. We aim to provide safe, reliable, and efficient lift systems backed by unwavering customer support."
            />
          </Col>
        </Row>
        <Row className="mb-4 mb-md-5">
          <Col md={12}>
            <Swiper
              modules={[Navigation, A11y]}
              navigation
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
            >
              {CarSliderList.map((val, index) => {
                if (index > 2) {
                  return (
                    <SwiperSlide key={index}>
                      <CarSlider key={index} imgSrc={val.imgSrc} id={val.id} />
                    </SwiperSlide>
                  );
                }
                return null;
              })}
            </Swiper>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className="feature-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
              <FeatureInfo
                className="feature-box-style-01"
                icon="glyph-icon flaticon-beetle"
                title="Custom Solutions"
                content="Tailored lift designs for every architecture and use case."
              />
              <FeatureInfo
                className="feature-box-style-01"
                icon="glyph-icon flaticon-interface-1"
                title="24/7 Customer Care"
                content="Our dedicated support team is always ready to assist you."
              />
              <FeatureInfo
                className="feature-box-style-01"
                icon="glyph-icon flaticon-key"
                title="Licensed Installers"
                content="Every lift is installed by fully certified professionals."
              />
              <FeatureInfo
                className="feature-box-style-01"
                icon="glyph-icon flaticon-wallet"
                title="Affordable Service"
                content="We offer transparent pricing and flexible packages."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WelcomeBlockFour;
export { AboutWelcomeBlock };
