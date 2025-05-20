import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import SectionTitle from '../../component/section-title/section-title';
import InfoBox from '../../component/infobox';
import { PostStyle4 } from '../../component/blog';
import { VehicleShowcase3 } from '../../component/car-list';
import Button from '../../component/button/button';
import NewsletterForm from '../../form/newsletter';

// Site Data
import BlogList from '../../data/blog-list';
//************** */ import CarList from '../../data/car-list';
import useCarList from '../../data/fetchData/carList1';

import newsletterImg from '../../assets/images/modern-demo/newsletter-image-new.webp';
import filterBG from '../../assets/images/modern-demo/section-bg-pattern-2.webp';

// Page Section
import ModernBanner2 from '../../banner/modern-banner-2';
import VehiclesSearchSection from './vehicles-search-section';
import AboutSection from './about-section';
import WhyChooseSection from './why-choose-section';
import ClientLogoSection from './client-logo';

// SCSS
import './home.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ModernHome2() {
  const CarList = useCarList();  // Fetch data once when the component loads

  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          
          {/* Main Banner */}
          <ModernBanner2 />

          {/* Filter Section */}
          <section className="section-ptb bg-primary car-directory-section">
              <div className="section-overlay" data-overlay-opacity="0.2" style={{backgroundImage: `url(${filterBG})`}}></div>
              <VehiclesSearchSection />
          </section>

          {/* About Left/Right Section */}
          <section className="section-ptb bg-gradient-grey provides-best-solution">
            <div className=""><AboutSection /></div>
            <div className="section-pt"><ClientLogoSection /></div>
          </section>
          
          {/* Feature Car section*/}
          <section className="feature-car section-ptb">
            <Container>
              <Row className="row align-items-center mb-lg-4">
                <Col lg={7}>
                  <SectionTitle
                    extraClass="section-title-new mb-0"
                    title="Our Featured Cars"
                    content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
                  />
                </Col>
                <Col lg={5} className="text-lg-end mt-4 mt-lg-0">
                  <Button btnClass="btn-lg me-3" btnText="All Feature Car" btnURL="/car-grid" />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
                    {CarList.map((val, index) => {
                        return (
                          <VehicleShowcase3
                            className="car-item-grid"
                            key={index}
                            imgSrc={val.imgSrc}
                            carName={val.carName}
                            carPrice={val.carPrice}
                            carNewPrice={val.carNewPrice}
                            id={val.id}
                            attri={val.attributes}
                            lightboxImages={val.gallery}
                          />
                        );
                      })}
                    </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Action Box section*/}
          <section className="actionbox_section">
            <Container>
              <Row className="bg-primary align-items-center mx-0">
                <Col lg={4}>
                  <SectionTitle
                    tag="h4"
                    extraClass="section-title-new section-title-light mb-0"
                    title="Why Choose Our Car Services"
                  />
                </Col>  
                <Col lg={4} className="justify-content-lg-center d-flex my-4 my-lg-0">
                  <Link to="#" className="actionbox-infobox-icon"><i className="fas fa-phone"></i></Link>
                </Col>  
                <Col lg={4}>
                  <div className="text-lg-end">
                    <div className="actionbox-infobox-description">Get Professional Help</div>
                    <h5 className="actionbox-infobox-title">(007) 123 456 7890</h5>
                  </div>
                </Col>  
              </Row>
            </Container>
          </section>

          {/* Why Choose Us section*/}
          <section className="section-ptb why-choose-services_section bg-dark">
            <WhyChooseSection />
          </section>

          {/* Infobox section*/}
          <section className="section-ptb bg-gradient-grey">
            <Container>
              <Row className="row align-items-center mb-lg-4">
                <Col lg={6}>
                  <SectionTitle
                    extraClass="section-title-new"
                    title="Get Latest Updates And Best Offers"
                    content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
                  />
                  <NewsletterForm
                    newsLetterStyle="newsletter-style-3"
                    buttontext="Send Message"
                  />
                </Col>
                <Col lg={6} className="mt-4 mt-lg-0">
                  <img className="img-fluid" src={newsletterImg} alt="" />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1 mt-4">
                    <InfoBox className="infobox-shadow"
                      infoStyle="style-2"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-air-conditioning"
                      title="All Brands"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                    />
                    <InfoBox className="infobox-shadow"
                      infoStyle="style-2"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-alloy-wheel"
                      title="Free Support"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                    />
                    <InfoBox className="infobox-shadow"
                      infoStyle="style-2"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-inspection"
                      title="Affordable"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          
          {/* Latest news  section*/}
          <section className="section-ptb latest-news-section">
            <Container>
              <Row className="row justify-content-center">
                <Col md={12} lg={8}>
                  <SectionTitle
                    extraClass="text-center section-title-new"
                    title="Our Recent News & Articles"
                    content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-4 mb-md-0">
                  {BlogList.map((val, ind) => {
                      if (ind < 1) {
                        return (
                          <PostStyle4
                            key={ind}
                            id={val.id}
                            postType="first-large"
                            imgSrc={val.imgSrc}
                            metaDate={val.metaDate}
                            category={val.category}
                            title={val.title}
                            shortDescription={val.shortDescription.slice(0, 150)}
                          />
                        );
                      }
                      return null;
                    })}
                </Col>
                <Col md={6}>
                    {BlogList.slice(1).map((val, ind) => {
                      if (ind < 3) {
                        return (
                          <PostStyle4
                            key={ind}
                            id={val.id}
                            imgSrc={val.imgSrc}
                            metaDate={val.metaDate}
                            category={val.category}
                            title={val.title}
                          />
                        );
                      }
                      return null;
                    })}
                </Col>
              </Row>
            </Container>
          </section>
          
        </div>
      </div>
    </>
  );
}

export default ModernHome2;
