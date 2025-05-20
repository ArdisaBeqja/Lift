// @flow
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import './tabs.scss';

function TabsPGS(props) {
  return (
    <div className="tabs-main tabs-default">
      <Tab.Container
        id="tabs-default"
        defaultActiveKey={`${props.tabActive || 0}`}
      >
        <Nav className={`nav-tab flex-row ${props.extraClass || ''}`}>
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
  );
}

function TabsPGSLeft(props) {
  return (
    <div className="tabs-main tabs-left">
      <Tab.Container
        id="tabs-default"
        defaultActiveKey={`${props.tabActive || 0}`}
      >
        <Row>
          <Col md={3}>
            <div className="d-flex h-100">
              <Nav
                variant="pills"
                className="flex-column nav-pills w-100 align-self-lg-center"
              >
                {props.tabsTitle.map((item, index) => {
                  return (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={index}>
                        <span className="data-hover" data-title={item.title}>
                          {item?.icon && <i className={item.icon}></i>}
                          {item.title}
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </div>
          </Col>
          <Col md={9} className="mt-4 mt-md-0">
            <Tab.Content className="ms-md-4">
              {props.tabsContent.map((item, index) => {
                return (
                  <Tab.Pane key={index} eventKey={index}>
                    {item.content}
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default TabsPGS;
export { TabsPGSLeft };
