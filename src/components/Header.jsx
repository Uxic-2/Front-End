import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../imgs/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 상태 확인
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLogout = () => {
    // 로그아웃 처리
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/"); // 로그아웃 후 메인 페이지로 리디렉션
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="" />
        </NavLink>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/hot-spot"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              HOT SPOT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              SUPPORT
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li className="nav-item">
              <button onClick={handleLogout} className="nav-link">
                LOGOUT
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                LOGIN
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink
              to="/mymap"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
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
