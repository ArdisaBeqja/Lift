// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import FeatureInfo from '../../component/feature-info';

function FeatureServices() {

  const ServiceItems = [
    {
      id: 1,
      icon: 'glyph-icon flaticon-lift', // Consider updating your icon set accordingly
      title: 'Fast Installation',
      description: 'We ensure timely and efficient lift installation to get your building up and running without delays.',
      link: '#'
    },
    {
      id: 2,
      icon: 'glyph-icon flaticon-price-tdag',
      title: 'Affordable Maintenance Plans',
      description: 'Our service plans are designed to keep your lifts in optimal condition—without breaking your budget.',
      link: '#'
    },
    {
      id: 3,
      icon: 'glyph-icon flaticon-wrench',
      title: 'Routine Inspections',
      description: 'We conduct regular safety checks and performance inspections to ensure compliance and reliability.',
      link: '#'
    },
    {
      id: 4,
      icon: 'glyph-icon flaticon-tools',
      title: 'Modernization Services',
      description: 'Upgrade your old lifts with modern technology to improve efficiency, safety, and aesthetics.',
      link: '#'
    },
    {
      id: 5,
      icon: 'glyph-icon flaticon-emergency',
      title: '24/7 Emergency Support',
      description: 'Our team is available around the clock to respond to any lift emergencies and restore functionality fast.',
      link: '#'
    },
    {
      id: 6,
      icon: 'glyph-icon flaticon-shield',
      title: 'Trusted Industry Experts',
      description: 'With years of experience, we are a reliable partner for safe, durable, and code-compliant lift systems.',
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
