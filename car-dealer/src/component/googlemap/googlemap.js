import React, { memo } from 'react';
import { PropTypes } from 'prop-types';

const GoogleMap = (props) => {
  return (
    <iframe
      title="Google Map"
      className={props.className}
      src={props.location}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

GoogleMap.defaultProps = {
  location:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7599774090854!2d19.7966483!3d41.3140849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350313618bd7763%3A0x7f2fd3feda457e02!2sClass%20Ashensor!5e0!3m2!1sen!2s!4v1749448282519!5m2!1sen!2s',
};

GoogleMap.propTypes = {
  location: PropTypes.string,
  className: PropTypes.string,
};

export default memo(GoogleMap);
