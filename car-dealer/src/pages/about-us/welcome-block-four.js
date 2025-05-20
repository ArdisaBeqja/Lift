// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components
import SectionTitle from '../../component/section-title/section-title';
import FeatureInfo from '../../component/feature-info';
import { CarSlider } from '../../component/car-list';

// Site Data
import { CarSliderList } from '../../data/car-list';

function WelcomeBlockFour(props) {
  return (
    <>
      <section className="section-ptb welcome-4">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <SectionTitle
                extraClass="text-center mb-5"
                subtitle="Welcome to"
                title="The Cardealer Online"
                separator="separator"
                content="Car Dealer is the best premium HTML5 Template. We provide everything you need to build an Amazing dealership website developed especially for car sellers, dealers or auto motor retailers. You can use this template for creating website based on any framework language."
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
                        <CarSlider
                          key={index}
                          imgSrc={val.imgSrc}
                          id={val.id}
                        />
                      </SwiperSlide>
                    );
                  }
                  return null;
                })}
              </Swiper>
            </Col>
            <Col md={6}>
              <p>
                Dealer obcaecati adipisci vero lorem ipsum dolor sit amet,
                consectetur adipisicing elit. dolorum pariatur aut consectetur.
                Sit quisquam rerum corporis neque atque inventore nulla,
                quibusdam, ipsa suscipit aperiam reiciendis, ea odio?
              </p>
              <p>
                Adipisicing ipsum dolor sit amet, consectetur elit. Obcaecati
                adipisci vero dolorum pariatur aut consectetur. Sit quisquam
                rerum corporis neque atque inventore nulla, quibusdam, ipsa
                suscipit aperiam reiciendis, ea odio?
              </p>
              <p>
                Obcaecati adipisci vero dolorum pariatur aut consectetur. lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Sit quisquam
                rerum corporis neque atque inventore nulla, quibusdam, ipsa
                suscipit aperiam reiciendis, ea odio?
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className="feature-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
                <FeatureInfo
                  className="feature-box-style-03"
                  icon="glyph-icon flaticon-beetle"
                  title="All brands"
                  content="Obcaecati adipisci vero dolorum pariatur "
                />
                <FeatureInfo
                  className="feature-box-style-03"
                  icon="glyph-icon flaticon-interface-1"
                  title="Free Support"
                  content="lorem ipsum dolor sit amet, consectetur"
                />
                <FeatureInfo
                  className="feature-box-style-03"
                  icon="glyph-icon flaticon-key"
                  title="Dealership"
                  content="Sit quisquam rerum corporis neque"
                />
                <FeatureInfo
                  className="feature-box-style-03"
                  icon="glyph-icon flaticon-wallet"
                  title="affordable"
                  content="Suscipit aperiam reiciendis, ea odio?"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
function AboutWelcomeBlock(props) {
  return (
    <>
      <section className="section-ptb welcome-4">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <SectionTitle
                extraClass="text-center"
                subtitle="Welcome to"
                title="The Cardealer Online"
                separator="separator"
                content="Car Dealer is the best premium HTML5 Template. We provide everything you need to build an Amazing dealership website developed especially for car sellers, dealers or auto motor retailers. You can use this template for creating website based on any framework language."
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
                        <CarSlider
                          key={index}
                          imgSrc={val.imgSrc}
                          id={val.id}
                        />
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
                  title="All brands"
                  content="Printin k a galley of type lorem Ipsum is simply dummy text of the and"
                />
                <FeatureInfo
                  className="feature-box-style-01"
                  icon="glyph-icon flaticon-interface-1"
                  title="Free Support"
                  content="Simply dummy text of the printin k a galley of type and lorem Ipsum is"
                />
                <FeatureInfo
                  className="feature-box-style-01"
                  icon="glyph-icon flaticon-key"
                  title="Dealership"
                  content="Text of the printin lorem Ipsum is simply dummy k a galley of type and"
                />
                <FeatureInfo
                  className="feature-box-style-01"
                  icon="glyph-icon flaticon-wallet"
                  title="affordable"
                  content="The printin Lorem Ipsum is simply dummy text of k a galley of type and"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default WelcomeBlockFour;
export { AboutWelcomeBlock };
