import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

// Component
import MainMenu from './MainMenu';
import OffCanvasMenu from './OffcanvasMenu';
import useHeaderSticky from '../../hooks/useHeaderSticky';
import Search from '../../component/search';
import LogoDark from '../../assets/images/logo-dark.png';
import LogoLight from '../../assets/images/logo-light.png';

// SCSS
import './style.scss';

const Header2 = (props) => {
  // Header Sticky : Custom Hooks
  const [isSticky] = useHeaderSticky();

  return (
    <>
      <header
        className={`site-header header-default ${
          isSticky ? 'header-sticky' : ''
        } ${props.className || ''}`}
      >
        <div className="header-wrapper">
          <div className={`${props.containerSize || 'container-fluid'}`}>
            <div className="header-inner">
              <div className="site-logo">
                <NavLink className="logo-link" to="/">
                  {props?.siteLogo ? <img className="img-fluid desktop-logo" src={props.siteLogo} alt="logo" /> : <img className="img-fluid desktop-logo" src={LogoDark} alt="logo" />}
                  {props?.mobileLogo ? <img className="img-fluid mobile-logo" src={props.mobileLogo} alt="logo" /> : <img className="img-fluid mobile-logo" src={LogoLight} alt="logo" />}
                </NavLink>
              </div>
              <div className="menu-links">
                <div className="main-menu d-none d-lg-block">
                  <MainMenu />
                </div>
                <div className="header-action">
                  <div className="header-action-info">
                    <ul>
                      <li key="1">
                        <Search />
                      </li>
                    </ul>
                  </div>
                  <div className="mobile-menu-btn d-lg-none">
                    <OffCanvasMenu position="end" />
                  </div>
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

export default Header2;
