import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Optional: If you want to add styles

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Main Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
