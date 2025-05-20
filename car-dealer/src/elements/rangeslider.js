import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import PriceRangeSlider from '../component/range-slider/range-slider';

function ElementsRangeSlider() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Price Range Slider"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Price Range Slider', path: '#', active: true },
          ]}
        />

        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col md={6}>
                  <h3 className="mb-4">Range Slider</h3>
                  <PriceRangeSlider />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsRangeSlider;
