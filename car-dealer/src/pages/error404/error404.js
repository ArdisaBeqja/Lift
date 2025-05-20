import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import SearchPages from '../../component/search/search';

// Site Data
import Image404 from '../../assets/images/car/error.webp';

// SCSS
import './error-404.scss';
import '../../component/button/button.scss';

function Error404() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="404 Error"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'pages', path: '#' },
            { label: '404 Error', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col md={12}>
                  <div className="error-content text-center">
                    <h2 className="error-number">404</h2>
                    <img className="img-fluid" src={Image404} alt="" />
                    <h3 className="title">Ooopps: </h3>
                    <strong>
                      The Page you were looking for, couldn't be found
                    </strong>
                    <p>
                      Can't find what you looking for? Take a moment and do a
                      search below or start from our{' '}
                      <Link to="/"> Home Page</Link>
                    </p>
                  </div>
                  <div className="error-search">
                    <Row className="justify-content-center">
                      <Col md={8}>
                        <SearchPages buttontext="Search" />
                      </Col>
                    </Row>
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

export default Error404;
