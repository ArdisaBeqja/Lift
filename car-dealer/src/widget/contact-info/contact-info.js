import React from 'react';

import { Link } from 'react-router-dom';
import '../widget.scss';

function ContactInfo(props) {
  return (
    <>
      <div
        className={`widget widget-contact-info ${props.theme || ''} ${
          props.className || ''
        }`}
      >
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
        {props?.content && (
          <p className={`${props.contentclass || ''}`}>{props.content}</p>
        )}
        <ul className="info-list">
          <li key="item1">
            {props.theme === 'contact-info-style-01' && (
              <i className="fa fa-location-dot"></i>
            )}
            {/* {props.theme === "contact-info-style-02" && <label>Address :</label>} */}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && (
                  <label>Address :</label>
                )}
            {props?.address ? <span>{props.address}</span> : <span>Tirane, Albania</span>}
          </li>
          <li key="item2">
            {props.theme === 'contact-info-style-01' && (
              <i className="fa-solid fa-phone"></i>
            )}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && (
                  <label>Phone :</label>
                )}
            <Link to="/contact" className="phone-number">
              +355 68 8012 853
            </Link>
          </li>
          <li key="item3">
            {props.theme === 'contact-info-style-01' && (
              <i className="far fa-envelope"></i>
            )}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && (
                  <label>Email :</label>
                )}
                 <a href="mailto:cardealeral@gmail.com">cardealeral@gmail.com</a>

          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactInfo;
