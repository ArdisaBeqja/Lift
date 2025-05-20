import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../../component/section-title/section-title';
import Button from '../../component/button/button';

// Page Section
import AboutSection from './about-section';
import ClientLogoSection from './client-logo';
import WhyChooseSection from './why-choose-section';
import TestimonialSection from './testimonial-section';
import videoUrl from '../../assets/video/video.mp4';

// SCSS
import './style.scss';

function ModernAbout() {
  
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="About Us"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'About Us', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper about-page">
          <div className="site-content homepage">
            <div className="content-wrapper">

              {/* About Left/Right Section */}
              <section className="section-ptb bg-gradient-grey provides-best-solution">
                <div className=""><AboutSection /></div>
                <div className="section-pt"><ClientLogoSection /></div>
              </section>
              
              {/* Why Choose Us section*/}
              <section className="section-ptb why-choose-services_section bg-dark">
                <WhyChooseSection />
              </section>

              {/* Testimonial Section */}
              <section className="section-ptb">
                <TestimonialSection />
              </section>

              {/* Action Box Section */}
              <section className="section-ptb bg-primary">
                <div className="section-overlay bg-primary index-2" data-overlay-opacity="0.8"></div>
                <video autoPlay loop muted className="video-background">
                  <source src={videoUrl} type="video/mp4" />
                </video>
                <Container className="pos-rel index-2">
                  <Row className="justify-content-center">
                      <Col lg={8} className="text-center">
                          <SectionTitle
                            extraClass="section-title-new section-title-light2 text-center"
                            subtitle="What Our Happy Clients say about us"
                            title="We Start By Shaping Our Design Process, With Our Clients As Partners"
                          />
                          <Button btnClass="secondary btn-lg" btnText="Start Investing Now" />
                      </Col>
                  </Row>
                </Container>
              </section>
                        
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModernAbout;
