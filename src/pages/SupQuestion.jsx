import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import '../styles/support/supportQuestion.css';

const SupQuestion = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <Link to="/support" className="sidebar-item side1">문의사항</Link>
        <Link to="/supnotice" className="sidebar-item side2">공지사항</Link>
        <Link to="/supquestion" className="sidebar-item side3 active">자주 묻는 질문</Link>
      </aside>
      <div className="content">
        <h1>자주 묻는 질문</h1>
        <div className="search-bar">
          <input type="text" placeholder="검색" />
          <button type="submit">🔍</button>
        </div>
        <table className="faq-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>구분</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your table rows here */}
          </tbody>
        </table>
        <div className="pagination">
          <button>{"<"}</button>
          <span className="page-number">1</span>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default SupQuestion;
