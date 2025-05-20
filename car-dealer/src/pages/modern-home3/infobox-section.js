// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import SectionTitle from '../../component/section-title/section-title';
import InfoBox from '../../component/infobox';

// Site Data
import CarImage from '../../assets/images/modern-demo/car-top.webp';

function InfoBoxSection() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <SectionTitle
                extraClass="section-title-new text-center"
                title="Our Work Process"
                content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={4} sm={6} className="pe-lg-5 mb-5 mb-sm-0">
            <div className="car-services">
                <InfoBox className="mt-4"
                    icontype="default"
                    icon="glyph-icon flaticon-air-conditioning"
                    title="Personal Attention"
                    description="The printin leap v lorem Ipsum is simply dummy k a galley of."
                />
                <InfoBox className="mt-4"
                    icontype="default"
                    icon="glyph-icon flaticon-battery"
                    title="Receive Up Front Quote"
                    description="The printin leap v lorem Ipsum is simply dummy k a galley of."
                />
                <InfoBox className="mt-4"
                    icontype="default"
                    icon="glyph-icon flaticon-car-wash"
                    title="Online Appointment"
                    description="The printin leap v lorem Ipsum is simply dummy k a galley of."
                />
            </div>
          </Col>
          <Col lg={4} className="text-center d-none d-lg-block">
              <img className="img-fluid banner-car" src={CarImage} alt="Car" />
          </Col>
          <Col lg={4} sm={6} className="ps-lg-5">
            <div className="car-services">
                <InfoBox className="mt-4"
                    icontype="default"
                    icon="glyph-icon flaticon-gas-station"
                    title="Share Requirement"
                    description="The printin leap v lorem Ipsum is simply dummy k a galley of."
                />
                <InfoBox className="mt-4"
                    icontype="default"
                    icon="glyph-icon flaticon-car-wash"
                    title="Pay Post Service"
                    description="The printin leap v lorem Ipsum is simply dummy k a galley of."
                />
                <InfoBox className="mt-4"
                    icontype="default"
                    icon="glyph-icon flaticon-alloy-wheel"
                    title="Schedule Appointment"
                    description="The printin leap v lorem Ipsum is simply dummy k a galley of."
                />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default InfoBoxSection;
