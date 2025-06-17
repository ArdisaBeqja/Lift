import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import { CounterstyleThree } from '../../component/counter/counter';
import SectionTitle from '../../component/section-title/section-title';
import OpeningHours from '../../component/openinghours';
import InspectionCalendar from './calendar';
// Page Section
import OurServices from '../../template/our-services';
import ServiceForm from '../../form/service-form';
import FeatureServices from './feature-services';
import EnquiryForm from '../../form/enquiry-form';

function Service() {
  const OrariHapjes = [
    { id: 1, day: 'E Diel', time: ' mbyllur' },
    { id: 2, day: 'E Hënë', time: ' 9:00 - 17:00' },
    { id: 3, day: 'E Martë', time: ' 9:00 - 17:00' },
    { id: 4, day: 'E Mërkurë', time: ' 9:00 - 17:00' },
    { id: 5, day: 'E Enjte', time: ' 9:00 - 17:00' },
    { id: 6, day: 'E Premte', time: ' 9:00 - 17:00' },
    { id: 7, day: 'E Shtunë', time: ' 9:00 - 17:00' },
  ];
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Shërbimi"
          breadCrumbItems={[
            { label: 'Kreu', path: '/' },
            { label: 'Faqet', path: '#' },
            { label: 'Shërbimi', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <FeatureServices />
          <section className="section-ptb bg-1">
            <div className="section-overlay bg-black" data-overlay-opacity="0.7"></div>
            <Container>
              <Row>
                <Col lg={3} sm={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mb-4 mb-lg-0"
                    countStart="0"
                    countEnd="300"
                    countTitle="Stoku"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mb-4 mb-lg-0"
                    countStart="0"
                    countEnd="80"
                    countTitle="Vlerësime"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mb-4 mb-sm-0"
                    countStart="0"
                    countEnd="120"
                    countTitle="Klientë të Kënaqur"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <CounterstyleThree
                    className="counterstyle-03"
                    countStart="0"
                    countEnd="220"
                    countIcon="glyph-icon flaticon-cup"
                    countTitle="Modernizime të Përfunduara"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <hr className="gray" />
          <section className="section-ptb">
            <Container fluid>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="d-flex justify-content-center">
                    <InspectionCalendar />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default Service;
