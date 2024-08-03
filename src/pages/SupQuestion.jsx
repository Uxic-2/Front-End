import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const SupQuestion = () => {
  return (
    <div>
      <aside className="sidebar">
      <Link to="/support" className="sidebar-item side1 ">문의사항</Link>
        <Link to="/SupNotice" className="sidebar-item side2">공지사항</Link>
        <Link to="/SupQuestion" className="sidebar-item side3 active">자주 묻는 질문</Link>
      </aside>
      <h1>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ자주 묻는 질문</h1>
      {/* Add your notice content here */}
    </div>
  );
};

export default SupQuestion;
