import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../../component/section-title/section-title';
import FeatureInfo from '../../component/feature-info';
import OpeningHours from '../../component/openinghours';
import Googlemap from '../../component/googlemap/googlemap';
import EnquiryForm from '../../form/enquiry-form';

// Form
import ContactForm from '../../form/contact-form';

function ContactUs() {
  const OpeningHoursItems = [
    { id: 1, day: 'Sunday', time: ' Closed' },
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
          title="Contact us"
          description=""
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Contact us', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col lg={12}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="We’d Love to Hear From You"
                    title="Let's Get in Touch!"
                    separator="separator"
                  />
                </Col>
                <Col sm={12}>
                  <div
                    className="feature-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '20px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <FeatureInfo
                      className="feature-box-hover contact-box text-center"
                      icon="fa-solid fa-location-dot"
                      title="Address"
                      content="Rruga Dritan Hoxha, Tirana, Albania"
                    />
                    <FeatureInfo
                      className="feature-box-hover contact-box text-center"
                      icon="fa-solid fa-phone"
                      title="Phone"
                      content="+355 68 202 7948"
                    />
                    <FeatureInfo
                      className="feature-box-hover contact-box text-center"
                      icon="fa-regular fa-envelope"
                      title="Email"
                      content="classashenssor@gmail.com"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="section-ptb">
                <Col lg={8} md={7}>
                  <EnquiryForm />
                </Col>
                <Col lg={4} md={5}>
                  <div className="opening-hours bg-light mt-4 mt-md-0">
                    <h6 className="title">Opening hours</h6>
                    <OpeningHours data={OpeningHoursItems} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <div className="feature-wrapper contact-info grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                    <FeatureInfo
                      className="feature-box-style-03 grey-border"
                      icon="fa-regular fa-clock"
                      title="Opening Hours"
                      content="We're open Monday to Saturday from 9:00 AM to 9:00 PM. Contact us anytime during these hours for inquiries or support."
                    />
                    <FeatureInfo
                      className="feature-box-style-03 grey-border"
                      icon="fa-solid fa-life-ring"
                      title="Our Support Center"
                      content="Our support team is here to assist with elevator installations, maintenance, and emergency services across Albania."
                    />
                    <FeatureInfo
                      className="feature-box-style-03 grey-border"
                      icon="fa-solid fa-info"
                      title="About Class Ashensor"
                      content="Class Ashensore specializes in elevator installation, modernization, and maintenance. With over 10 years of experience, we ensure top-tier safety and service."
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            <Container fluid className="p-0">
              <Row className="g-0">
                <Col>
                  <div className="contact-map">
                    <Googlemap />
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

export default ContactUs;
