import React from 'react';
import { Link } from 'react-router-dom';

// Site Data
import BlogList from '../../data/blog-list';

// Import styles
import '../widget.scss';

function RecentPostWidget(props) {
  return (
    <>
      <div className={`widget widget-recent-post ${props.className || '' }`}>
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
          <div className="recent-post-list">

            {BlogList.map((item, ind) => {
              if (ind < (props.totalPost || 3)) {
                return (
                  <div key={ind} className="recent-post">
                    <div className="recent-post-image">
                      <img className="img-fluid" src={item.imgSrc} alt={item.title} />
                    </div>
                    <div className="recent-post-info">
                      <h4 className="entry-title">
                        <Link to={{ pathname: `/blog-details/${item.id}` }}>{item.title}</Link>
                      </h4>
                      <div className="entry-meta">
                        <i className="fa-regular fa-calendar-days"></i>
                        {item.metaDate.map((val, index) => {
                          return (
                            <div className="post-date" key={index}>
                              <span className="month">{val.month}</span>
                              <span className="day">{val.date},</span>
                              <span className="year">{val.year}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    </>
  );
}

export default RecentPostWidget;
