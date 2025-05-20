import React from 'react';

// Libraries
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import AppButton from '../../component/app-button/app-button.js';
import CustomFiltersVerticle from '../../form/custom-filters/form-verticle.js';

// Site Data
import BannerImg from '../../assets/images/banner/modern-home3/home3-banner-image.webp';

function Banner() {
  return (
    <>
      <section className="modern-banner-3" style={{
              backgroundImage: `url(${BannerImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
        <div className="section-overlay bg-black" data-overlay-opacity="0.5"></div>
        <Container>
          <Row className="align-items-center banner-bg">
            <Col lg={7}>
              <div className="banner-content">
                <h2 className="text-white">Find What Are You Looking For</h2>
                <h3>Over 4000 Latest Cars in Cardealer</h3>
                <p className="text-white">Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites.</p>
                <AppButton
                    appleBtnColor="theme2" appleBtn={true} appleURL="/"
                    androidBtnColor="theme2" androidBtn={true} androidURL="/home-2"
                />
                <p className="text-dec">Want to learn more about us?<Link to="#">Click here <i className="fa-solid fa-circle-arrow-right"></i></Link></p>
              </div>
            </Col>
            <Col lg={5}>
              <CustomFiltersVerticle />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
