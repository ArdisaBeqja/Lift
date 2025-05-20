import React, { useState } from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import VehiclesType from '../component/vehicles-type';

// template
import TypeData from '../form/vehicles-type';

// Site Data
import VehiclesTypeMake, { VehiclesTypeBody } from '../data/vehicles-type';

function ElementsVehiclesType(props) {

  const [make] = useState(() => <TypeData type={VehiclesTypeMake} />);
  const [body] = useState(() => <TypeData type={VehiclesTypeBody} />);


  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Vehicles Type"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Vehicles Type', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <VehiclesType
                    className="vehicles-type-style-1"
                    title="I Want To Search"
                    tabActive="0"
                    tabsType={[
                      { id: 1, title: 'Browse Make' },
                      { id: 2, title: 'Browse Body Style' },
                    ]}
                    tabsContent={[
                      { id: 11, content: make },
                      { id: 12, content: body },
                    ]}
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-pb">
            <Container>
              <Row>
                <Col sm={12}>
                  <VehiclesType
                    className="vehicles-type-style-2"
                    title="I Want To Search"
                    tabActive="0"
                    tabsType={[
                      { id: 1, title: 'Browse Make' },
                      { id: 2, title: 'Browse Body Style' },
                    ]}
                    tabsContent={[
                      { id: 11, content: make },
                      { id: 12, content: body },
                    ]}
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsVehiclesType;
