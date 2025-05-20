import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Component
import SocialInfo from '../../widget/social-info/social-info';

// Page Section
import ContactInfo from '../../widget/contact-info/contact-info';
import FooterCopyright from './footer-copyright';
import FooterMenu from '../../widget/footer-menu';
import { servicesMenu } from '../../widget/footer-menu/data';
import RecentPostWidget from '../../widget/recent-post';

// Site Data
import LogoLightImg from '../../assets/images/logo-light.png';
import AppleBtn from '../../assets/images/modern-demo/appstore.webp';
import GoogleBtn from '../../assets/images/modern-demo/google-play-store.webp';
import FooterBG from '../../assets/images/bg/footer-bg.webp';

// SCSS
import './footer.scss';

function FooterNew01() {
  return (
    <>
      <footer className="site-footer footer-new-01" style={{backgroundImage: `url(${FooterBG})`}}>
        <div className="section-overlay bg-black" data-overlay-opacity="0.9"></div>
        <div className="footer-top">
            <Container>
              <Row className="footer-top-inner">
                <Col lg={4} md={4} sm={4} className="text-center text-md-start">
                    <img className="img-fluid footer-logo"  src={LogoLightImg} alt="logo" />
                </Col>
                <Col lg={8} md={8} sm={8} className="text-center text-md-end">
                    <SocialInfo className="mt-4 mt-sm-0 mb-0" theme="text-lg-end" />
                </Col>
              </Row>
            </Container>
        </div>
        <div className="footer-main">
          <Container>
            <Row>
              <Col md={6} lg={3}>
                <ContactInfo
                  title="Contact Information"
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

                <div className="widget widget-download-app">
                  <h3 className="widget-title">Download App</h3>
                  <div className="about-text">Download Our Car Dealer Mobile Application.</div>
                  <div className="app-buttons">
                    <Link to="#"><img className="img-fluid" src={AppleBtn} alt="Apple Store" /></Link>
                    <Link to="#"><img className="img-fluid" src={GoogleBtn} alt="Google Play Store" /></Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Footer Copyright */}
        <FooterCopyright />
      </footer>
      <Outlet />
    </>
  );
}

export default FooterNew01;
