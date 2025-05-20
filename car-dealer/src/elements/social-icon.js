import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../component/section-title/section-title';

// Widget
import SocialInfo, {
  BlogSocialInfo,
  SocialInfo02,
  SocialInfo03,
} from '../widget/social-info/social-info';

function ElementsSocialIcon(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="social icon"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Timeline', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-pt">
            <Container>
              <Row>
                <Col className="">
                  <SectionTitle extraClass="mb-5" title="social icon style 1" />
                  <SocialInfo />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-pt">
            <Container>
              <Row>
                <Col className="">
                  <SectionTitle extraClass="mb-5" title="social icon style 2" />
                  <SocialInfo02 />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pt">
            <Container>
              <Row>
                <Col className="">
                  <SectionTitle extraClass="mb-5" title="social icon style 3" />
                  <SocialInfo03 sociallistclass="social-style-03" />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col className="">
                  <SectionTitle extraClass="mb-5" title="social icon style 4" />
                  <BlogSocialInfo className="social-list-04" />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsSocialIcon;
