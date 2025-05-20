import React from 'react';
import { Link } from 'react-router-dom';

function FooterMenu(props) {
  return (
    <>
      <div className={`widget footer-menu ${props.className || ''}`}>
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
        <ul className={`footer-link ${props.col || ''}`}>
          {props.data.map((val, index) => (
            <li key={index}>
              <Link to={val.url}>
                <i className="fa-solid fa-angles-right"></i>
                {val.item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FooterMenu;
