import { useState } from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

function ResponsiveMenu() {
  // Monthly Yearly Swith Class
  const [isActive, setIsActive] = useState('monthly');
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  // Custom Tabs
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { title: 'Tab 1', content: 'Content 1' },
    { title: 'Tab 2', content: 'Content 2' },
  ];

  // Menu Trigger Add Remove Class
  const [activeItems, setActiveItems] = useState([]);
  const toggleItem = (index) => {
    if (activeItems.includes(index)) {
      setActiveItems(activeItems.filter((item) => item !== index));
    } else {
      setActiveItems([...activeItems, index]);
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <section className="section-ptb">
          <Container>
            <Row className="mb-5">
              <Col>
                <div>
                  <span
                    className={isActive ? 'monthly' : 'yearly'}
                    onClick={toggleClass}
                  >
                    Monthly
                  </span>
                  <div className={isActive ? 'monthly' : 'yearly'}>
                    This div will have the "active" class when isActive is true.
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col>
                <div className="custom-tab">
                  <div className="tab-header">
                    {tabs.map((tab, index) => (
                      <div
                        key={index}
                        className={`tab-item ${
                          activeTab === index ? 'active' : ''
                        }`}
                        onClick={() => handleTabClick(index)}
                      >
                        {tab.title}
                      </div>
                    ))}
                  </div>
                  <div className="tab-content">{tabs[activeTab].content}</div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <ul className="mt-5 mb-5">
                  <li className={activeItems.includes(0) ? 'active' : ''}>
                    Home 01{' '}
                    <span
                      onClick={() => toggleItem(0)}
                      className="submenu-trigger"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </li>
                  <li className={activeItems.includes(1) ? 'active' : ''}>
                    Home 02{' '}
                    <span
                      onClick={() => toggleItem(1)}
                      className="submenu-trigger"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </li>
                  <li className={activeItems.includes(2) ? 'active' : ''}>
                    Home 03{' '}
                    <span
                      onClick={() => toggleItem(2)}
                      className="submenu-trigger"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </li>
                  <li className={activeItems.includes(3) ? 'active' : ''}>
                    Home 04{' '}
                    <span
                      onClick={() => toggleItem(3)}
                      className="submenu-trigger"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </li>
                  <li className={activeItems.includes(4) ? 'active' : ''}>
                    Home 05{' '}
                    <span
                      onClick={() => toggleItem(4)}
                      className="submenu-trigger"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default ResponsiveMenu;
