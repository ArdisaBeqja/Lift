// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import SectionTitle from '../../component/section-title/section-title';
import InfoBox from '../../component/infobox';

function InfoboxSection() {

  const ServiceItems = [
    { id: 1,
      icon: 'glyph-icon flaticon-battery',
      title: 'EV Batteries',
      description: 'Aliquid illo similique minima magni quidem sequi corporis fugiat type and',
      url: "/"
    },
    { id: 2, 
      icon: 'glyph-icon flaticon-air-conditioning', 
      title: 'Air Conditioning',
      description: 'Aliquid illo similique minima magni quidem sequi corporis fugiat type and',
      url: "/"
    },
    { id: 3,
      icon: 'glyph-icon flaticon-steering-wheel',
      title: 'Power Steering',
      description: 'Aliquid illo similique minima magni quidem sequi corporis fugiat type and',
      url: "/"
    },
    { id: 4, 
      icon: 'glyph-icon flaticon-piston',
      title: 'Engine Management',
      description: 'Aliquid illo similique minima magni quidem sequi corporis fugiat type and',
      url: "/"
    },
    { id: 5, 
      icon: 'glyph-icon flaticon-gas-station', 
      title: 'Charging Station',
      description: 'Aliquid illo similique minima magni quidem sequi corporis fugiat type and',
      url: "/"
    },
    { id: 6, 
      icon: 'glyph-icon flaticon-electrical-service',
      title: 'EV Fast Charging',
      description: 'Aliquid illo similique minima magni quidem sequi corporis fugiat type and',
      url: "/"
    },
  ];

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <SectionTitle
              extraClass="section-title-new text-center"
              title="We Provide Best Vehicles Solution & Awesome Services"
              subtitle="App Features"
            />
          </Col>
        </Row>
        <Row>
          {ServiceItems.map((item, index) =>
            <Col lg={4} md={6} sm={6} key={index} className="mt-4">
              <InfoBox key={item.id} className="infobox-shadow border-radius-10"
                infoStyle="style-1"
                icontype="default"
                icon={item.icon}
                title={item.title}
                description={item.description}
                linkurl={item.url}
              />
            </Col>
          )}          
        </Row>
      </Container>
    </>
  );
}
export default InfoboxSection;
