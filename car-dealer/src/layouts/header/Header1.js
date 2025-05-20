import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

// Components
import MainMenu from './MainMenu';
import OffCanvasMenu from './OffcanvasMenu';
import useHeaderSticky from '../../hooks/useHeaderSticky';
import Search from '../../component/search';
import './style.scss';

// LoginPopup Component
const LoginPopup = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        onLoginSuccess(data.user); // Expected response: { user: { name, role } }
        onClose();
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      setError('Server error');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button flat">Login</button>
        </form>
      </div>
    </div>
  );
};

const Header1 = (props) => {
  const [isSticky] = useHeaderSticky();
  const [showLogin, setShowLogin] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('adminUser');
    if (savedUser) {
      setAdminUser(JSON.parse(savedUser));
    }
  }, []);

  const toggleLogin = () => setShowLogin(!showLogin);

  const handleLoginSuccess = (user) => {
    if (user.role === 'admin') {
      setAdminUser(user);
      localStorage.setItem('adminUser', JSON.stringify(user));  // Save user
    } else {
      alert('Access denied. Only admin can add cars.');
    }
  };

  const handleLogout = () => {
    setAdminUser(null);
    localStorage.removeItem('adminUser');  // Clear user on logout
  };

  return (
    <>
      <header
        className={`site-header header-default ${isSticky ? 'header-sticky' : ''} ${props.className || ''}`}
      >
        <div className="header-wrapper">
          <div className={`${props.containerSize || 'container-fluid'}`}>
            <div className="header-inner">
              <div className="site-logo">
                <NavLink className="logo-link" to="/">
                  <h1
                    style={{
                      margin: 0,
                      fontSize: '28px',
                      fontWeight: '700',
                      color: '#fff',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    Dis Dealer
                  </h1>
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

                  {/* Conditionally show Add Car and Logout buttons */}
                  {adminUser && (
                    <>
                      <div className="header-button d-none d-lg-block">
                        <NavLink className="button flat" to="/add-car">
                          Add Car
                        </NavLink>
                      </div>
                      <div className="header-button d-none d-lg-block">
                        <button className="button flat" onClick={handleLogout}>
                          Logout
                        </button>
                      </div>
                    </>
                  )}

                  {/* Login Button */}
                  {!adminUser && (
                    <div className="header-button d-none d-lg-block">
                      <button className="button flat" onClick={toggleLogin}>
                        Login
                      </button>
                    </div>
                  )}

                  <div className="mobile-menu-btn d-lg-none">
                    <OffCanvasMenu position="end" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Show login modal */}
      {showLogin && <LoginPopup onClose={toggleLogin} onLoginSuccess={handleLoginSuccess} />}

      <Outlet />
    </>
  );
};

export default Header1;
