import React, { useState } from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../../component/section-title/section-title';
import TabsPGS from '../../component/tabs/tabs';

// Page Section
import GeneralInformation from '../../template/general-information';
import FeaturesOptions from '../../template/features-options';
import VehicleOverview from '../../template/vehicle-overview';

function Faq() {
  const [data1] = useState(GeneralInformation);
  const [data2] = useState(FeaturesOptions);
  const [data3] = useState(VehicleOverview);
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Faq"
          description=""
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Faq', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col lg={12}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="Have a question? Please check our knowledgebase first."
                    title="Frequently Asked Questions "
                    separator="separator"
                  />
                </Col>
                <Col lg={12}>
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
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default Faq;
