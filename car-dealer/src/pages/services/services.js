import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import { CounterstyleThree } from '../../component/counter/counter';
import SectionTitle from '../../component/section-title/section-title';
import OpeningHours from '../../component/openinghours';

// Page Section
import OurServices from '../../template/our-services';
import ServiceForm from '../../form/service-form';
import FeatureServices from './feature-services';

function Service() {
  const OpeningHoursItems = [
    { id: 1, day: 'Sunday', time: ' closed' },
    { id: 2, day: 'Monday', time: ' 9:00 AM to 9:00 PM' },
    { id: 3, day: 'Tuesday', time: ' 9:00 AM to 9:00 PM' },
    { id: 4, day: 'Wednesday', time: ' 9:00 AM to 9:00 PM' },
    { id: 5, day: 'Thursday', time: ' 9:00 AM to 9:00 PM' },
    { id: 6, day: 'Friday', time: ' 9:00 AM to 9:00 PM' },
    { id: 7, day: 'Saturday', time: ' 9:00 AM to 9:00 PM' },
  ];
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Service"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Service', path: '#', active: true },
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
                    countEnd="561"
                    countIcon="glyph-icon flaticon-beetle"
                    countTitle="Vehicles in Stock"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mb-4 mb-lg-0"
                    countStart="0"
                    countEnd="856"
                    countIcon="glyph-icon flaticon-interface"
                    countTitle="Dealer Reviews"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mb-4 mb-sm-0"
                    countStart="0"
                    countEnd="120"
                    countIcon="glyph-icon flaticon-circle"
                    countTitle="Happy Customer"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <CounterstyleThree
                    className="counterstyle-03"
                    countStart="0"
                    countEnd="520"
                    countIcon="glyph-icon flaticon-cup"
                    countTitle="Awards"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <OurServices />
          <hr className="gray" />
          <section className="section-ptb">
            <Container>
              <Row>
                <Col md={12}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="This is what we do and we do it perfectly"
                    title="Service Schedule"
                    separator="separator"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={8} md={7}>
                  <ServiceForm />
                </Col>
                <Col lg={4} md={5}>
                  <div className="opening-hours bg-light mt-4 mt-md-0">
                    <h6 className="title">opening hours</h6>
                    <OpeningHours data={OpeningHoursItems} />
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
