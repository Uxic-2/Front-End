import axios from 'axios';
import React, { useState } from 'react';
import '../styles/signup.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(''); 
  const [pw, setPw] = useState(''); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/member/register', {
        name,
        phone,
        birthdate,
        email,
        id, 
        pw, 
      });

      if (response.status === 200) {
        alert('회원가입이 완료되었습니다!');
        window.location.href = '/login';
      } else {
        console.error('회원가입 실패');
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('서버와의 통신 중 문제가 발생했습니다.');
    }
  };

  return (
    <div className="background-signup">
      <div className="signup-container">
        <h1>Join us with Photato</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">전화번호</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">생년월일</label>
            <input
              type="date"
              id="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              id="id"
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
              value={pw} 
              onChange={(e) => setPw(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            회원가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
