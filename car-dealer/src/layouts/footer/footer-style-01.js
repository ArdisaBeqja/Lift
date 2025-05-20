import React from 'react';
import { Outlet } from 'react-router-dom';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Component
import NewsletterWidget from '../../widget/newsletter';

// Page Section
import ContactInfo from '../../widget/contact-info/contact-info';
import { SocialInfo02 } from '../../widget/social-info/social-info';
import FooterCopyright from './footer-copyright';
import FooterMenu from '../../widget/footer-menu';
import { servicesMenu } from '../../widget/footer-menu/data';
import RecentPostWidget from '../../widget/recent-post';

// Site Data
import LogoLightImg from '../../assets/images/logo-light.png';
import FooterBG from '../../assets/images/bg/footer-bg.webp';

// SCSS
import './footer.scss';

function FooterStyle01() {
  return (
    <>
      <footer className="site-footer footer-style-01" style={{backgroundImage: `url(${FooterBG})`}}>
        <div className="section-overlay bg-black" data-overlay-opacity="0.9"></div>
        <div className="footer-top">
          <Container>
            <Row>
              <Col sm={12}>
                <SocialInfo02 />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-main">
          <Container>
            <Row>
              <Col md={6} lg={3}>
                <div className="widget widget-image"><img className="img-fluid footer-logo" src={LogoLightImg} alt="logo" /></div>
                <ContactInfo
                  content="We provide everything you need to build an amazing dealership."
                  contentclass="about-content"
                  theme="contact-info-style-01"
                  label="hide"
                />
              </Col>
              <Col md={6} lg={3}>
                <FooterMenu title="Useful Links" data={servicesMenu} />
              </Col>
              <Col md={6} lg={3}>
                <RecentPostWidget title="Recent Posts" />
              </Col>
              <Col md={6} lg={3}>
                <NewsletterWidget
                  title="Subscribe Our Newsletter"
                  content="Keep up on our always evolving products features and technology. Enter your e-mail and subscribe to our newsletter."
                />
              </Col>
            </Row>
            <hr />
          </Container>
        </div>

        {/* Footer Copyright */}
        <FooterCopyright />
      </footer>
      <Outlet />
    </>
  );
}

export default FooterStyle01;
