import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../component/section-title/section-title';
import videoImage from '../assets/images/modern-demo/video-bg-image.webp';

// Form
import NewsletterForm from '../form/newsletter';
import '../form/form.scss';

function ElementsNewsletter() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Newsletter"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Newsletter', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="mb-5">
                <Col md={6}>
                  <SectionTitle
                    extraClass="section-title-new"
                    tag="h4"
                    title="Newsletter : Style 1"
                    content="Obcaecati adipisci vero dolorum pariatur aut consectetur. lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                  <NewsletterForm className="mb-4"
                    newsLetterStyle="newsletter-style-1"
                  />                  
                </Col>
                <Col md={6}>
                  <SectionTitle
                    extraClass="section-title-new"
                    tag="h4"
                    title="Newsletter : Style 2"
                    content="Obcaecati adipisci vero dolorum pariatur aut consectetur. lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                  <NewsletterForm
                    newsLetterStyle="newsletter-style-2"
                  />
                </Col>
                <Col md={6}>
                  <SectionTitle
                    extraClass="section-title-new mt-5"
                    tag="h4"
                    title="Newsletter : Style 3"
                    content="Obcaecati adipisci vero dolorum pariatur aut consectetur. lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                  <NewsletterForm
                    newsLetterStyle="newsletter-style-3"
                    buttontext="Send Message"
                  />
                </Col>
                <Col md={6}>
                  <SectionTitle
                    extraClass="section-title-new mt-5"
                    tag="h4"
                    title="Newsletter : Style 4"
                    content="Obcaecati adipisci vero dolorum pariatur aut consectetur. lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                  <NewsletterForm
                    newsLetterStyle="newsletter-style-4"
                    buttontext="Send Message"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-ptb news-letter-main" style={{backgroundImage: `url(${videoImage})`}}>
            <Container>
              <Row>
                <Col md={6}>
                  <SectionTitle
                    extraClass="section-title-new section-title-light2 mb-0"
                    tag="h5"
                    title="Subscribe Our Newsletter"
                    space="space-sm"
                    content="Obcaecati adipisci vero dolorum pariatur aut consectetur. lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                </Col>
                <Col md={6}>
                  <NewsletterForm className=""
                    newsLetterStyle="newsletter-style-1"
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

export default ElementsNewsletter;
