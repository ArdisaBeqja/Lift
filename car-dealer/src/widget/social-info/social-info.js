import React from 'react';
import { Link } from 'react-router-dom';

// Import styles
import '../widget.scss';
import './social.scss';

function SocialInfo(props) {
  return (
    <>
      <div className={`widget widget-social-info ${props.className || ''}`}>
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
        <ul
          className={`social-list ${props.theme || ''} ${
            props.gap ? `grid-gap-${props.gap || ''}` : ''
          } ${props.size ? `icon-${props.size || ''}` : ''}`}
        >
          <li key="social1">
            <Link to="http://www.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li key="social2">
            <Link to="http://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li key="social3">
            <Link to="https://www.linkedin.com">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </li>
          <li key="social4">
            <Link to="https://www.instagram.com">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li key="social5">
            <Link to="https://dribbble.com/">
              <i className="fab fa-dribbble"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
function SocialInfo02(props) {
  return (
    <>
      <div className={`widget widget-social-info ${props.className || ''}`}>
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
        <ul
          className={`social-list social-list-02 ${props.theme || ''} ${
            props.gap ? `grid-gap-${props.gap || ''}` : ''
          } ${props.size ? `icon-${props.size || ''}` : ''}`}
        >
          <li key="social1">
            <Link to="http://www.facebook.com" className="facebook">
              facebook<i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li key="social2">
            <Link to="https://www.instagram.com" className="instagram">
              instagram<i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li key="social3">
            <Link to="http://www.twitter.com" className="twitter">
              twitter<i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li key="social4">
            <Link to="https://in.pinterest.com/" className="pinterest">
              pinterest<i className="fa-brands fa-pinterest-p"></i>
            </Link>
          </li>
          <li key="social5">
            <Link to="https://www.behance.net/" className="behance">
              behance<i className="fa-brands fa-behance"></i>
            </Link>
          </li>
          <li key="social6">
            <Link to="https://dribbble.com/" className="dribbble">
              dribbble<i className="fab fa-dribbble"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

function SocialInfo03(props) {
  return (
    <>
      <div className={`widget widget-social-info ${props.className || ''}`}>
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
        <ul
          className={`social-list ${props.sociallistclass || ''} ${
            props.gap ? `grid-gap-${props.gap || ''}` : ''
          } ${props.size ? `icon-${props.size || ''}` : ''}`}
        >
          <li key="social1">
            <Link to="http://www.facebook.com">
              <i className="fab fa-facebook-f"></i>facebook
            </Link>
          </li>
          <li key="social2">
            <Link to="https://www.instagram.com">
              <i className="fa-brands fa-instagram"></i>instagram
            </Link>
          </li>
          <li key="social3">
            <Link to="http://www.twitter.com">
              <i className="fab fa-twitter"></i>twitter
            </Link>
          </li>
          <li key="social4">
            <Link to="https://in.pinterest.com/">
              <i className="fa-brands fa-pinterest-p"></i>pinterest
            </Link>
          </li>
          <li key="social5">
            <Link to="https://www.behance.net/">
              <i className="fa-brands fa-behance"></i>behance
            </Link>
          </li>
          <li key="social6">
            <Link to="https://dribbble.com/">
              <i className="fab fa-dribbble"></i>dribbble
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

function BlogSocialInfo(props) {
  return (
    <>
      <ul className={`social-list ${props.className || ''}`}>
        <li key="social1">
          <Link to="http://www.facebook.com">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li key="social2">
          <Link to="http://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
        <li key="social3">
          <Link to="https://www.instagram.com">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </li>

        <li key="social4">
          <Link to="https://in.pinterest.com/">
            <i className="fa-brands fa-pinterest-p"></i>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default SocialInfo;
export { SocialInfo02, BlogSocialInfo, SocialInfo03 };
