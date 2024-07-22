import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">홈</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">로그인</Link>
          </li>
          <li className="nav-item">
            <Link to="/mypage" className="nav-link">마이페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
