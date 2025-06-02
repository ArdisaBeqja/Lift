// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components
import SectionTitle from '../../component/section-title/section-title';
import List from '../../component/list';
import Button from '../../component/button/button';

// Site Data
import aboutImg from '../../assets/images/modern-demo/reddd.avif';

function AboutSection(props) {

  const listItems = [
    { id: 1, item: 'Regularly check the battery health and software updates for your electric car.', url: '/'},
    { id: 2, item: 'Make sure the right users have secure access to important systems.', url: '/blog',},
    { id: 3, item: 'Inspect each tire to ensure even wear and proper inflation levels.', url: '/about-us',},
    { id: 4, item: 'Your brain processes information even when you’re not actively aware.', url: '/team'},
    { id: 5, item: 'Carefully monitor tire condition to prevent safety issues on the road.', url: '/404'},
  ];

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="section-col-left col-image">
              <div className="image-overlay-text">
                <img className="img-fluid" src={aboutImg} alt="" />
                <h3 className="overlay-textbox">We Create Health Programs For Everyone</h3>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="section-col-right col-content">
              <SectionTitle
                extraClass="section-title-new"
                title="We Provides Best Solution Vehicles"
                content="Driving Excellence: Your Ultimate Destination for Premium Vehicles and Services."
              />
              <List className="list-new mb-3 pb-2" icon="fas fa-check" data={listItems} />
              {/* <Button btnClass="btn-lg me-3" btnText="Our Services" btnURL="/about-us" /> */}
              <div className="call-box call-box-custom d-inline-flex align-items-center">
                <div className="icon"><i className="fas fa-phone"></i></div>
                <div className="call-box-text">
                  <div className="content">Call Anytime</div>
                  <Link to="#"><h6>+ 88 ( 9800 ) 6802</h6></Link>
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
