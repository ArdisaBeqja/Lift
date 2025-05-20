import React, { memo } from 'react';

// Libraries
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
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.017231421863!2d-79.43780268425046!3d36.09306798010035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88532bae09664ccb%3A0xaa6b8f98d3fb8135!2s220+E+Front+St%2C+Burlington%2C+NC+27215%2C+USA!5e0!3m2!1sen!2sin!4v1475045272926',
};

GoogleMap.propTypes = {
  location: PropTypes.string,
  className: PropTypes.string,
};

export default memo(GoogleMap);
