import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

function Button(props) {
  return (
    <>
      <Link
        className={`button ${props.btnClass || ''}`}
        to={`${props.btnURL || '#'}`}
      >
        {`${props.btnText || 'Button'}`}
      </Link>
    </>
  );
}

export default Button;
