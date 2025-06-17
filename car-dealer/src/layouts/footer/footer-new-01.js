import React from 'react';
import { Outlet } from 'react-router-dom';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import Ft from './ft.jpeg';
// Components
import SocialInfo from '../../widget/social-info/social-info';
import ContactInfo from '../../widget/contact-info/contact-info';
import FooterCopyright from './footer-copyright';
import RecentPostWidget from '../../widget/recent-post';

// Site Data
import FooterBG from './a.avif';

// SCSS
import './footer.scss';

function FooterNew01() {
  // General inline styles
  const footerStyle = {
    backgroundImage: `url(${FooterBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.44)',
  };

  const textStyle = { color: 'white' };
  const linkStyle = { color: 'white', textDecoration: 'none' };

  // Helper wrapper to enforce link styles on children if they contain links
  // (Will work if children render <a> tags directly)
  const LinkStyleWrapper = ({ children }) => (
    <div style={textStyle}>
      {React.Children.map(children, child => {
        if (
          React.isValidElement(child) &&
          (child.type === 'a' || child.type?.displayName === 'Link')
        ) {
          return React.cloneElement(child, { style: linkStyle });
        }
        return child;
      })}
    </div>
  );

  return (
    <>
      <footer className="site-footer footer-new-01" style={footerStyle}>
        <div className="section-overlay" style={overlayStyle}></div>

        <div className="footer-top" style={textStyle}>
          <Container>
            <Row className="footer-top-inner">
              <Col
                lg={4}
                md={4}
                sm={4}
                className="text-center text-md-start"
                style={textStyle}
              >
               
                {/* <img
  className="img-fluid footer-logo"
  alt="Footer Logo"
  src={Ft}
  style={{ width: '60px', height: 'auto' }}
/> */}

              </Col>
              <Col
                lg={8}
                md={8}
                sm={8}
                className="text-center text-md-end"
                style={textStyle}
              >
                {/* Wrap SocialInfo in div with white text */}
                <div style={textStyle}>
                  <SocialInfo className="mt-4 mt-sm-0 mb-0" theme="text-lg-end" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="footer-main" style={textStyle}>
          <Container>
            <Row>
              <Col md={6} lg={3}>
                {/* Wrap ContactInfo in div that forces text white */}
                <div style={textStyle}>
                  <p></p>
                  <ContactInfo
  title="Informacion Kontakti"
  content="Ne ofrojmë gjithçka që ju nevojitet për të ndërtuar një showroom fantastik."
  contentclass="about-content"
  theme="contact-info-style-01"
  label="hide"
/>

                </div>
              </Col>

              <Col md={6} lg={3}>
                {/* Wrap RecentPostWidget in div for white text */}
                <div style={textStyle}>
                  <RecentPostWidget title="Recent Posts" />
                </div>
              </Col>

              <Col md={6} lg={3}>
                {/* Empty */}
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

export default FooterNew01;
