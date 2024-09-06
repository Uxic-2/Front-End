import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Header.css";
import logo from "../imgs/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");

    const handleStorageChange = () => {
      const loggedInStatus = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(loggedInStatus === "true");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:8080/member/logout');
      if (response.status === 200) {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        alert("로그아웃 되었습니다.");
        navigate("/login");
      } else {
        alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert("서버와의 통신 중 오류가 발생했습니다.");
    }
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
            <>
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
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link">
                  LOGOUT
                </button>
              </li>
            </>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
