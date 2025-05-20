import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../component/section-title/section-title';
import ContentBox, { ContentBox02 } from '../component/content-box/content-box';

// Site Data
import ContentBoxList from '../data/content-box-list';

function ElementsContentBox(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Services"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Services', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb section-mb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Content box : Style 1"
                  />
                  <div className="grid-wrapper grid-lg-4 grid-md-2 grid-sm-1 grid-xs-1">
                    {ContentBoxList.map((val, ind) => {
                      if (ind < 4) {
                        return (
                          <ContentBox
                            className="contentbox-style-01"
                            key={ind}
                            imgsrc={val.imgsrc}
                            icon={val.icon}
                            title={val.title}
                            description={val.description}
                            id={val.id}
                            servicesurl={val.servicesurl}
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
          <section className="section-ptb section-mb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Content box : Style 2"
                  />
                  <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                    {ContentBoxList.map((val, ind) => {
                      if (ind > 3) {
                        return (
                          <ContentBox02
                            className="contentbox-style-02"
                            key={ind}
                            imgsrc={val.imgsrc}
                            icon={val.icon}
                            title={val.title}
                            description={val.description}
                            id={val.id}
                            servicesurl={val.servicesurl}
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

export default ElementsContentBox;
