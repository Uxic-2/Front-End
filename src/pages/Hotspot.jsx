import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import Modal from "./HotspotModal";
import HiddenSpot from "./HiddenSpot";
import questionIcon from "../imgs/question.png"; 

const HotSpot = () => {
  const hotSpots = Array(9)
    .fill({ likes: 123456789 })
    .map((spot, index) => ({
      ...spot,
      likes: spot.likes - index * 1000000, // 하트수 임의
    }));

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("HotSpot");

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const renderHiddenspot = () => {
    setCurrentComponent("Hiddenspot");
    closeModal();
  };

  const sortedHotSpots = [...hotSpots].sort((a, b) => b.likes - a.likes);

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="flex-1 p-4">
        {currentComponent === "HotSpot" ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <h2 className="text-2xl">지금 인기있는 HOT SPOT</h2>
                <div className="absolute -top-2 right-0 flex items-center">
                  <img
                    src={questionIcon}
                    alt="Question"
                    className="tooltip-icon ml-2 w-6 h-6"
                  />
                  <div className="tooltip-text absolute bg-gray-800 text-white text-sm p-2 rounded shadow-lg -mt-2 -ml-16 w-72">
                    STEP 1에서는 타 유저들의 여행 사진을 모아두어 한 눈에
                    확인하실 수 있습니다. 하트 버튼을 누를 시 여행 폴더에
                    저장하실 수 있고, 선택 버튼을 누르시면 HIDDEN SPOT으로
                    넘어가게 됩니다. 지금 당장 원하는 사진을 골라보세요!
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded p-2 mr-4"
                />
                <select className="border rounded p-2" defaultValue="인기순">
                  <option value="인기순">인기순</option>
                  <option value="최신순">최신순</option>
                  <option value="가나다순">가나다순</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {sortedHotSpots.map((spot, index) => (
                <div key={index}>
                  {index < 3 && (
                    <div className="text-center text-lg font-bold mb-2">
                      Top {index + 1}
                    </div>
                  )}
                  <div className="bg-gray-300 w-full h-60 mb-2"></div>
                  <div className="flex justify-between items-center">
                    <p>❤️ {spot.likes.toLocaleString()}</p>
                    <Link
                      to="#"
                      className="bg-[#E4EBF1] px-4 py-1 w-[68px] rounded"
                      onClick={openModal}
                    >
                      선택
                    </Link>
                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      renderHiddenspot={renderHiddenspot}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <HiddenSpot />
        )}
      </div>
    </div>
  );
};

export default HotSpot;
