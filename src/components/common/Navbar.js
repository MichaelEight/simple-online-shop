import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../context';
import './Navbar.css';

function Navbar() {
  const { isLoggedIn, setIsLoggedIn, userData, setUserData } = useAppContext();
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Placeholder validation
    if (email === 'test@example.com' && password === 'password') {
      setUserData({
        name: 'John',
        lastname: 'Doe',
        email: 'test@example.com',
        address: {
          city: 'Example City',
          street: 'Main St',
          building: '123',
          flat: '45'
        }
      });
      setIsLoggedIn(true);
      setShowLogin(false);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({
      name: '',
      lastname: '',
      email: '',
      address: {
        city: '',
        street: '',
        building: '',
        flat: ''
      }
    });
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Main Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : '')}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </li>
      </ul>
      <div className="login-section">
        {isLoggedIn ? (
          <>
            <span>{userData.name} {userData.lastname} logged in!</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => setShowLogin(true)}>Log In</button>
            {showLogin && (
              <div className="login-popup">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
