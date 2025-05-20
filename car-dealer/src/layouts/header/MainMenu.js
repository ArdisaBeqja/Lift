import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MainMenu() {
  // Mobile Submenu Trigger Show after 992
  const [showLink, setShowLink] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 992) {
        setShowLink(true);
      } else {
        setShowLink(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial render
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <ul className="main-navbar">
        {/* Home */}
        <li
          key="0"
          className={`has-dropdown ${activeItems.includes(0) ? 'menu-active' : ''}`}
        >
          <Link to="#">
            Home
            {showLink ? (
              <span onClick={() => toggleItem(0)} className="submenu-trigger">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </Link>
          <ul className="submenu">
            <li key="mod-hom-1">
              <NavLink to="/">Modern Home 1</NavLink>
            </li>
            <li key="mod-hom-2">
              <NavLink to="/modern-home2">Modern Home 2</NavLink>
            </li>
            <li key="mod-hom-3">
              <NavLink to="/modern-home3">Modern Home 3</NavLink>
            </li>
          </ul>
        </li>
        {/* Pages */}
        <li
          key="1"
          className={`megamenu ${activeItems.includes(1) ? 'menu-active' : ''}`}
        >
          <Link to="#">
            {' '}
            Pages
            {showLink ? (
              <span onClick={() => toggleItem(1)} className="submenu-trigger">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </Link>
          <div className="megamenu-main">
            <ul className="submenu megamenu-item">
              <li key="mod-about-1">
                <NavLink to="/about-modern">About Modern</NavLink>
              </li>
              <li key="pag-1">
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li key="pag-2">
                <NavLink to="/about-02">About 02</NavLink>
              </li>
              <li key="mod-services-1">
                <NavLink to="/service-modern">Service Modern</NavLink>
              </li>
              <li key="pag-3">
                <NavLink to="/service">Service</NavLink>
              </li>
              <li key="pag-4">
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li key="pag-5">
                <NavLink to="/team">Team</NavLink>
              </li>
            </ul>
            <ul className="submenu megamenu-item">
              <li key="pag-6">
                <NavLink to="/team-02">Team 02</NavLink>
              </li>
              <li key="pag-7">
                <NavLink to="/team-details/1">Team Single</NavLink>
              </li>
              <li key="pag-122">
                <NavLink to="/contact-modern">Contact Modern</NavLink>
              </li>
              <li key="pag-8">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li key="pag-9">
                <NavLink to="/contact-02">Contact 02</NavLink>
              </li>
              <li key="pag-10">
                <NavLink to="/faq">Faq</NavLink>
              </li>
              <li key="pag-11">
                <NavLink to="/coming-soon">Coming Soon</NavLink>
              </li>
            </ul>
            <ul className="submenu megamenu-item">
              <li key="pag-12">
                <NavLink to="/404">404 Error</NavLink>
              </li>
              <li key="pag-13">
                <NavLink to="/page-left-sidebar">page left sidebar</NavLink>
              </li>
              <li key="pag-14">
                <NavLink to="/page-right-sidebar">page Right sidebar</NavLink>
              </li>
              <li key="pag-15">
                <NavLink to="/page-both-sidebar">page both sidebar </NavLink>
              </li>
              <li key="pag-16">
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              </li>
              <li key="pag-17">
                <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
              </li>
              <li key="pag-18">
                <NavLink to="/typography">Typography</NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* Blog */}
        <li
          key="2"
          className={`has-dropdown ${
            activeItems.includes(2) ? 'menu-active' : ''
          }`}
        >
          <Link to="#">
            Blog{' '}
            {showLink ? (
              <span onClick={() => toggleItem(2)} className="submenu-trigger">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </Link>
          <ul className="submenu">
            <li key="blo-1">
              <NavLink to="/blog">Blog Classic</NavLink>
            </li>
            <li key="blo-2">
              <NavLink to="/blog-left-sidebar">Blog Left Sidebar</NavLink>
            </li>
            <li key="blo-3">
              <NavLink to="/blog-right-sidebar">Blog Right Sidebar</NavLink>
            </li>
            <li key="blo-4">
              <NavLink to="/blog-grid">Blog Grid</NavLink>
            </li>
            <li key="blo-5">
              <NavLink to="/blog-details/1">Blog Single</NavLink>
            </li>
          </ul>
        </li>

        {/* Car Listing */}
        <li
          key="3"
          className={`has-dropdown ${
            activeItems.includes(3) ? 'menu-active' : ''
          }`}
        >
          <Link to="#">
            Car listing{' '}
            {showLink ? (
              <span onClick={() => toggleItem(3)} className="submenu-trigger">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </Link>
          <ul className="submenu">
            <li key="List-1">
              <NavLink to="/car-grid">Listing 01</NavLink>
            </li>
            <li key="List-2">
              <NavLink to="/car-list">Listing 02</NavLink>
            </li>
          </ul>
        </li>

        {/* Car Details */}
        <li
          key="4"
          className={`has-dropdown ${
            activeItems.includes(4) ? 'menu-active' : ''
          }`}
        >
          <Link to="#">
            Car Details{' '}
            {showLink ? (
              <span onClick={() => toggleItem(4)} className="submenu-trigger">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </Link>
          <ul className="submenu">
            <li key="Detail-1">
              <NavLink to="/car-details/1">Details 01</NavLink>
            </li>
            <li key="Detail-2">
              <NavLink to="/car-details-02/1">Details 02</NavLink>
            </li>
          </ul>
        </li>

        {/* Elements */}
        <li
          key="5"
          className={`megamenu ${activeItems.includes(5) ? 'menu-active' : ''}`}
        >
          <Link to="#">
            Elements{' '}
            {showLink ? (
              <span onClick={() => toggleItem(5)} className="submenu-trigger">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </Link>
          <div className="megamenu-main">
            <ul className="submenu megamenu-item">
              <li key="ele-1" className="menu-heading">
                Menu Item
              </li>
              <li key="ele-2">
                <NavLink to="/elements-accordion">Accordion</NavLink>
              </li>
              <li key="ele-3">
                <NavLink to="/elements-action-box">Action Box</NavLink>
              </li>
              <li key="ele-4">
                <NavLink to="/elements-blog">Blog</NavLink>
              </li>
              <li key="ele-5">
                <NavLink to="/elements-button">Button</NavLink>
              </li>

              <li key="ele-6">
                <NavLink to="/elements-vehicle-showcase">Vehicle Showcase</NavLink>
              </li>
              <li key="ele-7">
                <NavLink to="/elements-client-logo">Client Logo</NavLink>
              </li>
            </ul>
            <ul className="submenu megamenu-item">
              <li key="ele-8" className="menu-heading">
                Menu Item
              </li>
              <li key="ele-9">
                <NavLink to="/elements-content-box">Content Box</NavLink>
              </li>
              <li key="ele-10">
                <NavLink to="/elements-countdown">Countdown</NavLink>
              </li>
              <li key="ele-11">
                <NavLink to="/elements-counter">Counter</NavLink>
              </li>
              <li key="ele-13">
                <NavLink to="/elements-feature-info">Feature Info</NavLink>
              </li>
              <li key="ele-14">
                <NavLink to="/elements-infobox">Infobox</NavLink>
              </li>
              <li key="ele-15">
                <NavLink to="/elements-form">Form</NavLink>
              </li>
            </ul>
            <ul className="submenu megamenu-item">
              <li key="ele-16" className="menu-heading">
                Menu Item
              </li>
              <li key="ele-17">
                <NavLink to="/elements-image-gallery">Image Gallery</NavLink>
              </li>
              <li key="ele-18">
                <NavLink to="/elements-list">List</NavLink>
              </li>
              <li key="ele-19">
                <NavLink to="/elements-newsletter">Newsletter</NavLink>
              </li>
              <li key="ele-20">
                <NavLink to="/elements-range-slider">Range Slider</NavLink>
              </li>
              <li key="ele-21">
                <NavLink to="/elements-socialicon">SocialIcon</NavLink>
              </li>
              <li key="ele-22">
                <NavLink to="/elements-tab">Tabs</NavLink>
              </li>
            </ul>
            <ul className="submenu megamenu-item">
              <li key="ele-23" className="menu-heading">
                Menu Item
              </li>
              <li key="ele-24">
                <NavLink to="/elements-testimonial">Testimonial</NavLink>
              </li>
              <li key="ele-25">
                <NavLink to="/elements-team">Team</NavLink>
              </li>
              <li key="ele-26">
                <NavLink to="/elements-timeline">Timeline</NavLink>
              </li>
              <li key="ele-27">
                <NavLink to="/elements-vehicles-type">Vehicles Type</NavLink>
              </li>
              <li key="ele-28">
                <NavLink to="/elements-vehicles-search">Vehicles Search</NavLink>
              </li>
              <li key="ele-29">
                <NavLink to="/elements-video">Video</NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
}

export default MainMenu;
