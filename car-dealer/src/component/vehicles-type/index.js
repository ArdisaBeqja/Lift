import React from 'react';

// Libraries
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

// Import Scss
import './style.scss';

function VehiclesType(props) {
  return (
    <div  className={`vehicles-type-wrapper ${props.colorScheme || ''}`}>
      <div className={`vehicles-type-inner ${props.className || ''}`}>
        <Tab.Container id="tabs-default" defaultActiveKey={`${props.tabActive || 0}`}>
          <div className="sort-filters-tab">
            {props?.title && <h5 className="filters-title">{props.title}</h5>}
            <Nav className={`nav-tab`}>
              {props.tabsType.map((item, index) => {
                return (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index}>
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

export default VehiclesType;
