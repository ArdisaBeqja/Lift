import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import InfoBox from '../component/infobox';
import SectionTitle from '../component/section-title/section-title';

function ElementsInfoBox(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Infobox"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Infobox', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle tag="h3" extraClass="mb-5" title="Infobox : Style 1" />
                  <div className="feature-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
                    <InfoBox
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-travel"
                      title="Charging Station"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Learn More"
                      linkurl="/"
                    />
                    <InfoBox
                      icontype="border"
                      iconshape="rounded"
                      icon="glyph-icon flaticon-car-repair"
                      title="Auto Return Service"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Learn More"
                      linkurl="/home-2"
                    />
                    <InfoBox
                      icontype="flat"
                      iconshape="round"
                      icon="glyph-icon flaticon-disc-brake"
                      title="Rapid Charging"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Learn More"
                      linkurl="/home-3"
                    />
                  </div>
                </Col>

                <Col sm={12} className="mt-5 pt-5">
                  <SectionTitle tag="h3" extraClass="mb-5" title="Infobox : Style 2" />
                  <div className="feature-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
                    <InfoBox
                      infoStyle="style-2"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-travel"
                      title="Charging Station"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Learn More"
                      linkurl="/"
                    />
                    <InfoBox 
                      infoStyle="style-2"
                      icontype="border"
                      iconshape="rounded"
                      icon="glyph-icon flaticon-car-repair"
                      title="Auto Return Service"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Learn More"
                      linkurl="/home-2"
                    />
                    <InfoBox
                      infoStyle="style-2"
                      icontype="flat"
                      iconshape="round"
                      icon="glyph-icon flaticon-disc-brake"
                      title="Rapid Charging"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Learn More"
                      linkurl="/home-3"
                    />
                  </div>
                </Col>

                <Col sm={12} className="mt-5 pt-5">
                  <SectionTitle tag="h3" extraClass="mb-5" title="Infobox : Style 3" />
                  <div className="feature-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
                    <InfoBox
                      infoStyle="style-3"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-travel"
                      title="Charging Station"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Learn More"
                      linkurl="/"
                    />
                    <InfoBox 
                      infoStyle="style-3"
                      icontype="border"
                      iconshape="rounded"
                      icon="glyph-icon flaticon-car-repair"
                      title="Auto Return Service"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Learn More"
                      linkurl="/home-2"
                    />
                    <InfoBox
                      infoStyle="style-3"
                      icontype="flat"
                      iconshape="round"
                      icon="glyph-icon flaticon-disc-brake"
                      title="Rapid Charging"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Learn More"
                      linkurl="/home-3"
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

export default ElementsInfoBox;
