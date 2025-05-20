import React from 'react';
import { Outlet } from 'react-router-dom';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Component
import ActionBox from '../../component/action-box';
import ContactInfo from '../../widget/contact-info/contact-info';
import FooterCopyright from './footer-copyright';
import FooterMenu from '../../widget/footer-menu';
import { companyMenu01, companyMenu02 } from '../../widget/footer-menu/data';
import LogoLightImg from '../../assets/images/logo-light.png';
import NewsletterForm from '../../form/newsletter';
import SocialInfo from '../../widget/social-info/social-info';
import AboutText from '../../widget/about-text/about-text';

// SCSS
import './footer.scss';

function FooterStyle02() {
  return (
    <>
      <footer className="site-footer bg-black footer-style-02">
        <div className="footer-main">
          <Container>
            <Row>
              <Col md={6} lg={3}>
                <div className="widget widget-image"><img className="img-fluid footer-logo" src={LogoLightImg} alt="logo" /></div>
                <AboutText content="We provide everything you need to build an amazing dealership website developed especially for car sellers dealers or auto motor retailers." />
                <SocialInfo />
              </Col>
              <Col md={6} lg={3}>
                <FooterMenu title="Useful Links" data={companyMenu01} />
              </Col>
              <Col md={6} lg={3}>
                <FooterMenu title="our service" data={companyMenu02} />
              </Col>
              <Col md={6} lg={3}>
                <ContactInfo
                  title="keep in touch"
                  theme="contact-info-style-01"
                  label="hide"
                  address="220E Front St. Burlington NC 27215"
                  call="(007) 123 456 7890"
                  email="support@website.com"
                />
                <NewsletterForm 
                  className="mt-3"
                  newsLetterStyle="newsletter-style-2"
                  buttonicon="fa-solid fa-paper-plane" />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <Row>
              <Col md={12} lg={6}>
                <ActionBox
                  title="are you looking for a car?"
                  content="Search Our Inventory With Thousands Of Cars And More Cars Are Adding On Daily Basis"
                  btnText="read more"
                />
              </Col>
              <Col md={12} lg={6}>
                <ActionBox
                  title="Do you want to sell a car?"
                  content="Search Our Inventory With Thousands Of Cars And More Cars Are Adding On Daily Basis"
                  btnText="read more"
                />
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

export default FooterStyle02;
