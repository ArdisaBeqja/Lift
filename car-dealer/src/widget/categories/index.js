import React from 'react';
import { Link } from 'react-router-dom';

// Site Data
import { CategoriesList } from '../../data/sidebar';

// Import styles
import '../widget.scss';

function CategoriesWidget(props) {
  return (
    <>
      <div className={`widget widget-categories ${props.className || '' }`}>
        {props?.title && <h3 className="widget-title">{props.title}</h3>}
        <div className="items-list">
          <ul>
            {CategoriesList.map((item, index) => (
              <li key={index}>
                <Link key={item.id} to={item.url}>
                  <i className="fa fa-angle-right"></i>
                  {item.item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CategoriesWidget;
