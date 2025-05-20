// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import SectionTitle from '../../component/section-title/section-title';
import InfoBox from '../../component/infobox';
import Button from '../../component/button/button';

// Site Data
import aboutImg from '../../assets/images/modern-demo/about-info-image-2.webp';

function AboutSection() {

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img className="img-fluid" src={aboutImg} alt="" />
          </Col>
          <Col md={6} className="mt-5 mt-lg-0">
            <SectionTitle
              extraClass="section-title-new"
              title="Best Solution Provides Electric Vehicle"
              subtitle="About Electric Vehicle"
              content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
            />
            <InfoBox className="mt-4"
                infoStyle="style-2"
                icontype="default"
                icon="glyph-icon flaticon-travel"
                title="Charging Station"
                description="We build an Amazing dealership website developed especially for car sellers, dealers or auto motor retailers."
            />
            <InfoBox className="mt-4"
                infoStyle="style-2"
                icontype="default"
                icon="glyph-icon flaticon-car-repair"
                title="Auto Rent Services"
                description="We build an Amazing dealership website developed especially for car sellers, dealers or auto motor retailers."
            />
            <Button btnClass="btn-lg me-3 mt-5" btnText="Our Services" btnURL="/about-us" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutSection;
