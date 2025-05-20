import React from 'react';
import { Link } from 'react-router-dom';
import './content-box.scss';

function ContentBox(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h5' } = props;

  return (
    <div className={`content-box ${props.className || ''}`}>
      <div className="box-info">
        <i className={props.icon}></i>
        <HeadingTag className="content-box-title">{props.title}</HeadingTag>
        <p>{props.description}</p>
      </div>
      <Link className="btn-link" to="">
        Read more
      </Link>
      <div
        className="content-box-img"
        style={{ backgroundImage: `url(${props.imgsrc})` }}
      ></div>
      <span className="border"></span>
    </div>
  );
}

function ContentBox02(props) {
  // Title Default H2 Tag with Props

  return (
    <div className={`content-box ${props.className || ''}`}>
      <i className={props.icon}></i>
      <Link className="title" to="">
        {props.title}
      </Link>
      <p>{props.description}</p>

      <Link className="btn-link" to="">
        Read more <i className="fa-solid fa-angles-right"></i>
      </Link>
      <div
        className="content-box-img"
        style={{ backgroundImage: `url(${props.imgsrc})` }}
      ></div>
    </div>
  );
}

export default ContentBox;
export { ContentBox02 };
