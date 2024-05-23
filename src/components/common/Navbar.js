// src/components/common/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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
        <li>
          <NavLink to="/auth" className={({ isActive }) => (isActive ? 'active' : '')}>
            Login / Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
