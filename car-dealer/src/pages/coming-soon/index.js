import React, { useEffect } from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import Countdown from '../../component/countdown/countdown';
import SectionTitle from '../../component/section-title/section-title';
import SearchPages from '../../component/search/search';

// Site Data
import comingsoonImg from '../../assets/images/bg/coming-soon.webp';

// SCSS
import './coming-soon.scss';
import '../../component/button/button.scss';

function ComingSoon() {
  useEffect(() => {
    document.body.classList.add('coming-soon-page');

    return () => {
      document.body.classList.remove('coming-soon-page');
    };
  }, []);

  return (
    <>
      <div className="site-content coming-soon">
        <PageHeader
          title="coming soon"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'pages', path: '#' },
            { label: 'coming soon', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    extraClass="coming-soon-title text-center"
                    title="Coming Soon"
                    separator="separator"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="text-center">
                  <div className="countdown">
                    <p>
                      We are working very hard on the new version of our site.
                      It will bring a lot of new features. Stay tuned!
                    </p>
                    <Countdown size="size-lg" dateTime="06/01/2024" />
                  </div>
                </Col>
              </Row>
              <Row className="coming-soon-search justify-content-center">
                <Col md={12} className="text-center">
                  <img className="img-fluid" src={comingsoonImg} alt="" />
                </Col>
                <Col md={12} className="text-center">
                  <p>
                    Provide your email address & we will notify you when site is
                    ready:
                  </p>
                </Col>
                <Col lg={8} md={10} className="text-center">
                  <SearchPages buttontext="Notify Me" />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
