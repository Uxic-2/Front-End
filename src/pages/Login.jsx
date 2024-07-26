import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import characterLogo from '../imgs/character_logo_yellow_back.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Here you can add logic to connect with backend API for login
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-logo">
          <img src={characterLogo} alt="Photato Logo" />
          <h1>Welcome to PHOTATO!</h1>
          <p>Sign in to continue access pages</p>
        </div>
        <div className="right-container">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">아이디</label>
              <input
                type="email"
                id="email"
                placeholder="이메일을 입력하세요."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                placeholder="비밀번호를 입력하세요."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p className="forgot-password">비밀번호를 잊으셨나요?</p>
            <button type="submit" className="login-button">로그인하기</button>
          </form>
          <button onClick={handleSignUpClick} className="signup-button">회원가입하기</button>
          <p className="social-login-text">소셜아이디로 간편하게 로그인할 수 있습니다.</p>
          <div className="social-login-buttons">
            <button className="social-button naver">네이버로 로그인</button>
            <button className="social-button kakao">카카오로 로그인</button>
            <button className="social-button google">구글로 로그인</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
