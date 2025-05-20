import React from 'react';
import { Link } from 'react-router-dom';

// Site Data
import { TagsList } from '../../data/sidebar';

// Import styles
import '../widget.scss';

function TagsWidget(props) {
  return (
    <>
      <div className={`widget widget-tags ${props.className || '' }`}>
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
        <div className="tags-list">
          {TagsList.map((item) => (
            <Link key={item.id} to={item.url}>
              {item.item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default TagsWidget;
