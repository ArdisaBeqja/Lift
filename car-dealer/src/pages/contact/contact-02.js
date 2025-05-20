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

// Form
import ContactForm2 from '../../form/contact-form/index-2';

function ContactUsTwo() {
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
          title="Contact us"
          description=""
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Contact Us 02', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb contact-2">
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
                <Col lg={8}>
                  <ContactForm2
                    className="contactform-02"
                    formtitle="We have completed over a 1000+ projects for five hundred clients. Give us your next project."
                    formdescription="It would be great to hear from you! If you got any questions, please do not hesitate to send us a message. We are looking forward to hearing from you! We reply within 24 hours !"
                  />
                </Col>
                <Col lg={4}>
                  <FeatureInfo
                    className="feature-box-style-03 grey-border mb-4"
                    icon="fa-solid fa-location-dot"
                    title="Address"
                    content="220E Front St. Burlington NC 215 "
                  />

                  <FeatureInfo
                    className="feature-box-style-03 grey-border mb-4"
                    icon="fa-solid fa-phone"
                    title="Phone"
                    content="(007) 123 456 7890"
                  />

                  <FeatureInfo
                    className="feature-box-style-03 grey-border"
                    icon="fa-regular fa-envelope"
                    title="Email"
                    content="support@website.com"
                  />

                  <div className="opening-hours bg-light">
                    <h6 className="title">Opening hours</h6>
                    <OpeningHours data={OpeningHoursItems} />
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

export default ContactUsTwo;
