import React from 'react';
import { Link } from 'react-router-dom';
import './action-box.scss';

function ActionBox(props) {
  return (
    <>
      <div className={`action-box ${props.extraClass || ''}`}>
        <div className="action-content">
          {props?.title && <h2 className="action-box-title">{props.title}</h2>}
          <p>{`${
            props.content ||
            'We provide solutions for all types of big industries'
          }`}</p>
        </div>
        <Link
          className={`${props.btnClass || 'button'}`}
          to={`${props.btnURL || '#'}`}
        >
          {`${props.btnText || 'Get A Quote'}`}{' '}
        </Link>
      </div>
    </>
  );
}

export default ActionBox;
