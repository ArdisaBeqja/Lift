import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function InfoBox(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h5' } = props;

  return (
    <div className="infobox_wrapper">
      
        {props.infoStyle === 'style-2' ? (
          <div className={`cdhl-infobox style-2 ${props.className || ''} icon-type-${props.icontype || ''}`}>
            <div className={`infobox-icon icon-shape-${props.iconshape || ''}`}>
              <i aria-hidden="true" className={props.icon}></i>
            </div>
            <div className="infobox-content">
              <HeadingTag className="infobox-title">{props.title}</HeadingTag>
              <div className="infobox-description">{props.description}</div>
              {props?.linkurl && (<Link className="infobox-link" to={`${props.linkurl || '#'}`}><span>{props.linktext || 'Read More'}</span><i className="fa-solid fa-arrow-right-long"></i></Link>)}
            </div>
          </div>
        ) : props.infoStyle === 'style-3' ? (
          <div className={`cdhl-infobox style-3 ${props.className || ''} icon-type-${props.icontype || ''}`}>
            <div className="infobox-head">
              <div className={`infobox-icon icon-shape-${props.iconshape || ''}`}>
                <i aria-hidden="true" className={props.icon}></i>
              </div>
              <HeadingTag className="infobox-title">{props.title}</HeadingTag>
            </div>
            <div className="infobox-description">{props.description}</div>
            {props?.linkurl && (<Link className="infobox-link" to={`${props.linkurl || '#'}`}><span>{props.linktext || 'Read More'}</span><i className="fa-solid fa-arrow-right-long"></i></Link>)}
          </div>
        ) : <div className={`cdhl-infobox style-1 ${props.className || ''} icon-type-${props.icontype || ''}`}>
        <div className={`infobox-icon icon-shape-${props.iconshape || ''}`}>
          <i aria-hidden="true" className={props.icon || 'glyph-icon flaticon-alloy-wheel'}></i>
        </div>
        <HeadingTag className="infobox-title">{props.title || 'Infobox Title'}</HeadingTag>
        <div className="infobox-description">{props.description || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}</div>
        {props?.linkurl && (<Link className="infobox-link" to={`${props.linkurl || '#'}`}><span>{props.linktext || 'Read More'}</span><i className="fa-solid fa-arrow-right-long"></i></Link>)}
      </div>}
    </div>
  );
}

export default InfoBox;
