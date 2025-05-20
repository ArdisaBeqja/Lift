import React from 'react';
import '../widget.scss';

function AboutText(props) {
  return (
    <>
      <div className="widget widget-about-text">
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
        <div className="about-text">{props.content}</div>
      </div>
    </>
  );
}

export default AboutText;
