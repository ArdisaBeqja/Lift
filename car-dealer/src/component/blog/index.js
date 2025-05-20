import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { BlogSocialInfo } from '../../widget/social-info/social-info';

// Import styles
import './blog.scss';

function BlogClassic(props) {
  return (
    <>
      <div className={`blog-post blog-entry ${props.postType || ''}`}>
        <div className="post-image">
          <img className="w-100 img-fluid" src={props.imgSrc} alt={props.title} />
        </div>
        <div className="post-title">
          <Link to={{ pathname: `/blog-details/${props.id}` }}>{props.title}</Link>
        </div>
        <div className="entry-content">
          <div className="entry-meta">
            <ul>
              <li key="meta-bydealer" className="entry-meta-bydealer">
                <Link to="#"><i className="fa-solid fa-user"></i>{props.bydealer}</Link>
              </li>
              <li key="meta-comments" className="entry-meta-comments">
                <Link to="#"><i className="fa-solid fa-comments"></i>{props.comments} Comments</Link>
              </li>
              <li key="meta-news" className="entry-meta-news">
                <Link to="#"><i className="fa-solid fa-folder-open"></i>{props.news}</Link>
              </li>
              <li key="meta-like" className="entry-meta-like">
                <Link to="#"><i className="fa-solid fa-heart"></i>{props.like}</Link>
              </li>
            </ul>
          </div>
          <div className="entry-description">
            <p>{props.shortDescription}</p>
          </div>
        </div>
        <div className="entry-share">
          {props?.buttontext && (
            <Link to={{ pathname: `/blog-details/${props.id}` }} className="button">{props.buttontext}</Link>
          )}
          <div className="share">
            <Link to="#"><i className="fa-solid fa-share-nodes"></i></Link>
            <div className="blog-social">
              <BlogSocialInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PostStyle1(props) {
  return (
    <>
      <div className={`latest-news ${props.postType || ''}`}>
        <div className="latest-news-image">
          <img className="img-fluid" src={props.imgSrc} alt={props.title} />
        </div>
        <div className="latest-news-info">
          <h4 className="news-title"><Link to={{ pathname: `/blog-details/${props.id}` }}>{props.title}</Link></h4>
          <div className="entry-meta">
            <ul>
              {props?.metaDate && (
                <li key="meta-date" className="entry-meta-date">
                  {props.metaDate.map((val, index) => {
                    return (
                      <div className="post-date" key={index}>
                        <span className="month">{val.month}</span>
                        <span className="day">{val.date},</span>
                        <span className="year">{val.year}</span>
                      </div>
                    );
                  })}
                </li>
              )}
              <li key="meta-postby" className="entry-meta-author">post by {props.authorName}</li>
            </ul>
          </div>
          <div className="entry-description">
            {props?.shortDescription && <p>{props.shortDescription}</p>}
            {props?.mainDescription && <p>{props.mainDescription}</p>}
          </div>
          {props?.buttontext && (
            <Link to={{ pathname: `/blog-details/${props.id}` }} className={`button border ${props.buttonClass || ''}`}>{props.buttontext}</Link>
          )}
        </div>
      </div>
    </>
  );
}

function PostStyle2(props) {
  return (
    <>
      <div className={`blog-2 ${props.postType || ''}`}>
        <div className="blog-image">
          <img className="w-100 img-fluid" src={props.imgSrc} alt={props.title} />
          {props?.metaDate && (
            <>
              {props.metaDate.map((val, index) => {
                return (
                  <div className="post-date" key={index}>
                    <span className="month">{val.month}</span>
                    <span className="day">{val.date}</span>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="blog-content">
          <div className="blog-admin-main">
            <div className="blog-admin">
              <img className="img-fluid" src={props.authorImg} alt={props.title} />
              <span>{props.authorName}</span>
            </div>
            <div className="blog-meta">
              <ul>
                <li key="meta-comments" className="entry-meta-comments">
                  <Link to="#"><i className="fa-solid fa-comments"></i><span>{props.comments}</span></Link>
                </li>
                <li key="meta-share" className="share">
                  <Link to="#"><i className="fa-solid fa-share-nodes"></i><span>...</span></Link>
                  <div className="blog-social"><BlogSocialInfo /></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-description">
            <div className="post-title">
              <Link to={{ pathname: `/blog-details/${props.id}` }}>{props.title}</Link>
            </div>
            <div className="separator"></div>
            <p>{props.shortDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function PostStyle3(props) {
  return (
    <>
      <div className={`blog-post-3 ${props.postType || ''}`}>
        <div className="blog-image">
          <img className="w-100 img-fluid" src={props.imgSrc} alt={props.title} />
          {props?.metaDate && (
            <>
              {props.metaDate.map((val, index) => {
                return (
                  <div className="post-date" key={index}>
                    <span className="day">{val.date}</span>
                    <span className="month">{val.month}</span>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="blog-content">
          <div className="post-category"><span>{props.category}</span></div>
          <h4 className="post-title"><Link to={{ pathname: `/blog-details/${props.id}` }}>{props.title}</Link></h4>
          <div className="post-btn">
            <Link to={{ pathname: `/blog-details/${props.id}` }} className={`post-link ${props.buttonClass || ''}`}>Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
          </div>
        </div>
      </div>
    </>
  );
}

function PostStyle4(props) {
  return (
    <>
      <div className={`blog-post-4 blog-post-list ${props.postType || ''}`}>
        <div className="blog-image">
          <img className="w-100 img-fluid" src={props.imgSrc} alt={props.title} />
        </div>
        <div className="blog-content">
          {props?.metaDate && (
            <>
              {props.metaDate.map((val, index) => {
                return (
                  <div className="post-date" key={index}>
                    <span className="month">{val.month}</span>
                    <span className="day">{val.date},</span>
                    <span className="year">{val.year}</span>
                  </div>
                );
              })}
            </>
          )}
          <h4 className="post-title"><Link to={{ pathname: `/blog-details/${props.id}` }}>{props.title}</Link></h4>
          {props?.shortDescription && <p>{props.shortDescription}</p>}
          <div className="post-btn">
            <Link to={{ pathname: `/blog-details/${props.id}` }} className={`post-link ${props.buttonClass || ''}`}>Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogClassic;
export { PostStyle1, PostStyle2, PostStyle3, PostStyle4 };
