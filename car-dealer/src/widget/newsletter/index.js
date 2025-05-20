import React from 'react';
import '../widget.scss';
import NewsletterForm from '../../form/newsletter';

function NewsletterWidget(props) {
  return (
    <>
      <div className="widget widget-newsletter">
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
        <div className="about-text">{props.content}</div>
        <NewsletterForm />
      </div>
    </>
  );
}

export default NewsletterWidget;
