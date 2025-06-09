import React from 'react';
import { Link } from 'react-router-dom';

// Site Data
import { ArchivesList } from '../../data/sidebar';

// Import styles
import '../widget.scss';

function ArchivesWidget(props) {
  return (
    <>
      <div className={`widget widget-archives ${props.className || '' }`}>
        {props?.title && <h3 className="widget-title">Why Choose us</h3>}
        <div className="items-list">
          <ul>
            {ArchivesList.map((item, index) => (
              <li key={index}   style={{ textDecoration: 'none' }}
>
                <Link key={item.id} to={item.url}  style={{ textDecoration: 'none' }}>
                  <i className="fa fa-angle-right"></i>
                  {item.item}
                  <span className="">{item.number}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ArchivesWidget;
