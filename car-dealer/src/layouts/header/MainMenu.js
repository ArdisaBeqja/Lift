import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function MainMenu() {
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowLink(window.innerWidth < 992);
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // on mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [activeItems, setActiveItems] = useState([]);
  const toggleItem = (index) => {
    if (activeItems.includes(index)) {
      setActiveItems(activeItems.filter((item) => item !== index));
    } else {
      setActiveItems([...activeItems, index]);
    }
  };

  return (
    <ul className="main-navbar">
      {/* Home */}
      <li className={`has-dropdown ${activeItems.includes(0) ? 'menu-active' : ''}`}>
        <Link to="#">
          Kreu
          {showLink ? (
            <span onClick={() => toggleItem(0)} className="submenu-trigger">
              <i className="fa-solid fa-angle-down"></i>
            </span>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </Link>
        <ul className="submenu">
          <li>
            <NavLink to="/">Kreu</NavLink>

          </li>
        </ul>
      </li>

      {/* Pages */}
      <li className={`has-dropdown ${activeItems.includes(1) ? 'menu-active' : ''}`}>
        <Link to="#">
         Faqet
          {showLink ? (
            <span onClick={() => toggleItem(1)} className="submenu-trigger">
              <i className="fa-solid fa-angle-down"></i>
            </span>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </Link>
        <ul className="submenu">
          <li>
            <NavLink to="/about-02">Rreth Nesh</NavLink>
          </li>
          {/* <li>
            <NavLink to="/service">Service</NavLink>
          </li> */}
        </ul>
      </li>

      {/* Blog */}
      <li className={`has-dropdown ${activeItems.includes(2) ? 'menu-active' : ''}`}>
        <Link to="#">
                  Kontakto
          {showLink ? (
            <span onClick={() => toggleItem(2)} className="submenu-trigger">
              <i className="fa-solid fa-angle-down"></i>
            </span>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </Link>
        <ul className="submenu">
          <li>
            <NavLink to="/contact">Kontakto</NavLink>
          </li>
        </ul>
      </li>
      <li className={`has-dropdown ${activeItems.includes(2) ? 'menu-active' : ''}`}>
        <Link to="#">
          Artikuj
          {showLink ? (
            <span onClick={() => toggleItem(2)} className="submenu-trigger">
              <i className="fa-solid fa-angle-down"></i>
            </span>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </Link>
        <ul className="submenu">
          <li>
            <NavLink to="/blog-details/1">Artikuj</NavLink>
          </li>
        </ul>
      </li>

     

    </ul>
  );
}

export default MainMenu;
