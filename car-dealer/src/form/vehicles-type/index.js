import React from 'react';

// Libraries
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TypeData(props) {
  return (
    <>
      <Row>
        {props.type.map((item) => (
          <Col lg={2} md={4} sm={4} key={item.id} className="col-6">
            <Link to="#" className="search-logo-box">
              <img className="img-fluid center-block" src={item.icon} alt={item.title} />
              <h6 className="type-lable">{item.title}</h6>
              <span>{item.totalItem}</span>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default TypeData;
