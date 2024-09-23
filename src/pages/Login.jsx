import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import '../styles/login.css';
import characterLogo from '../imgs/character_logo_yellow_back.png';

const Login = () => {
  const [id, setId] = useState(''); 
  const [pw, setPw] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/member/login', {
        id, 
        pw, 
      });

      if (response.status === 200) {
        // 로그인 성공 시 로컬 스토리지에 저장
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', response.data.userId);  // MongoDB의 _id 저장
        alert('로그인에 성공했습니다!');
        navigate('/');  // 로그인 후 메인 페이지로 이동
      } else {
        console.error('로그인 실패');
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('서버와의 통신 중 문제가 발생했습니다.');
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-logo">
          <div className='position-cc'>
            <div className='bblank'></div>
            <img src={characterLogo} alt="Photato Logo" />
          </div>
          <br></br><br></br>
          <h1>Welcome to PHOTATO!</h1>
          <p>Sign in to continue access pages</p>
        </div>
        <div className="right-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="id">아이디</label>
              <input
                type="text"
                id="id"
                placeholder="아이디를 입력하세요."
                value={id} 
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pw">비밀번호</label>
              <input
                type="password"
                id="pw"
                placeholder="비밀번호를 입력하세요"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                required
              />
            </div>
            <p className="forgot-password">비밀번호를 잊으셨나요?</p>
            <button type="submit" className="login-button">로그인하기</button>
          </form>
          <button onClick={handleSignUpClick} className="signup-button">회원가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
