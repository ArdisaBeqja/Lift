import React from 'react';

// Libraritë
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Komponentët
import SectionTitle from '../../component/section-title/section-title';
import FeatureInfo from '../../component/feature-info';
import OpeningHours from '../../component/openinghours';
import Googlemap from '../../component/googlemap/googlemap';

// Formularët
import EnquiryForm from '../../form/enquiry-form';
import ContactForm from '../../form/contact-form';

function ContactUs() {
  const OpeningHoursItems = [
    { id: 1, day: 'E Diel', time: ' Mbyllur' },
    { id: 2, day: 'E Hënë', time: ' 09:00 - 21:00' },
    { id: 3, day: 'E Martë', time: ' 09:00 - 21:00' },
    { id: 4, day: 'E Mërkurë', time: ' 09:00 - 21:00' },
    { id: 5, day: 'E Enjte', time: ' 09:00 - 21:00' },
    { id: 6, day: 'E Premte', time: ' 09:00 - 21:00' },
    { id: 7, day: 'E Shtunë', time: ' 09:00 - 21:00' },
  ];

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Na Kontaktoni"
          description=""
          breadCrumbItems={[
            { label: 'Kreu', path: '/' },
            { label: 'Faqe', path: '#' },
            { label: 'Na Kontaktoni', path: '#', active: true },
          ]}
        />

        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col lg={12}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="Na vjen mirë të dëgjojmë nga ju"
                    title="Le të lidhemi së bashku!"
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
                      title="Adresa"
                      content="Rruga Dritan Hoxha, Tiranë, Shqipëri"
                    />
                    <FeatureInfo
                      className="feature-box-hover contact-box text-center"
                      icon="fa-solid fa-phone"
                      title="Telefoni"
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
                    <h6 className="title">Orari i punës</h6>
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
                      title="Orari i Punës"
                      content="Jemi të hapur nga e hëna në të shtunë, 09:00 - 21:00. Na kontaktoni në këtë orar për çdo pyetje apo kërkesë."
                    />
                    <FeatureInfo
                      className="feature-box-style-03 grey-border"
                      icon="fa-solid fa-life-ring"
                      title="Qendra e Mbështetjes"
                      content="Ekipi ynë është në dispozicion për instalime, mirëmbajtje dhe shërbime urgjente të ashensorëve në të gjithë Shqipërinë."
                    />
                    <FeatureInfo
                      className="feature-box-style-03 grey-border"
                      icon="fa-solid fa-info"
                      title="Rreth Lift"
                      content="Lift është i specializuar në instalimin, modernizimin dhe mirëmbajtjen e ashensorëve. Me mbi 10 vite eksperiencë, ofrojmë siguri dhe cilësi të lartë."
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
