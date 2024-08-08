import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <div className="w-200 bg-white p-5">
      <ul>
        <li className="mb-4 text-main-green font-bold">
          <NavLink to="/hot-spot">STEP 1 사진 선택</NavLink>
        </li>
        <li className="mb-4 text-main-green font-bold">
          <NavLink to="/ready-travel">STEP 2 여행 준비</NavLink>
        </li>
        <li className="mb-4 text-main-green font-bold">
          <NavLink to="/lodging">STEP 3 숙소/지점 추천</NavLink>
        </li>
        <li className="mb-4 text-main-green font-bold">
          <NavLink to="/restaurant">맛집 추천 테스트용</NavLink>
        </li>
        <li className="mb-4 text-main-green font-bold">
          STEP 4 이동 경로 안내
        </li>
        <li className="mb-4 text-main-green font-bold">
          <NavLink to="/hidden-spot">Hiddenspot</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
