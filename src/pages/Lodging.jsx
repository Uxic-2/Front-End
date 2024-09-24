import React from "react";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import questionIcon from "../imgs/question.png";
import lodging_photato from "../imgs/lodging_photato.png"; // Lodging photo import
import "../index.css";

const Lodging = () => {
  const buttonClass =
    "px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-orange-500 hover:text-white active:bg-orange-500";

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="ml-64 p-6">
        <div className="flex flex-col items-left mb-6">
                    <img
            src={lodging_photato}
            alt="Lodging Photo"
            className="w-32 h-auto mb-2"
          />
          <h1 className="text-2xl font-bold flex items-center">
            <span><i>편집자가 추천해주는 숙소 BEST</i></span>
            <div className="relative ml-2 tooltip-icon">
              <img src={questionIcon} alt="Question" className="w-6 h-6" />
              <div className="tooltip-text mt-2 w-72 text-center hidden">
                STEP 3는 선택한 여행지 주변의 숙소, 맛집을 찾아볼 수 있습니다.
                인기순, 저가순 등 다양한 카테고리 별로 확인해볼 수 있습니다.
                지금 당장 원하는 숙소/맛집을 골라보세요!
              </div>
            </div>
          </h1>
        </div>

        <h1 className="text-xl font-bold mb-6">카테고리</h1>
        <div className="flex gap-4 mb-6">
  <button className={`${buttonClass} border-0 shadow-md`}>전체</button>
  <button className={`${buttonClass} border-0 shadow-md`}>호텔, 리조트</button>
  <button className={`${buttonClass} border-0 shadow-md`}>모텔</button>
  <button className={`${buttonClass} border-0 shadow-md`}>펜션</button>
  <button className={`${buttonClass} border-0 shadow-md`}>홈, 빌라</button>
  <button className={`${buttonClass} border-0 shadow-md`}>캠핑</button>
  <button className={`${buttonClass} border-0 shadow-md`}>게하, 한옥</button>
</div>


        <div className="flex justify-end mb-6">
          <select className="border rounded p-2" defaultValue="거리순">
            <option value="거리순">거리순</option>
            <option value="가격높은순">가격 높은순</option>
            <option value="가격낮은순">가격 낮은순</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="/vr/room_1/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex p-4 bg-white border border-gray-300 rounded relative">
              <div className="w-36 h-24 bg-gray-300"></div>
              <div className="ml-4 flex-grow">
                <h2 className="text-xl font-semibold">숙소 위치</h2>
                <p className="text-gray-700">서울시 노원구 노원로</p>
                <p className="text-gray-700">가격</p>
                <div className="flex items-center mt-2">
                  <button className={`${buttonClass} mr-2`}>선택</button>
                  <button className={buttonClass}>❤️</button>
                </div>
              </div>
            </div>
          </a>

          <a
            href="/vr/room_2/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex p-4 bg-white border border-gray-300 rounded relative">
              <div className="w-36 h-24 bg-gray-300"></div>
              <div className="ml-4 flex-grow">
                <h2 className="text-xl font-semibold">숙소 위치</h2>
                <p className="text-gray-700">서울시 노원구 노원로</p>
                <p className="text-gray-700">가격</p>
                <div className="flex items-center mt-2">
                  <button className={`${buttonClass} mr-2`}>선택</button>
                  <button className={buttonClass}>❤️</button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lodging;
