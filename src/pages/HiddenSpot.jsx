import React, { useState } from "react";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import { useNavigate } from "react-router-dom";
import folder_icon from "../imgs/mypage_folder.svg";
import empty_heart from "../imgs/empty_heart.png";
import filled_heart from "../imgs/filled_heart.png";

const HiddenSpot = () => {
  const [selectedPopup, setSelectedPopup] = useState(false);
  const [likedPopup, setLikedPopup] = useState(false);
  const [likedStates, setLikedStates] = useState({});
  const [buttonColors, setButtonColors] = useState({});

  const navigate = useNavigate();
  const handleSelectClick = (spot) => {
    setSelectedPopup(true);
    setButtonColors((prevState) => ({
      ...prevState,
      [spot]: "#F8B46E",
    }));
  };
  const handleLikeClick = (spot) => {
    setLikedStates((prevState) => ({
      ...prevState,
      [spot]: !prevState[spot],
    }));
    setLikedPopup(true);
  };
  const closeSelectedPopup = () => {
    setSelectedPopup(false);
  };
  const closeLikedPopup = () => {
    setLikedPopup(false);
  };
  const NextStepPopup = () => {
    navigate("/ready-travel");
  };
  const goToFolder = () => {
    navigate("/myfolder");
  };

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="mx-auto w-[75%] pt-[50px]">
        <h1 className="mb-4 text-2xl font-bold flex items-center">
          당신이 몰랐던 주변 HIDDEN SPOT
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {[1, 2, 3].map((spot) => (
            <div key={spot} className="flex rounded-lg">
              <div className="w-32 h-32 bg-gray-300 mr-4"></div>
              <div className="flex-grow">
                <h2 className="text-lg">HOT {spot}</h2>
                <p>서울시 노원구 노원로</p>
                <p>-km(도시 + 소요 시간)</p>
                <p>가격</p>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => handleLikeClick(spot)}
                  className="flex items-center"
                >
                  <img
                    src={likedStates[spot] ? filled_heart : empty_heart}
                    alt="Like"
                    className="w-[25%] mb-1"
                  />
                </button>
                <button
                  className="text-white px-4 py-1.5 rounded-xl w-[7vw] mr-4"
                  onClick={() => handleSelectClick(spot)}
                  style={{
                    backgroundColor: buttonColors[spot] || "#E4EBF1",
                  }}
                >
                  선택
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
                onClick={NextStepPopup}
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
            <div className="bg-white p-8 rounded shadow-lg flex flex-col items-center">
              <img
                src={folder_icon}
                className="w-[120px] h-[120px] mb-4"
                alt="Folder Icon"
              />
              <p>좋아한 숙소를 ㅇㅇ폴더에 담았습니다!</p>
              <div className="flex mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={goToFolder}
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
          </div>
        )}
      </div>
    </div>
  );
};
export default HiddenSpot;
