// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components
import SectionTitle from '../../component/section-title/section-title';
import List from '../../component/list';
import Button from '../../component/button/button';

// Site Data
import aboutImg from './lift.avif';

function AboutSection(props) {

  const listItems = [
    { id: 1, item: 'Regularly inspect elevator cables and safety brakes for optimal performance.', url: '/' },
    { id: 2, item: 'Ensure authorized personnel have secure access to elevator control systems.', url: '/blog' },
    { id: 3, item: 'Schedule routine maintenance to prevent unexpected downtime.', url: '/about-us' },
    { id: 4, item: 'Keep elevator software updated to comply with safety standards.', url: '/team' },
    { id: 5, item: 'Monitor elevator load limits to guarantee passenger safety.', url: '/404' },
  ];

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="section-col-left col-image">
              <div className="image-overlay-text">
                <img className="img-fluid" src={aboutImg} alt="Modern elevator" />
                <h3 className="overlay-textbox">Innovative Lift Solutions for Every Building</h3>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="section-col-right col-content">
              <SectionTitle
                extraClass="section-title-new"
                title="We Provide Advanced Elevator Solutions"
                content="Elevating Safety and Efficiency: Your Trusted Partner for Modern Lift Systems."
              />
              <List className="list-new mb-3 pb-2" icon="fas fa-check" data={listItems} />
              {/* <Button btnClass="btn-lg me-3" btnText="Our Services" btnURL="/about-us" /> */}
              <div className="call-box call-box-custom d-inline-flex align-items-center">
                <div className="call-box-text">
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
