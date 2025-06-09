import React from 'react';
import { Link } from 'react-router-dom';
import '../widget.scss';

function ContactInfo(props) {
  const textStyle = { color: 'white' };
  const linkStyle = { color: 'white', textDecoration: 'none' };

  return (
    <>
      <div
        className={`widget widget-contact-info ${props.theme || ''} ${
          props.className || ''
        }`}
        style={textStyle}
      >
        {props?.title && <h3 className="widget-title" style={textStyle}>{props.title}</h3>}
        {props?.content && (
          <p className={`${props.contentclass || ''}`} style={textStyle}>
            {props.content}
          </p>
        )}
        <ul className="info-list">
          <li key="item1" style={textStyle}>
            {props.theme === 'contact-info-style-01' && (
              <i className="fa fa-location-dot"></i>
            )}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && (
                  <label style={textStyle}>Address :</label>
                )}
            {props?.address ? <span>{props.address}</span> : <span>Tirane, Albania</span>}
          </li>
          <li key="item2" style={textStyle}>
            {props.theme === 'contact-info-style-01' && (
              <i className="fa-solid fa-phone"></i>
            )}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && (
                  <label style={textStyle}>Phone :</label>
                )}
            <Link to="/contact" className="phone-number" style={linkStyle}>
              +355 68 202 7948
            </Link>
          </li>
          <li key="item3" style={textStyle}>
            {props.theme === 'contact-info-style-01' && (
              <i className="far fa-envelope"></i>
            )}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && (
                  <label style={textStyle}>Email :</label>
                )}
            <a href="mailto:classashenssor@gmail.com" style={linkStyle}>
              classashenssor@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactInfo;
