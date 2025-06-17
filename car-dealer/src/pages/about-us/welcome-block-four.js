// Libraritë
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Komponentët
import SectionTitle from '../../component/section-title/section-title';
import FeatureInfo from '../../component/feature-info';
import { CarSlider } from '../../component/car-list';
import { CarSliderList } from '../../data/car-list';

// Imazhet
import Value2 from './values2.avif';

function WelcomeBlockFour(props) {
  return (
    <section className="section-ptb welcome-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <SectionTitle
              extraClass="text-center mb-5"
              subtitle="Mirë se vini në"
              title="Class Ashensor"
              separator="separator"
              content="Class Ashensor është një ofrues premium i instalimit dhe mirëmbajtjes së ashensorëve. Ne jemi të specializuar në sisteme ashensorësh me cilësi të lartë për ndërtesa banimi, komerciale dhe industriale. Qoftë për një instalim të ri apo mirëmbajtje të vazhdueshme, ekipi ynë i ekspertëve siguron siguri, efikasitet dhe besueshmëri."
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
              Te Class Ashensor, prioriteti ynë është inovacioni dhe siguria. Ekipi ynë është i përkushtuar të ofrojë sisteme ashensorësh që përmirësojnë lëvizshmërinë dhe aksesueshmërinë në çdo mjedis.
            </p>
            <p>
              Me dekada përvojë, kemi fituar besimin e klientëve përmes shërbimit të besueshëm dhe mjeshtërisë profesionale. Nga dizajni deri tek mbështetja pas instalimit, ne e mbulojmë çdo nevojë të transportit vertikal.
            </p>
            <p>
              Qoftë në përmirësimin e një sistemi ekzistues apo ndërtimin nga e para, Class Ashensor garanton ekselencë në çdo projekt. Na lejoni t’ju ndihmojmë të lëvizni më zgjuar dhe më të sigurt.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className="feature-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
              <FeatureInfo
                className="feature-box-style-03"
                icon="glyph-icon flaticon-beetle"
                title="Të Gjitha Llojet e Ndërtesave"
                content="Ne ofrojmë zgjidhje ashensorësh për ndërtesa banimi, komerciale dhe industriale."
              />
              <FeatureInfo
                className="feature-box-style-03"
                icon="glyph-icon flaticon-interface-1"
                title="Mbështetje 24/7"
                content="Mbështetje teknike dhe shërbim emergjent, në çdo moment që ju nevojitet."
              />
              <FeatureInfo
                className="feature-box-style-03"
                icon="glyph-icon flaticon-key"
                title="Teknikë të Certifikuar"
                content="Ekspertët tanë të licencuar sigurojnë që çdo instalim përmbush standardet më të larta të sigurisë."
              />
              <FeatureInfo
                className="feature-box-style-03"
                icon="glyph-icon flaticon-wallet"
                title="Zgjidhje të Përballueshme"
                content="Shërbime me cilësi të lartë, të përshtatura me buxhetin dhe nevojat e projektit tuaj."
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
              subtitle="Mirë se vini te"
              title="Vlerat Tona Themelore"
              separator="separator"
              content="Te Class Ashensor, misioni ynë bazohet në integritet, inovacion dhe shërbim të jashtëzakonshëm. Synojmë të ofrojmë sisteme të sigurta, të besueshme dhe efikase, të mbështetura nga kujdes i pandërprerë për klientin."
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
                title="Zgjidhje të Personalizuara"
                content="Dizajn të përshtatur ashensorësh për çdo arkitekturë dhe përdorim."
              />
              <FeatureInfo
                className="feature-box-style-01"
                icon="glyph-icon flaticon-interface-1"
                title="Shërbim ndaj Klientit 24/7"
                content="Ekipi ynë i mbështetjes është gjithmonë i gatshëm t’ju ndihmojë."
              />
              <FeatureInfo
                className="feature-box-style-01"
                icon="glyph-icon flaticon-key"
                title="Instalues të Licencuar"
                content="Çdo ashensor instalohet nga profesionistë të çertifikuar."
              />
              <FeatureInfo
                className="feature-box-style-01"
                icon="glyph-icon flaticon-wallet"
                title="Shërbim i Përballueshëm"
                content="Ofrojmë çmime transparente dhe paketa fleksibile."
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
