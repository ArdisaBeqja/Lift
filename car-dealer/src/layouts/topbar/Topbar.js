import React from 'react';
import './style.scss';

// Libraries
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TopBar(props) {
  return (
    <div className={`topbar ${props.className || ''}`}>
      <div className={props.containerSize}>
        <Row className="">
          <Col lg="6" md="12">
            <div className="topbar-left text-lg-start text-center">
              <ul className="list-inline">
                <li>
                  <Link to="mailto:support@website.com">
                    <i className="far fa-envelope"></i>support@website.com
                  </Link>
                </li>
                <li>
                  <i className="fa-regular fa-clock"></i>Mon - Sat 8.00 - 18.00.
                  Sunday CLOSED
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" md="12">
            <div className="topbar-right text-lg-end text-center">
              <ul className="list-inline">
                <li>
                  <Link to="tel:0071234567890">
                    <i className="fa-solid fa-phone"></i> (007) 123 456 7890
                  </Link>
                </li>
                <li>
                  <Link to="http://www.facebook.com">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="http://www.twitter.com">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="http://www.youtube.com">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TopBar;
