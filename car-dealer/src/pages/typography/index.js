import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import AlertBox, { AlertDismissible, AlertLinks } from '../../component/alert';

const data = [
  { number: '1', firstname: 'Mark', lastname: 'Otto', username: '@mdo' },
  {
    number: '2',
    firstname: 'Mark',
    lastname: 'Otto',
    username: '@TwBootstrap',
  },
  { number: '3', firstname: 'Jacob', lastname: 'Thornton', username: '@fat' },
  { number: '4', firstname: 'Jacob', lastname: 'Thornton', username: '@fat' },
];

function TypoGraphy() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Typography "
          description=""
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Typography ', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="typography-main section-ptb">
            <Container>
              <Row>
                <Col md={12}>
                  <div className="typography">
                    <h4 className="title">typography</h4>
                    <h1> h1. heading</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Doloremque dolores quidem qui aspernatur ipsum accusantium
                      fugiat soluta commodi esse.
                    </p>
                    <h2> h2. heading</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Doloremque dolores quidem qui aspernatur ipsum accusantium
                      fugiat soluta commodi esse.
                    </p>
                    <h3> h3. heading</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Doloremque dolores quidem qui aspernatur ipsum accusantium
                      fugiat soluta commodi esse.
                    </p>
                    <h4> h4. heading</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Doloremque dolores quidem qui aspernatur ipsum accusantium
                      fugiat soluta commodi esse.
                    </p>
                    <h5> h5. heading</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Doloremque dolores quidem qui aspernatur ipsum accusantium
                      fugiat soluta commodi esse.
                    </p>
                    <h6> h6. heading</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Doloremque dolores quidem qui aspernatur ipsum accusantium
                      fugiat soluta commodi esse.
                    </p>
                    <div className="typography-teg">
                      <h5 className="title">Marked text</h5>
                      <span>
                        You can use the mark tag to <mark>highlight</mark> text.
                      </span>
                    </div>
                    <div className="typography-teg">
                      <h5 className="title">Deleted text</h5>
                      <del>
                        This line of text is meant to be treated as deleted
                        text.
                      </del>
                    </div>
                    <div className="typography-teg">
                      <h5 className="title">Strikethrough text</h5>
                      <s>
                        This line of text is meant to be treated as no longer
                        accurate.
                      </s>
                    </div>
                    <div className="typography-teg">
                      <h5 className="title">Underlined text</h5>
                      <u>This line of text will render as underlined</u>
                    </div>
                  </div>
                  <hr className="gray" />
                  <div className="ordered-lists">
                    <h4 className="title">Ordered Lists</h4>
                    <Row>
                      <Col md={4}>
                        <ol>
                          <li>Lorem ipsum dolor sit amet. </li>
                          <li>Consectetur adipisicing elit. </li>
                          <li>Deserunt accusamus explicabo.</li>
                          <li>Cumque voluptatum assumenda.</li>
                        </ol>
                      </Col>
                      <Col md={4}>
                        <ol className="roman">
                          <li>Lorem ipsum dolor sit amet. </li>
                          <li>Consectetur adipisicing elit. </li>
                          <li>Deserunt accusamus explicabo.</li>
                          <li>Cumque voluptatum assumenda.</li>
                        </ol>
                      </Col>
                      <Col md={4}>
                        <ol className="alpha mb-0">
                          <li>Lorem ipsum dolor sit amet. </li>
                          <li>Consectetur adipisicing elit. </li>
                          <li>Deserunt accusamus explicabo.</li>
                          <li>Cumque voluptatum assumenda.</li>
                        </ol>
                      </Col>
                    </Row>
                  </div>
                  <hr className="gray" />
                  <div className="unordered-lists">
                    <h4 className="title">Unordered Lists</h4>
                    <Row>
                      <Col md={4}>
                        <ul className="square">
                          <li>Lorem ipsum dolor sit amet. </li>
                          <li>Consectetur adipisicing elit. </li>
                          <li>Deserunt accusamus explicabo.</li>
                          <li>Cumque voluptatum assumenda.</li>
                        </ul>
                      </Col>
                      <Col md={4}>
                        <ul className="disc">
                          <li>Lorem ipsum dolor sit amet. </li>
                          <li>Consectetur adipisicing elit. </li>
                          <li>Deserunt accusamus explicabo.</li>
                          <li>Cumque voluptatum assumenda.</li>
                        </ul>
                      </Col>
                      <Col md={4}>
                        <ul className="list-style-1">
                          <li>
                            <i className="fa fa-angle-right"></i>Lorem ipsum
                            dolor sit amet.{' '}
                          </li>
                          <li>
                            <i className="fa fa-angle-right"></i>Consectetur
                            adipisicing elit.{' '}
                          </li>
                          <li>
                            <i className="fa fa-angle-right"></i>Deserunt
                            accusamus explicabo.
                          </li>
                          <li>
                            <i className="fa fa-angle-right"></i>Cumque
                            voluptatum assumenda.
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                  <hr className="gray" />
                  <div className="unordered-lists">
                    <h4 className="title">blockquote</h4>
                    <blockquote>
                      The future belongs to a different kind of person with a
                      different kind of mind: artists, inventors,
                      storytellers-creative and holistic ‘right-brain’ thinkers
                      whose abilities mark the fault line between who gets ahead
                      and who doesn’t.
                      <cite> – Daniel Pink</cite>
                    </blockquote>
                  </div>
                  <hr className="gray" />
                  <div className="unordered-lists">
                    <h4 className="title">Table</h4>
                    <Table responsive bordered>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((val, key) => {
                          return (
                            <tr key={key}>
                              <td>{val.number}</td>
                              <td>{val.firstname}</td>
                              <td>{val.lastname}</td>
                              <td>{val.username}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                  <hr className="gray" />
                  <div className="alerts">
                    <h4 className="title">Alerts</h4>
                    <AlertBox />
                  </div>
                  <hr className="gray" />
                  <div className="alerts">
                    <h4 className="title">Alerts Link</h4>

                    <AlertLinks />
                  </div>
                  <hr className="gray" />
                  <div className="alerts">
                    <h4 className="title"> Alert Dismissible</h4>

                    <AlertDismissible />
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
export default TypoGraphy;
