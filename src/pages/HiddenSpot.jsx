import React, { useState } from "react";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";

const HiddenSpot = () => {
  const [selectedPopup, setSelectedPopup] = useState(false);
  const [likedPopup, setLikedPopup] = useState(false);

  const handleSelectClick = () => {
    setSelectedPopup(true);
  };

  const handleLikeClick = () => {
    setLikedPopup(true);
  };

  const closeSelectedPopup = () => {
    setSelectedPopup(false);
  };

  const closeLikedPopup = () => {
    setLikedPopup(false);
  };

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="flex-grow p-4">
        <h1 className="text-xl mb-4">당신이 몰랐던 주변 HIDDEN SPOT</h1>
        <div className="grid grid-cols-1 gap-4">
          {[1, 2, 3].map((spot) => (
            <div
              key={spot}
              className="flex items-center bg-gray-100 p-4 rounded-lg"
            >
              <div className="w-24 h-24 bg-gray-300 mr-4"></div>
              <div className="flex-grow">
                <h2 className="text-lg">HOT {spot}</h2>
                <p>서울시 노원구 노원로</p>
                <p>-km(도시 + 소요 시간)</p>
                <p>가격</p>
              </div>
              <div className="flex flex-col items-center">
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded mb-2"
                  onClick={handleSelectClick}
                >
                  선택
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={handleLikeClick}
                >
                  ❤️
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg">
              <p>ㅇㅇ동 여행 스케줄에 담습니다.</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={closeSelectedPopup}
              >
                다음 단계로
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                onClick={closeSelectedPopup}
              >
                더 선택하기
              </button>
            </div>
          </div>
        )}
        {likedPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg">
              <p>좋아한 숙소를 ㅇㅇ폴더에 담았습니다!</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={closeLikedPopup}
              >
                폴더 가기
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                onClick={closeLikedPopup}
              >
                계속 둘러보기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HiddenSpot;
