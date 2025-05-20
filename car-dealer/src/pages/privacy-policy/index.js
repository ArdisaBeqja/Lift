import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Component
import SectionTitle from '../../component/section-title/section-title';

function PrivacyPolicy() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="privacy policy"
          description=""
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'privacy policy', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb privacy-policy">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="Protecting your personal information"
                    title="Privacy Policy"
                    separator="separator"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <p>
                    You will begin to realize why, consectetur adipisicing elit.
                    Quidem error quae illo excepturi nostrum blanditiis
                    laboriosam magnam explicabo.
                  </p>
                  <p>
                    eum nihil expedita dolorum odio dolorem, explicabo rem illum
                    magni perferendis. You will begin to realize why,
                    consectetur adipisicing elit. Quidem error quae illo
                    excepturi nostrum blanditiis laboriosam magnam explicabo.
                    Molestias, eum nihil expedita dolorum odio dolorem,
                    explicabo rem illum magni perferendis.
                  </p>
                  <p>
                    You will begin to realize why, consectetur adipisicing elit.
                    Quidem error quae illo excepturi nostrum blanditiis
                    laboriosam magnam explicabo. Molestias, eum nihil expedita
                    dolorum odio dolorem, explicabo rem illum magni perferendis.
                  </p>
                  <h5 className="text-primary">Personal Information</h5>
                  <ul className="list-style-1">
                    <li>
                      <i className="fa fa-angle-right"></i>You will begin to realize
                      why, consectetur
                    </li>
                    <li>
                      <i className="fa fa-angle-right"></i>Quidem error quae illo
                      excepturi nostrum blanditiis laboriosam
                    </li>
                    <li>
                      <i className="fa fa-angle-right"></i>Molestias, eum nihil
                      expedita dolorum odio dolorem
                    </li>
                    <li>
                      <i className="fa fa-angle-right"></i>Eum nihil expedita
                      dolorum odio dolorem
                    </li>
                    <li>
                      <i className="fa fa-angle-right"></i>Explicabo rem illum magni
                      perferendis
                    </li>
                  </ul>
                  <p>
                    You will begin to realize why, consectetur adipisicing elit.
                    Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt
                    sed omnis expedita, commodi dolores. Debitis nemo animi quia
                    deleniti commodi nesciunt illo. Deserunt.
                  </p>

                  <h5 className="text-primary">Use of User Information.</h5>
                  <p>
                    You will begin to realize why, consectetur adipisicing elit.
                    Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt
                    sed omnis expedita, commodi dolores. Debitis nemo animi quia
                    deleniti commodi nesciunt illo. Deserunt.You will begin to
                    realize why, consectetur adipisicing elit. Possimus, ex,
                    quisquam. Nulla excepturi sint iusto incidunt sed omnis
                    expedita, commodi dolores. Debitis nemo animi quia deleniti
                    commodi nesciunt illo. Deserunt.You will begin to realize
                    why, consectetur adipisicing elit. Possimus, ex, quisquam.
                    Nulla excepturi sint iusto incidunt sed omnis expedita,
                    commodi dolores. Debitis nemo animi quia deleniti commodi
                    nesciunt illo. Deserunt.
                  </p>

                  <h5 className="text-primary">Disclosure of User Information.</h5>
                  <p>
                    You will begin to realize why, consectetur adipisicing elit.
                    Autem ullam nostrum dolor alias aspernatur nobis suscipit
                    eaque cumque distinctio eos, beatae deserunt, nihil nam
                    maiores vero, eius harum. Reprehenderit, aspernatur.
                    <Link to="#">support@website.com</Link>
                  </p>

                  <ul className="list-style-1">
                    <li>
                      <i className="fa fa-angle-right"></i>Nulla excepturi sint
                      iusto incidunt sed omnis expedita
                    </li>
                    <li>
                      <i className="fa fa-angle-right"></i>Quidem error quae illo
                      excepturi nostrum blanditiis laboriosam
                    </li>
                    <li>
                      <i className="fa fa-angle-right"></i>Deserunt.You will begin
                      to realize why
                    </li>
                    <li>
                      <i className="fa fa-angle-right"></i>Possimus, ex, quisquam.
                      Nulla excepturi
                    </li>
                  </ul>
                  <p className="mb-0">
                    You will begin to realize why, consectetur adipisicing elit.
                    Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt
                    sed omnis expedita, commodi dolores. Debitis nemo animi quia
                    deleniti commodi nesciunt illo. Deserunt.
                    <Link to="#">support@website.com</Link>
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
