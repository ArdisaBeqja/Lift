// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import SectionTitle from '../../component/section-title/section-title';

// Site Data

function SolutionServicesSection() {
  return (
    <>
      <Container>
        <Row className="justify-content-start">
          <Col md={7}>
            <SectionTitle
                extraClass="section-title-new section-title-light mb-0"
                title="We Provide Best Vehicles Solution & Services"
                content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites. The Theme has been Created especially for automotive dealers, car resellers, car service stations, mechanic workshop and auto motor retailers."
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SolutionServicesSection;
