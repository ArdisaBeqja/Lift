// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import SectionTitle from '../../component/section-title/section-title';

// Site Data
import appServices1 from '../../assets/images/modern-demo/app-services-1.webp';
import appServices2 from '../../assets/images/modern-demo/app-services-2.webp';
import appServices3 from '../../assets/images/modern-demo/app-services-3.webp';

function AppSection() {

  const AppItems = [
    { id: 1,
      image: appServices1,
      title: 'Compare Cars',
      description: 'Aliquid illo similique minima magni quidem sequi corporis fugiat type and'
    },
    { id: 2, 
      image: appServices2,
      title: 'Financial Calculator',
      description: 'Aliquid illo similique minima magni quidem sequi corporis fugiat type and'
    },
    { id: 3,
      image: appServices3,
      title: 'Car Inventory',
      description: 'Aliquid illo similique minima magni quidem sequi corporis fugiat type and'
    },
  ];

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <SectionTitle
              extraClass="section-title-new text-center mb-3"
              title="App Features That Help Manage Business Organized"
              subtitle="App Features"
            />
          </Col>
        </Row>
        <Row>
          {AppItems.map((item, index) =>
            <Col lg={4} md={6} key={index} className="mt-4">
              <div className="app-features-box bg-light">
                <div className="app-features-content">
                  <h5 className="app-features-title">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
                <div className="app-features-img">
                  <img className="img-fluid" src={item.image} alt="" />
                </div>
              </div>
            </Col>
          )}          
        </Row>
      </Container>
    </>
  );
}

export default AppSection;
