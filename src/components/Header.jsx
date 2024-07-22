import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../imgs/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">홈</Link>
          </li>
          <li className="nav-item">
            <Link to="/photozone" className="nav-link">사진관</Link>
          </li>
          <li className="nav-item">
            <Link to="/community" className="nav-link">커뮤니티</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">로그인</Link>
          </li>
          <li className="nav-item">
            <Link to="/mypage" className="nav-link">마이페이지</Link>
          </li>
          <li className="nav-item search-bar">
            <input type="text" placeholder="검색" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
