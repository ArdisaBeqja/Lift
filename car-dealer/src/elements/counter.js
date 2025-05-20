import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../component/section-title/section-title';
import Counter, {
  CounterstyleThree,
  CounterstyleTwo,
} from '../component/counter/counter';

function ElementsCounter() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Counter"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Counter', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle extraClass="mb-5" title="Counter" />
                </Col>
              </Row>
              <Row>
                <Col lg={3} md={6}>
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="3968"
                    countIcon="glyph-icon flaticon-beetle"
                    countTitle="Vehicles In Stock"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="5568"
                    countIcon="glyph-icon flaticon-interface"
                    countTitle="Dealer Reviews"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="8908"
                    countIcon="glyph-icon flaticon-circle"
                    countTitle="Happy Customer"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="9968"
                    countIcon="glyph-icon flaticon-cup"
                    countTitle="Awards"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-light">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle extraClass="mb-5" title="Counter Style Two" />
                </Col>
              </Row>
              <Row>
                <Col lg={3} md={6}>
                  <CounterstyleTwo
                    className="counterstyle-02"
                    countStart="0"
                    countEnd="400"
                    countIcon="glyph-icon flaticon-beetle"
                    countTitle="Vehicles Stock"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleTwo
                    className="counterstyle-02"
                    countStart="0"
                    countEnd="1000"
                    countIcon="glyph-icon flaticon-interface"
                    countTitle="Dealer Reviews"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleTwo
                    className="counterstyle-02"
                    countStart="0"
                    countEnd="1500"
                    countIcon="glyph-icon flaticon-circle"
                    countTitle="Happy Customer"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleTwo
                    className="counterstyle-02"
                    countStart="0"
                    countEnd="450"
                    countIcon="glyph-icon flaticon-cup"
                    countTitle="Awards"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-light">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Counter Style Two icon right"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={3} md={6}>
                  <CounterstyleTwo
                    className="counterstyle-02 icon-right"
                    countStart="0"
                    countEnd="400"
                    countIcon="glyph-icon flaticon-beetle"
                    countTitle="Vehicles Stock"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleTwo
                    className="counterstyle-02 icon-right"
                    countStart="0"
                    countEnd="1000"
                    countIcon="glyph-icon flaticon-interface"
                    countTitle="Dealer Reviews"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleTwo
                    className="counterstyle-02 icon-right"
                    countStart="0"
                    countEnd="1500"
                    countIcon="glyph-icon flaticon-circle"
                    countTitle="Happy Customer"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleTwo
                    className="counterstyle-02 icon-right"
                    countStart="0"
                    countEnd="450"
                    countIcon="glyph-icon flaticon-cup"
                    countTitle="Awards"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-1 bg-overlay-black overlay-70">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    extraClass="section-title-light mb-5"
                    title="Counter Style Three"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03"
                    countStart="0"
                    countEnd="561"
                    countIcon="glyph-icon flaticon-beetle"
                    countTitle="Vehicles in Stock"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03"
                    countStart="0"
                    countEnd="856"
                    countIcon="glyph-icon flaticon-interface"
                    countTitle="Dealer Reviews"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03"
                    countStart="0"
                    countEnd="120"
                    countIcon="glyph-icon flaticon-circle"
                    countTitle="Happy Customer"
                  />
                </Col>
                <Col lg={3} md={6}>
                  <CounterstyleThree
                    className="counterstyle-03"
                    countStart="0"
                    countEnd="520"
                    countIcon="glyph-icon flaticon-cup"
                    countTitle="Awards"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-ptb">
            <Container>
              <Row>
                <Col lg={6}>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Counter Style Two counter-list"
                  />
                </Col>
                <Col lg={6}>
                  <ul className="list-style-none counter-list">
                    <li>
                      <CounterstyleTwo
                        className="counterstyle-02 icon-right"
                        countStart="0"
                        countEnd="400"
                        countIcon="glyph-icon flaticon-beetle"
                        countTitle="Vehicles in Stock"
                      />
                    </li>
                    <li>
                      <CounterstyleTwo
                        className="counterstyle-02"
                        countStart="0"
                        countEnd="1000"
                        countIcon="glyph-icon flaticon-interface"
                        countTitle="Dealer Reviews"
                      />
                    </li>
                    <li>
                      <CounterstyleTwo
                        className="counterstyle-02  icon-right"
                        countStart="0"
                        countEnd="1500"
                        countIcon="glyph-icon flaticon-circle"
                        countTitle="Happy Customer"
                      />
                    </li>
                    <li>
                      <CounterstyleTwo
                        className="counterstyle-02"
                        countStart="0"
                        countEnd="450"
                        countIcon="glyph-icon flaticon-cup"
                        countTitle="Awards"
                      />
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsCounter;
