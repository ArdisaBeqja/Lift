import React from 'react';
import './style.scss';

function OpeningHours(props) {
  return (
    <>
      <div className="pgs-openinghours-wrapper">
        <ul className={`opening-hours-list ${props.className || ''}`}>
          {props.data.map((val, index) => (
            <li key={index}>
              {props?.icon && <i className={props.icon}></i>}
              <strong>{val.day}</strong>
              <span>{val.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default OpeningHours;
