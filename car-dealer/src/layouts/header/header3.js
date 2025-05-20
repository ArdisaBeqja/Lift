import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

// Component
import MainMenu from './MainMenu';
import OffCanvasMenu from './OffcanvasMenu';
import useHeaderSticky from '../../hooks/useHeaderSticky';
import LogoDark from '../../assets/images/logo-dark.png';
import LogoLight from '../../assets/images/logo-light.png';

// SCSS
import './style.scss';

const Header3 = (props) => {
  // Header Sticky : Custom Hooks
  const [isSticky] = useHeaderSticky();

  return (
    <>
      <header
        className={`site-header header-fancy ${
          isSticky ? 'header-sticky' : ''
        } ${props.className || ''}`}
      >
        <div className="header-wrapper">
          <div className={`${props.containerSize || 'container-fluid'}`}>
            <div className="header-inner">
              <div className="header-left">
                <div className="site-logo">
                  <NavLink className="logo-link" to="/">
                    {props?.siteLogo ? <img className="img-fluid desktop-logo" src={props.siteLogo} alt="logo" /> : <img className="img-fluid desktop-logo" src={LogoDark} alt="logo" />}
                    {props?.mobileLogo ? <img className="img-fluid mobile-logo" src={props.mobileLogo} alt="logo" /> : <img className="img-fluid mobile-logo" src={LogoLight} alt="logo" />}
                  </NavLink>
                </div>
                <div className="menu-links">
                  <div className="main-menu d-none d-lg-block me-0">
                    <MainMenu />
                  </div>
                  <div className="header-action">
                    <div className="mobile-menu-btn d-lg-none">
                      <OffCanvasMenu position="end" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-right">
                <div className="header-info">
                  <div className="info-icon"><i className="fa fa-phone"></i></div>
                  <div className="info-content">
                    <span className="info-label">Have any Questions?</span>
                    <h4 className="info-number">(007) 123 456 7890</h4>
                  </div>
                </div>
                <div className="header-button">
                    <NavLink className="button flat" to="/add-car">Add Car</NavLink>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header3;
