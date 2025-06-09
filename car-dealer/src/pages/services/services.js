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
  const OpeningHoursItems = [
    { id: 1, day: 'Sunday', time: ' closed' },
    { id: 2, day: 'Monday', time: ' 9:00 AM to 5:00 PM' },
    { id: 3, day: 'Tuesday', time: ' 9:00 AM to 5:00 PM' },
    { id: 4, day: 'Wednesday', time: ' 9:00 AM to 5:00 PM' },
    { id: 5, day: 'Thursday', time: ' 9:00 AM to 5:00 PM' },
    { id: 6, day: 'Friday', time: ' 9:00 AM to 5:00 PM' },
    { id: 7, day: 'Saturday', time: ' 9:00 AM to 5:00 PM' },
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
                    countEnd="300"
                    countTitle="Stock"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mb-4 mb-lg-0"
                    countStart="0"
                    countEnd="80"
                    countTitle="Reviews"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <CounterstyleThree
                    className="counterstyle-03 mb-4 mb-sm-0"
                    countStart="0"
                    countEnd="120"
                    countTitle="Happy Customer"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <CounterstyleThree
                    className="counterstyle-03"
                    countStart="0"
                    countEnd="220"
                    countIcon="glyph-icon flaticon-cup"
                    countTitle="Modernizations Completed"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <hr className="gray" />
       <section className="section-ptb">
  <Container fluid> {/* fluid to span full width */}
    <Row className="justify-content-center">
      <Col xs={12}> {/* full width on all devices */}
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
