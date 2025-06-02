import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

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
      const res = await fetch("https://cardealeral.onrender.com/api/login", {
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
  const [showWelcome, setShowWelcome] = useState(false); // <-- NEW
  const navigate = useNavigate();

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
      localStorage.setItem('adminUser', JSON.stringify(user));
      setShowWelcome(true); // <-- NEW
    } else {
      alert('Access denied. Only admin can add cars.');
    }
  };

  const handleLogout = () => {
    setAdminUser(null);
    localStorage.removeItem('adminUser');
    navigate('/'); // Redirect to home page after logout
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

                  {!adminUser && (
                    <div className="header-button d-none d-lg-block">
                      <button className="button flat" onClick={toggleLogin}>
                        Loginnn
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

      {showLogin && (
        <LoginPopup
          onClose={toggleLogin}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {/* Welcome popup after successful login */}
      {showWelcome && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome</h5>
                <button
                  type="button"
                  className="btn-close btn btn-danger"
                  onClick={() => setShowWelcome(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Welcome, {adminUser?.name || 'Admin'}!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default Header1;
