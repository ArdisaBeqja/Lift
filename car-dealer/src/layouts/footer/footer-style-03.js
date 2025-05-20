import React from 'react';
import { Outlet } from 'react-router-dom';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Component
import SocialInfo from '../../widget/social-info/social-info';
import FooterCopyright from './footer-copyright';
import LogoDarkImg from '../../assets/images/logo-dark.png';
import { FooterNav, Menu03 } from '../../widget/footer-menu/data';
import FooterMenu from '../../widget/footer-menu';
import AboutText from '../../widget/about-text/about-text';

// SCSS
import './footer.scss';

function FooterStyle03() {
  return (
    <>
      <footer className="site-footer footer-style-03">
        <div class="footer-top">
          <Container>
            <Row className="footer-top-inner">
              <Col md={12} lg={3}>
                <div className="widget widget-image"><img className="img-fluid footer-logo" src={LogoDarkImg} alt="logo" /></div>
              </Col>
              <Col md={12} lg={5} className="py-4 py-lg-0">
                <FooterMenu data={FooterNav} />
              </Col>
              <Col md={12} lg={4}>
                <SocialInfo theme="text-lg-end text-center" />
              </Col>
            </Row>
          </Container>
        </div>
        <div class="footer-main">
          <Container>
            <Row>
              <Col md={12} lg={5}>
                <AboutText
                  title="About Us"
                  content="Car Dealer is the best premium HTML5 Template. We provide everything you need to build an Amazing dealership website developed especially for car sellers, dealers or auto motor retailers. You can use this template for creating website."
                />
              </Col>
              <Col md={12} lg={7}>
                <FooterMenu col="col-3" title="Useful Links" data={Menu03} />
              </Col>
            </Row>
          </Container>
        </div>
        <FooterCopyright />
      </footer>
      <Outlet />
    </>
  );
}

export default FooterStyle03;
