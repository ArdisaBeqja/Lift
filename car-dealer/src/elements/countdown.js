import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import Countdown from '../component/countdown/countdown';

function ElementsCountdown() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Countdown"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Countdown', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="mb-5 pb-4 justify-content-center">
                <Col sm={12} className="mb-4 text-center">
                  <h2 className="mb-5">Countdown</h2>
                </Col>
                <Col sm={12}>
                  <Countdown dateTime="12/31/2024" />
                </Col>
              </Row>
              <Row className="mb-5 pb-4 justify-content-center">
                <Col sm={12} className="mb-4 text-center">
                  <h2 className="mb-5">Countdown Size : Large</h2>
                </Col>
                <Col sm={12}>
                  <Countdown size="size-lg" dateTime="12/31/2024" />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={12} className="mb-4 text-center">
                  <h2 className="mb-5">Countdown Size : Small</h2>
                </Col>
                <Col sm={12}>
                  <Countdown size="size-sm" dateTime="12/31/2024" />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsCountdown;
