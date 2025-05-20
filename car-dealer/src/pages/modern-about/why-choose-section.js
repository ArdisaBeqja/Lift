// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import SectionTitle from '../../component/section-title/section-title';
import InfoBox from '../../component/infobox';
import VideoPopup from '../../component/video';

function WhyChooseSection(props) {
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="car-services">
                <SectionTitle
                    extraClass="section-title-new section-title-light"
                    title="Why Choose Our Car Services"
                    subtitle="Our Car Services"
                    content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
                />
                <InfoBox className="infobox-light mt-4"
                    infoStyle="style-2"
                    icontype="flat"
                    iconshape="round"
                    icon="glyph-icon flaticon-air-conditioning"
                    title="Brake Check & Services"
                    description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                />
                <InfoBox className="infobox-light mt-4"
                    infoStyle="style-2"
                    icontype="flat"
                    iconshape="round"
                    icon="glyph-icon flaticon-inspection"
                    title="Online Appointment"
                    description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                />
            </div>
          </Col>
          <Col lg={6} className="section-bg-image justify-content-center justify-content-lg-end d-flex">
            <div className="video-box">
              <VideoPopup
                theme="video-style-2"
                size="lg"
                videoURL="https://player.vimeo.com/video/783455878?h=46672b3b96"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default WhyChooseSection;
