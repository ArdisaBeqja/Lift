import React from 'react';
import './client-logo.scss';

function ClientLogo(props) {
  return (
    <>
      <div
        className={`our-clients ${props.className || ''} ${props.theme || ''}`}
      >
        <div className="our-clients-img">
          <img className="img-fluid" src={props.data} alt="" />
        </div>
      </div>
    </>
  );
}

export default ClientLogo;
