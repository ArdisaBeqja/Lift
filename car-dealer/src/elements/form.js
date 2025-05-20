import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Form
import ServiceForm from '../form/service-form';
import CareerForm from '../form/career-form';
import ContactForm from '../form/contact-form';
import ContactForm2 from '../form/contact-form/index-2';
import BlogForm from '../form/blog-form';
import EnquiryForm from '../form/enquiry-form';
import RequestMoreInfoForm from '../form/request-more-info-form';
import ScheduleTestDriveForm from '../form/schedule-test-drive-form';
import MakeAnOfferForm from '../form/make-an-offer-form';
import EmailToAFriendForm from '../form/email-to-a-friend';
import TradeInAppraisalForm from '../form/trade-in-appraisal';
import '../form/form.scss';
import FinancingCalculatorForm from '../form/financing-calculator-form';

function ElementsForm() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Form"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Form', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-pt">
            <Container>
              <ServiceForm formtitle="service Form" />
            </Container>
          </section>
          <section className="section-pt">
            <Container>
              <CareerForm
                formtitle="Career Form"
                formdescription="Interested and eligible candidates are requested to fill below form to apply for the right position. Or send their CV together with personal details by e-mail address support@yourwebsite.com"
              />
            </Container>
          </section>
          <section className="section-pt">
            <Container>
              <ContactForm formtitle="Contact Form" />
            </Container>
          </section>
          <section className="section-pt">
            <Container>
              <ContactForm2 formtitle="Contact Form Two" />
            </Container>
          </section>

          <section className="section-pt">
            <Container>
              <BlogForm formtitle="Blog Form" />
            </Container>
          </section>

          <section className="section-pt">
            <Container>
              <EnquiryForm formtitle="SEND ENQUIRY" />
            </Container>
          </section>

          <section className="section-pt">
            <Container>
              <Row>
                <Col lg={6}>
                  <RequestMoreInfoForm
                    formtitle="REQUEST MORE INFO"
                    formdescription="Please fill out the information below and one of our representatives will contact you regarding your more information request."
                  />
                </Col>
                <Col lg={6}>
                  <ScheduleTestDriveForm
                    formtitle="Schedule Test Drive"
                    formdescription="Complete this form to request a test drive of your favorite car. Our Sales Advisor will contact you promptly to confirm your appointment."
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col lg={6}>
                  <MakeAnOfferForm formtitle="Make an offer" />
                </Col>
                <Col lg={6}>
                  <EmailToAFriendForm formtitle="Email To A Friend Form" />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pt">
            <Container>
              <TradeInAppraisalForm formtitle="Trade In Appraisal Form" />
            </Container>
          </section>
          <section className="section-ptb">
            <Container>
              <Row>
                <Col lg={6}>
                  <h5 className="weight-title">Financing Calculator</h5>
                  <FinancingCalculatorForm />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsForm;
