import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="w-64 bg-gray-200 p-4">
      <ul>
        <li className="mb-4"><Link to="/hot-spot">STEP 1 사진 선택</Link></li>
        <li className="mb-4"><Link to="/ready-travel">STEP 2 여행 준비</Link></li>
        <li className="mb-4"><Link to="/lodging">STEP 3 숙소/지점 추천</Link></li>
        <li className="mb-4"><Link to="/restaurant">맛집 추천 테스트용</Link></li>
        <li className="mb-4">STEP 4 이동 경로 안내</li>
        <li className="mb-4"><Link to="/hidden-spot">Hiddenspot</Link></li>
      </ul>
    </div>
  );
}

export default SideBar;
