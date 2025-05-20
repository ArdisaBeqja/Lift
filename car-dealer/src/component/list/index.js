import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function List(props) {
  return (
    <>
      <div className="pgs-list-wrapper">
        <ul className={`pgs-list ${props.className || ''}`}>
          {props.data.map((val, index) => (
            <li key={index} className="d-flex">
              {props?.icon && <i className={props.icon}></i>}
              {props.link ? (
                <Link to={val.url}>
                  {val.item}
                  <span>{val.number}</span>
                </Link>
              ) : (
                <span>{val.item}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
