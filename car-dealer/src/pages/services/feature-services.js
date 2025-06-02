// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import FeatureInfo from '../../component/feature-info';

function FeatureServices() {

  const ServiceItems = [
  {
    id: 1,
    icon: 'glyph-icon flaticon-car',
    title: 'Super Fast Delivery',
    description: 'Drive away in your new car without the wait. We offer fast, efficient service to get you on the road as quickly as possible.',
    link: '#'
  },
  {
    id: 2,
    icon: 'glyph-icon flaticon-wallet',
    title: 'Affordable Prices',
    description: 'We offer competitive pricing on all vehicles and services, making quality cars accessible for every budget.',
    link: '#'
  },
  {
    id: 3,
    icon: 'glyph-icon flaticon-gas-station',
    title: 'Oil Change Services',
    description: 'Keep your engine running smoothly with our quick and reliable oil change services—available for all vehicle types.',
    link: '#'
  },
  {
    id: 4,
    icon: 'glyph-icon flaticon-air-conditioning',
    title: 'AC Maintenance',
    description: 'Stay cool and comfortable. We provide full diagnostics and repairs for your car’s air conditioning system.',
    link: '#'
  },
  {
    id: 5,
    icon: 'glyph-icon flaticon-gearstick',
    title: 'Transmission Services',
    description: 'From inspections to repairs, our experts ensure your transmission runs smoothly and efficiently.',
    link: '#'
  },
  {
    id: 6,
    icon: 'glyph-icon flaticon-key',
    title: 'Trusted Dealership',
    description: 'As a certified dealer, we offer a wide selection of new and pre-owned vehicles with full transparency and trusted service.',
    link: '#'
  },
];


  return (
    <>
      <section className="section-ptb">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="feature-wrapper feature-wrapper-nogap grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                {ServiceItems.map((item, index) =>
                  <FeatureInfo key={index}
                    className="feature-box-style-02"
                    icon={item.icon}
                    title={item.title}
                    content={item.description}
                    link={item.link}
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default FeatureServices;
