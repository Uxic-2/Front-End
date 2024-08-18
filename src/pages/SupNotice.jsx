import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import "../styles/support/supportNotice.css";

import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBSupport";

const SupNotice = () => {
  return (
    <div className="container">
      <SideBar links={links} />
      <div className="content">
        <h1>공지사항</h1>
        <div className="search-bar">
          <input type="text" placeholder="검색" />
          <button type="submit"> 🔍</button>
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
          <tbody>{/* Add your table rows here */}</tbody>
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

export default SupNotice;
