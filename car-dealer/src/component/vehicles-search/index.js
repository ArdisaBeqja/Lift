// @flow
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import './style.scss';

function VehiclesSearch(props) {
  return (
    <div  className={`vehicles-search-wrapper ${props.colorScheme || ''}`}>
      <div className={`vehicles-search-inner ${props.className || ''}`}>
        <Tab.Container id="tabs-default" defaultActiveKey={`${props.tabActive || 0}`}>
          <div className="sort-filters-tab">
            {props?.title && <h6 className="filters-title">{props.title}</h6>}
            <Nav className={`nav-tab`}>
              {props.tabsTitle.map((item, index) => {
                return (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index}>
                      {item?.icon && <i className={item.icon}></i>}
                      {item.title}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </div>

          <Tab.Content>
            {props.tabsContent.map((item, index) => {
              return (
                <Tab.Pane key={index} eventKey={index}>
                  {item.content}
                </Tab.Pane>
              );
            })}
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}

export default VehiclesSearch;
