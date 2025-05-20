// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import SectionTitle from '../../component/section-title/section-title';
import List from '../../component/list';
import Button from '../../component/button/button';

// Site Data
import aboutImg from '../../assets/images/modern-demo/about-info-image-2.webp';
import aliceImg from '../../assets/images/team/team-02.webp'

function AboutSection(props) {

  const listItems1 = [
    { id: 1, item: 'Online Appointment', url: '/'},
  ];
  const listItems2 = [
    { id: 1, item: 'Auto Rent Services', url: '/',},
  ];

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="section-col-left col-image">
              <div className="image-overlay-text">
                <img className="img-fluid" src={aboutImg} alt="" />
                <h3 className="overlay-textbox bg-dark">We Create Health Programs For Everyone</h3>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="section-col-right col-content">
              <SectionTitle
                extraClass="section-title-new"
                title="Best Solution Provides Electric Vehicle"
                content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
              />

              <Row className="mb-4">
                <Col md={6} className="mb-2">
                  <List className="list-new-2" icon="fas fa-check-circle" data={listItems1} />
                </Col>
                <Col md={6} className="mb-2">
                  <List className="list-new-2" icon="fas fa-check-circle" data={listItems2} />
                </Col>
              </Row>

              <p>We provide everything you need to build an Amazing dealership website developed especially for car sellers, dealers or auto motor retailers.</p>
              <Button btnClass="btn-lg me-3" btnText="Our Services" btnURL="/about-us" />
              <div className="image-box call-box-custom d-inline-flex align-items-center">
                <div className="image"><img className="img-fluid" src={aliceImg} alt="" /></div>
                <div className="image-text">
                  <h6 className="image-title">Aleesha Brown</h6>
                  <div className="content">CEO & CO Founder</div>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutSection;
