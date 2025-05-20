import React, { useState } from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import TabsPGS from '../component/tabs/tabs';

// template
import GeneralInformation from '../template/general-information';
import FeaturesOptions from '../template/features-options';
import VehicleOverview from '../template/vehicle-overview';

function ElementsTabs() {
  const [data1] = useState(GeneralInformation);
  const [data2] = useState(FeaturesOptions);
  const [data3] = useState(VehicleOverview);

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Tabs"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Tabs', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <TabsPGS
                    extraClass="justify-content-center"
                    tabActive="0"
                    tabsTitle={[
                      { id: 1, title: 'General Information' },
                      {
                        id: 2,
                        title: 'Features & Options',
                      },
                      {
                        id: 3,
                        title: 'Vehicle Overview',
                      },
                    ]}
                    tabsContent={[
                      { id: 31, content: data1 },
                      { id: 32, content: data2 },
                      { id: 33, content: data3 },
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

export default ElementsTabs;
