import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import Button from '../../component/button/button';

// Site Data
import BannerImg2 from '../../assets/images/banner/modern-home2/car-image-new.webp';

// SCSS
import './style.scss';

function ModernBanner2() {
  return (
    <>
      <section className="modern-banner-2">
        <Container>
          <Row className="banner-bg">
            <Col xl={6} lg={8}>
              <div className="banner-content">
                <h2>Find What Are You Looking For</h2>
                <h3>Over 4000 Latest Cars in Cardealer</h3>
                <p>Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme.</p>
                <Button
                  btnClass="secondary btn-md"
                  btnText="More Information"
                  btnURL="#"
                />
              </div>
            </Col>
            <Col xl={6} lg={4}>
              <div className="banner-car">
                <img className="banner-car" src={BannerImg2} alt="Banner Text" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ModernBanner2;
