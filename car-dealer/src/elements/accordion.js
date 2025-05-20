import React, { useState } from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import AccordionPGS from '../component/accordion';

// Site Data
import { FeaturesOptionsfaqData } from '../data/accordion-list';
import GeneralInformationfaqData from '../data/accordion-list';

function ElementsAccordion() {
  const [data1, setData1] = useState();

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Accordion"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Accordion', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12} className="mb-5">
                  <h3 className="mb-5">General Information Data</h3>
                  <AccordionPGS
                    defaultActive="1"
                    accordionData={GeneralInformationfaqData}
                  />
                </Col>
                <Col sm={12}>
                  <h3 className="mb-5">Features Options Data</h3>
                  <AccordionPGS accordionData={FeaturesOptionsfaqData} />
                </Col>
                <Col sm={12} className="mt-5 pt-5">
                  <AccordionPGS
                    defaultActive="1"
                    accordionItems={[
                      {
                        id: 1,
                        title: 'Accordion Title 01',
                        content: 'Accordion Content 01',
                      },
                      { id: 2, title: 'Accordion Title 02', content: data1 },
                      {
                        id: 3,
                        title: 'Accordion Title 03',
                        content: 'Accordion Content 03',
                      },
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

export default ElementsAccordion;
