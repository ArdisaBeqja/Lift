import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function FeatureInfo(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h4' } = props;

  return (
    <div className={`feature-box ${props.className || ''}`}>
      {props?.icon && (
        <div className="feature-box-icon">
          <i className={`feature-icon ${props.icon}`}></i>
        </div>
      )}
      <div className="feature-box-description">
        <HeadingTag className="feature-box-title">{props.title}</HeadingTag>
        {props?.content && (
          <p className="feature-box-content">{props.content}</p>
        )}
        {props?.link && (
          <Link className="" to={`${props.link || '#'}`}>
            {props.linktext}
          </Link>
        )}
      </div>
    </div>
  );
}

export default FeatureInfo;
