import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../component/section-title/section-title';
import Timeline from '../component/timeline/timeline';

// Site Data
import TimelineList from '../data/timeline-list';

function ElementsTimeline(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Timeline"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Timeline', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col className="">
                  <SectionTitle extraClass="mb-5" title="OUR HISTORY" />
                  <div className="timeline-step-wrapper">
                    {TimelineList.map((val, ind) => {
                      if (ind < 4) {
                        return (
                          <Timeline
                            key={ind}
                            extraClass=""
                            featureImg={val.featureImg}
                            stepNumber={val.stepNumber}
                            title={val.title}
                            description={val.description}
                          />
                        );
                      }
                      return null;
                    })}
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

export default ElementsTimeline;
