import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MainMenu from './MainMenu';

function OffCanvasMenu({ position, onLoginClick, adminUser, servUser, onLogout }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menuHide = (event) => {
    if (
      event.target.matches('.offcanvas-header .btn-close, .main-navbar li > a')
    ) {
      setShow(false);
      return;
    }
    setShow(true);
  };

  const handleLogoutClick = () => {
    onLogout();
    setShow(false);
    navigate('/');
  };

  return (
    <>
      <Button onClick={handleShow} className="mobile-menu-trigger d-lg-none">
        <span></span>
        <span></span>
        <span></span>
      </Button>

      <Offcanvas
        className="offcanvas-menu"
        show={show}
        onHide={handleClose}
        onClick={menuHide}
        responsive="lg"
        placement={position}
      >
        <div className="offcanvas-mobile-menu">
          <Offcanvas.Header closeButton>
            <div className="site-logo">
              <NavLink className="logo-link" to="/"></NavLink>
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100vh - 90px)',
              justifyContent: 'space-between',
              overflow: 'auto',
              padding: '96px 13px',
            }}
          >
            <div className="mobile-menu">
              <MainMenu />
            </div>

            <div className="header-button" style={{ marginTop: '1rem' }}>
              {adminUser ? (
                <>
                  <NavLink className="button flat" to="/add-car" style={{ textDecoration: 'none' }}>
                    Add Lift
                  </NavLink>
                  <hr />
                  <NavLink className="button flat" to="/service" style={{ textDecoration: 'none' }}>
                  Paneli i Menaxhimit
                  </NavLink>
                  <hr />
                  <button className="button flat" onClick={handleLogoutClick}>
                    Logout
                  </button>
                </>
              ) : servUser ? (
                <>
                  <NavLink className="button flat" to="/car-grid" style={{ textDecoration: 'none' }}>
                    Service Dashboard
                  </NavLink>
                  <hr />
                  <button className="button flat" onClick={handleLogoutClick}>
                    Logout
                  </button>
                </>
              ) : (
                <button
                  className="button flat"
                  onClick={() => {
                    setShow(false);
                    onLoginClick();
                  }}
                >
                  Login
                </button>
              )}
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
}

export default OffCanvasMenu;
