// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import FeatureInfo from '../../component/feature-info';

function FeatureServices() {

  const ServiceItems = [
    { id: 1,
      icon: 'glyph-icon flaticon-car',
      title: 'Super Fast',
      description: 'Galley of bled it lorem Ipsum is simply dummy text of the k a to make a type book. but also the leap into electronic typesetting.',
      link: '#'
    },
    { id: 2,
      icon: 'glyph-icon flaticon-wallet',
      title: 'Affordable',
      description: 'Bled it to make a lorem Ipsum is simply dummy text of the k a galley of type book. but also the leap into electronic typesetting.',
      link: '#'
    },
    { id: 3,
      icon: 'glyph-icon flaticon-gas-station',
      title: 'Oil Changes',
      description: 'Also the leap into electronic typesetting. lorem Ipsum is simply dummy text of the k a galley of bled it to make a type book but',
      link: '#'
    },
    { id: 4,
      icon: 'glyph-icon flaticon-air-conditioning',
      title: 'Air Conditioning',
      description: 'Simply dummy text lorem Ipsum is of the k a galley of bled it to make a type book. but also the leap into electronic typesetting.',
      link: '#'
    },
    { id: 5,
      icon: 'glyph-icon flaticon-gearstick',
      title: 'Transmission',
      description: 'But also the leap into electronic typesetting. lorem Ipsum is simply dummy text of the k a galley of bled it to make a type book.',
      link: '#'
    },
    { id: 6,
      icon: 'glyph-icon flaticon-key',
      title: 'Dealership',
      description: 'Make a type book lorem Ipsum is simply dummy text of the k a galley of bled it to. but also the leap into electronic typesetting.',
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
