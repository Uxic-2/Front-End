import React, { useState } from 'react';
import "../styles/support.css";

const Support = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, subject, message, userId, file });
  };

  return (
    <div className="support-container">
      <aside className="sidebar">
        <div className="side1 active">문의사항</div>
        <div className="side2">공지사항</div>
        <div className="side3">자주 묻는 질문</div>
      </aside>
      <div className="support-content">
        <h1>문의사항</h1>
        <form onSubmit={handleSubmit} className="support-form">
          <div className="form-group">
            <label htmlFor="email">이메일 주소</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">제목</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">설명</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userId">가입 ID</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">첨부 파일</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button type="submit">제출</button>
        </form>
      </div>
    </div>
  );
};

export default Support;
