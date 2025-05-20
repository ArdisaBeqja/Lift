import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../../component/section-title/section-title';

function TermsConditions() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Terms and Conditions "
          description=""
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Terms and Conditions ', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb terms-and-conditions">
            <Container>
              <Row className="justify-content-center">
                <Col lg={12}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="Protecting your personal information"
                    title="Terms And Conditions"
                    separator="separator"
                  />
                </Col>
                <Col lg={12}>
                  <h5 className="text-primary">1. Description of Service</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente, distinctio iste praesentium totam quasi tempore,
                    magnam ipsum cum animi at fuga alias harum quo quibusdam
                    odit eum reprehenderit consectetur suscipit!
                  </p>

                  <h5 className="text-primary">2. Your Registration Obligations</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio nesciunt officia culpa nostrum maxime vero
                    architecto, corporis placeat repudiandae minima facere
                    animi, pariatur fugit dignissimos qui error est nulla.
                    Doloribus.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Distinctio nesciunt officia culpa nostrum
                    maxime vero architecto, corporis placeat repudiandae minima
                    facere animi, pariatur fugit dignissimos qui error est
                    nulla. Doloribus.
                  </p>

                  <h5 className="text-primary">
                    3. User Account, Password, and Security
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente, distinctio iste praesentium totam quasi tempore,
                    magnam ipsum cum animi.
                  </p>

                  <h5 className="text-primary">4. User Conduct</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente, distinctio iste praesentium totam quasi tempore,
                    magnam ipsum cum animi. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Laudantium vel recusandae ad
                    impedit ipsum, vitae facere expedita! Voluptatem iure
                    dolorem dignissimos nisi magni a dolore, et inventore optio,
                    voluptas, obcaecati.
                  </p>

                  <ul className="list-style-1">
                    <li>
                      <i className="fa fa-angle-right"></i> Lorem ipsum dolor sit
                      amet, consectetur
                    </li>
                    <li>
                      <i className="fa fa-angle-right"></i> Quidem error quae illo
                      excepturi nostrum blanditiis laboriosam
                    </li>
                    <li>
                      <i className="fa fa-angle-right"></i> Molestias, eum nihil
                      expedita dolorum odio dolorem
                    </li>
                    <li>
                      <i className="fa fa-angle-right"></i> Eum nihil expedita
                      dolorum odio dolorem
                    </li>
                    <li>
                      <i className="fa fa-angle-right"></i> Explicabo rem illum
                      magni perferendis
                    </li>
                  </ul>

                  <h5 className="text-primary">5. International Use</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente, distinctio iste praesentium totam quasi tempore,
                    magnam ipsum cum animi. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Laudantium vel recusandae ad
                    impedit ipsum, vitae facere expedita! Voluptatem iure
                    dolorem dignissimos nisi magni a dolore, et inventore optio,
                    voluptas, obcaecati. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Voluptate incidunt aliquam sint, magnam
                    excepturi quas a, id doloremque quasi iusto quo consequuntur
                    dolorum neque optio ipsum, rerum nesciunt illo iure.
                  </p>

                  <Link className="button red" to="#">
                    <span>Accept</span>
                  </Link>
                  <Link className="button red" to="#">
                    <span>Close</span>
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default TermsConditions;
