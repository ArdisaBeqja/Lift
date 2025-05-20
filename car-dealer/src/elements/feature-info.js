import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import FeatureInfo from '../component/feature-info';
import SectionTitle from '../component/section-title/section-title';

function ElementsFeatureInfo(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Feature Info"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Feature Info', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle extraClass="mb-5" title="Feature Box" />
                </Col>
                <Col sm={12}>
                  <div className="feature-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
                    <FeatureInfo
                      icon="glyph-icon flaticon-beetle"
                      title="All brands"
                      content="Galley simply dummy text lorem Ipsum is of the printin  k a of type and"
                      link="#"
                    />
                    <FeatureInfo
                      icon="glyph-icon flaticon-interface-1"
                      title="Free Support"
                      content="Text of the printin lorem ipsum the is simply k a type text and galley of"
                    />
                    <FeatureInfo
                      icon="glyph-icon flaticon-key"
                      title="Dealership"
                      content="Printin k a of type and lorem Ipsum is simply dummy text of the galley "
                    />
                    <FeatureInfo
                      icon="glyph-icon flaticon-wallet"
                      title="affordable"
                      content="The printin k a galley Lorem Ipsum is type and simply dummy text of"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Feature Box : Style 1"
                  />
                </Col>
                <Col sm={12}>
                  <div className="feature-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
                    <FeatureInfo
                      className="feature-box-style-01"
                      icon="glyph-icon flaticon-beetle"
                      title="All brands"
                      content="Galley simply dummy text lorem Ipsum is of the printin  k a of type and"
                      link="#"
                    />
                    <FeatureInfo
                      className="feature-box-style-01"
                      icon="glyph-icon flaticon-interface-1"
                      title="Free Support"
                      content="Text of the printin lorem ipsum the is simply k a type text and galley of"
                    />
                    <FeatureInfo
                      className="feature-box-style-01"
                      icon="glyph-icon flaticon-key"
                      title="Dealership"
                      content="Printin k a of type and lorem Ipsum is simply dummy text of the galley "
                    />
                    <FeatureInfo
                      className="feature-box-style-01"
                      icon="glyph-icon flaticon-wallet"
                      title="affordable"
                      content="The printin k a galley Lorem Ipsum is type and simply dummy text of"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Feature Box : Box Hover"
                  />
                </Col>
                <Col sm={12}>
                  <div className="feature-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
                    <FeatureInfo
                      className="feature-box-hover active"
                      icon="glyph-icon flaticon-beetle"
                      title="All brands"
                      content="Galley simply dummy text lorem Ipsum is of the printin  k a of type and"
                      link="#"
                    />
                    <FeatureInfo
                      className="feature-box-hover"
                      icon="glyph-icon flaticon-interface-1"
                      title="Free Support"
                      content="Text of the printin lorem ipsum the is simply k a type text and galley of"
                    />
                    <FeatureInfo
                      className="feature-box-hover"
                      icon="glyph-icon flaticon-key"
                      title="Dealership"
                      content="Printin k a of type and lorem Ipsum is simply dummy text of the galley "
                    />
                    <FeatureInfo
                      className="feature-box-hover"
                      icon="glyph-icon flaticon-wallet"
                      title="affordable"
                      content="The printin k a galley Lorem Ipsum is type and simply dummy text of"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Feature Box : Style 2"
                  />
                </Col>
                <Col sm={12}>
                  <div className="feature-wrapper feature-wrapper-nogap grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                    <FeatureInfo
                      className="feature-box-style-02"
                      icon="glyph-icon flaticon-car"
                      title="Super Fast"
                      content="Galley of bled it lorem Ipsum is simply dummy text of the k a to make a type book. but also the leap into electronic typesetting."
                      link="#"
                    />
                    <FeatureInfo
                      className="feature-box-style-02"
                      icon="glyph-icon flaticon-wallet"
                      title="Affordable"
                      content="Bled it to make a lorem Ipsum is simply dummy text of the k a galley of type book. but also the leap into electronic typesetting."
                    />
                    <FeatureInfo
                      className="feature-box-style-02 border-end-0"
                      icon="glyph-icon flaticon-gas-station"
                      title="Oil Changes"
                      content="Also the leap into electronic typesetting. lorem Ipsum is simply dummy text of the k a galley of bled it to make a type book but"
                    />
                    <FeatureInfo
                      className="feature-box-style-02 border-bottom-0"
                      icon="glyph-icon flaticon-air-conditioning"
                      title="Air Conditioning"
                      content="Simply dummy text lorem Ipsum is of the k a galley of bled it to make a type book. but also the leap into electronic typesetting."
                    />
                    <FeatureInfo
                      className="feature-box-style-02 border-bottom-0"
                      icon="glyph-icon flaticon-gearstick"
                      title="Transmission"
                      content="But also the leap into electronic typesetting. lorem Ipsum is simply dummy text of the k a galley of bled it to make a type book."
                    />
                    <FeatureInfo
                      className="feature-box-style-02 border-end-0 border-bottom-0"
                      icon="glyph-icon flaticon-key"
                      title="Dealership"
                      content="Make a type book lorem Ipsum is simply dummy text of the k a galley of bled it to. but also the leap into electronic typesetting."
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Feature Box : Style 3"
                  />
                </Col>
                <Col sm={12}>
                  <div className="feature-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
                    <FeatureInfo
                      className="feature-box-style-03"
                      icon="glyph-icon flaticon-beetle"
                      title="All brands"
                      content="Obcaecati adipisci vero dolorum pariatur "
                      link="#"
                    />
                    <FeatureInfo
                      className="feature-box-style-03"
                      icon="glyph-icon flaticon-interface-1"
                      title="Free Support"
                      content="lorem ipsum dolor sit amet, consectetur"
                    />
                    <FeatureInfo
                      className="feature-box-style-03"
                      icon="glyph-icon flaticon-key"
                      title="Dealership"
                      content="Sit quisquam rerum corporis neque"
                    />
                    <FeatureInfo
                      className="feature-box-style-03"
                      icon="glyph-icon flaticon-wallet"
                      title="affordable"
                      content="Suscipit aperiam reiciendis, ea odio?"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Feature Box : Style 3  icon grey border"
                  />
                </Col>
                <Col sm={12}>
                  <div className="feature-wrapper grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
                    <FeatureInfo
                      className="feature-box-style-03 grey-border"
                      icon="glyph-icon flaticon-beetle"
                      title="All brands"
                      content="Obcaecati adipisci vero dolorum pariatur "
                      link="#"
                    />
                    <FeatureInfo
                      className="feature-box-style-03 grey-border"
                      icon="glyph-icon flaticon-interface-1"
                      title="Free Support"
                      content="lorem ipsum dolor sit amet, consectetur"
                    />
                    <FeatureInfo
                      className="feature-box-style-03 grey-border"
                      icon="glyph-icon flaticon-key"
                      title="Dealership"
                      content="Sit quisquam rerum corporis neque"
                    />
                    <FeatureInfo
                      className="feature-box-style-03 grey-border"
                      icon="glyph-icon flaticon-wallet"
                      title="affordable"
                      content="Suscipit aperiam reiciendis, ea odio?"
                    />
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

export default ElementsFeatureInfo;
