import React, { useState } from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import VehiclesSearch from '../component/vehicles-search';

// template
import VehiclesSearchBlock from '../form/vehicles-search';

function ElementsVehiclesSearch() {
  const [data1] = useState(VehiclesSearchBlock);

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Vehicles Search"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Vehicles Search', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <VehiclesSearch
                    className="vehicles-search-style-1"
                    title="I Want To Buy"
                    tabActive="0"
                    tabsTitle={[
                      { id: 1, title: 'All vehicles' },
                      { id: 2, title: 'Certified' },
                      { id: 3, title: 'New' },
                      { id: 4, title: 'Used' },
                    ]}
                    tabsContent={[
                      { id: 11, content: data1 },
                      { id: 12, content: data1 },
                      { id: 13, content: data1 },
                      { id: 14, content: data1 },
                    ]}
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-dark">
            <Container>
              <Row>
                <Col sm={12}>
                  <VehiclesSearch
                    className="vehicles-search-style-1"
                    colorScheme="light"
                    title="I Want To Buy"
                    tabActive="0"
                    tabsTitle={[
                      { id: 1, title: 'All vehicles' },
                      { id: 2, title: 'Certified' },
                      { id: 3, title: 'New' },
                      { id: 4, title: 'Used' },
                    ]}
                    tabsContent={[
                      { id: 11, content: data1 },
                      { id: 12, content: data1 },
                      { id: 13, content: data1 },
                      { id: 14, content: data1 },
                    ]}
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-primary">
            <Container>
              <Row>
                <Col sm={12}>
                  <VehiclesSearch
                    className="vehicles-search-style-1"
                    colorScheme="light2"
                    title="I Want To Buy"
                    tabActive="0"
                    tabsTitle={[
                      { id: 1, title: 'All vehicles' },
                      { id: 2, title: 'Certified' },
                      { id: 3, title: 'New' },
                      { id: 4, title: 'Used' },
                    ]}
                    tabsContent={[
                      { id: 11, content: data1 },
                      { id: 12, content: data1 },
                      { id: 13, content: data1 },
                      { id: 14, content: data1 },
                    ]}
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <VehiclesSearch
                    className="vehicles-search-style-2"
                    title="I Want To Buy"
                    tabActive="0"
                    tabsTitle={[
                      { id: 1, title: 'All vehicles' },
                      { id: 2, title: 'Certified' },
                      { id: 3, title: 'New' },
                      { id: 4, title: 'Used' },
                    ]}
                    tabsContent={[
                      { id: 11, content: data1 },
                      { id: 12, content: data1 },
                      { id: 13, content: data1 },
                      { id: 14, content: data1 },
                    ]}
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-dark">
            <Container>
              <Row>
                <Col sm={12}>
                  <VehiclesSearch
                    className="vehicles-search-style-2"
                    colorScheme="light"
                    title="I Want To Buy"
                    tabActive="0"
                    tabsTitle={[
                      { id: 1, title: 'All vehicles' },
                      { id: 2, title: 'Certified' },
                      { id: 3, title: 'New' },
                      { id: 4, title: 'Used' },
                    ]}
                    tabsContent={[
                      { id: 11, content: data1 },
                      { id: 12, content: data1 },
                      { id: 13, content: data1 },
                      { id: 14, content: data1 },
                    ]}
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-primary">
            <Container>
              <Row>
                <Col sm={12}>
                  <VehiclesSearch
                    className="vehicles-search-style-2"
                    colorScheme="light2"
                    title="I Want To Buy"
                    tabActive="0"
                    tabsTitle={[
                      { id: 1, title: 'All vehicles' },
                      { id: 2, title: 'Certified' },
                      { id: 3, title: 'New' },
                      { id: 4, title: 'Used' },
                    ]}
                    tabsContent={[
                      { id: 11, content: data1 },
                      { id: 12, content: data1 },
                      { id: 13, content: data1 },
                      { id: 14, content: data1 },
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

export default ElementsVehiclesSearch;
