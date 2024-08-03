import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../imgs/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/hot-spot" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              HOT SPOT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/support" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              SUPPORT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/login" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              LOGIN
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/mypage" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              MY PAGE
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
