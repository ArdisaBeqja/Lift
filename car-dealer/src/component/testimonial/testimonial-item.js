import React from 'react';
import './testimonial.scss';

function TestimonialStyle1(props) {
  return (
    <>
      <div
        className={`testimonial-item testimonial-style-01 ${
          props.extraClass || ''
        }`}
      >
        <div className="testimonial-image">
          <img className="img-fluid" src={props.testimonialImg} alt="" />
        </div>

        <div className="testimonial-box">
          <div className="testimonial-avatar">
            <img className="img-fluid" src={props.authorImg} alt="" />
          </div>

          <div className="testimonial-info">
            <h6 className="author-name">{props.authorName}</h6>
            <span className="author-position">{props.authorPosition}</span>
          </div>

          <div className="testimonial-content">
            <p>{props.description}</p>
            <i className={props.icon}></i>
          </div>
        </div>
      </div>
    </>
  );
}

function TestimonialStyle2(props) {
  return (
    <>
      <div
        className={`testimonial-item testimonial-style-02 ${
          props.extraClass || ''
        }`}
      >
        <div className="testimonial-inner">
          <div className="testimonial-content">
            <i className={props.icon}></i>
            <p>{props.description}</p>
          </div>

          <div className="testimonial-info">
            <div className="testimonial-avatar">
              <img className="img-fluid" src={props.authorImg} alt="" />
            </div>

            <h6 className="author-name">{props.authorName}</h6>
            <span className="author-position">{props.authorPosition}</span>
          </div>
        </div>
      </div>
    </>
  );
}

function TestimonialStyle3(props) {
  return (
    <>
      <div
        className={`testimonial-item testimonial-style-03 ${
          props.extraClass || ''
        }`}
      >
        <div className="testimonial-inner">
          <div className="testimonial-avatar">
            <img className="img-fluid" src={props.authorImg} alt="" />
          </div>

          <div className="testimonial-detail">
            <div className="testimonial-content">
              <i className={props.iconLeft}></i>
              <p>{props.description}</p>
              <i className={props.icon}></i>
            </div>

            <div className="testimonial-info">
              <h6 className="author-name">{props.authorName}</h6>
              <span className="author-position">{props.authorPosition}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialStyle1;
export { TestimonialStyle2 };
export { TestimonialStyle3 };
