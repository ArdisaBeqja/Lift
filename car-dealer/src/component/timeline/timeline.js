import React from 'react';
import './timeline.scss';

function Timeline(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h5' } = props;

  return (
    <>
      <div className={`timeline ${props.extraClass || ''}`}>
        <div className="timeline-info-number">
          <span className="timeline-number">{props.stepNumber}</span>
        </div>
        <div className="timeline-info-content">
          <HeadingTag className="timeline-title">{props.title}</HeadingTag>
          {props?.description && (
            <p className="timeline-content">{props.description}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Timeline;
