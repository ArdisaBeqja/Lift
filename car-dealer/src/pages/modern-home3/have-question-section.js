// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import InfoBox from '../../component/infobox';

// Form
import RequirementsForm from '../../form/requirements-form';

function HaveQuestionSection() {
  return (
    <>
      <Container>
        <Row className="justify-content-start">
            <Col lg={7}>
                <InfoBox
                    infoStyle="style-2"
                    icontype="flat"
                    iconshape="round"
                    icon="fas fa-phone"
                    title="Have Any Question? Find Your Solution"
                    description="Call : 666 888 00000"
                />
            </Col>
            <Col lg={5}>
                <div className="requirements-form">
                    <h5 className="mb-3">Fulfill Your Requirements</h5>
                    <RequirementsForm />
                </div>
            </Col>
        </Row>
      </Container>
    </>
  );
}
export default HaveQuestionSection;
