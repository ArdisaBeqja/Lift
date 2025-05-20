import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import { Container, Row } from 'react-bootstrap';

// Site Data
import PagaHeaderImg from '../../assets/images/page-header/page-header-bg2.webp';

// SCSS
import './page-header.scss';

function PageHeader(props) {
  return (
    <div
      className={`page-header ${props.bgImageHide ? 'bg-hide' : ''} theme-${props.theme}`}
      style={
        props.bgImageHide
          ? null
          : {
              backgroundImage: `url(${props.PagaHeaderBg || PagaHeaderImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundAttachment: 'inherit',
            }
      }
    >
      {props.bgImageHide ? null : (
        <div
          className="page-header-overlay"
          style={props.overlay ? { backgroundColor: props.overlay } : null}
        ></div>
      )}
      <div className="page-header-wrapper">
        <Container>
          <Row className="d-flex justify-content-center">
            <div className={props.colSize || 'col-md-12'}>
              <div className="page-header-inner">
                <div className="page-header-title">
                  <h2 className="header-title">{props.title}</h2>
                  {props?.description && <p>{props.description}</p>}
                </div>
                {props?.breadCrumbItems && (
                  <ul className="page-breadcrumbs">
                    {props.breadCrumbItems.map((item, index) => {
                      return item.active ? (
                        <li key={index} className="breadcrumb-item active">
                          {item.label}
                        </li>
                      ) : (
                        <li key={index} className="breadcrumb-item">
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default PageHeader;
