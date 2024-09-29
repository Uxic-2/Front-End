import React, { useState } from "react";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import lodging_photato from "../imgs/lodging_photato.png";
import empty_heart from "../imgs/empty_heart.png";
import filled_heart from "../imgs/filled_heart.png";
import folder_icon from "../imgs/mypage_folder.svg";
import { useNavigate } from "react-router-dom";
import "../index.css";

// 이미지 import
import f1 from "../imgs/f1.png";
import f2 from "../imgs/f2.png";
import f3 from "../imgs/f3.png";
import f4 from "../imgs/f4.png";
import f5 from "../imgs/f5.png";
import f6 from "../imgs/f6.png";
import f7 from "../imgs/f7.png";
import f8 from "../imgs/f8.png";
import f9 from "../imgs/f9.png";
import f10 from "../imgs/f10.png";

const restaurantData = [
  { id: 1, name: "중식당 A", category: "중식", location: "서울시 강남구", price: 20000, distance: 10, image: f1 },
  { id: 2, name: "일식당 B", category: "일식", location: "서울시 종로구", price: 30000, distance: 8, image: f2 },
  { id: 3, name: "양식당 C", category: "양식", location: "부산시 해운대구", price: 40000, distance: 15, image: f3 },
  { id: 4, name: "한식당 D", category: "한식", location: "강원도 평창군", price: 15000, distance: 20, image: f4 },
  { id: 5, name: "카페 E", category: "카페", location: "제주시", price: 10000, distance: 18, image: f5 },
  { id: 6, name: "디저트 F", category: "디저트", location: "전라북도 남원시", price: 8000, distance: 25, image: f6 },
  { id: 7, name: "인스타 핫플 G", category: "인스타 핫플", location: "경기도 수원시", price: 25000, distance: 12, image: f7 },
  { id: 8, name: "중식당 H", category: "중식", location: "전주시", price: 22000, distance: 17, image: f8 },
  { id: 9, name: "카페 I", category: "카페", location: "인천시 중구", price: 12000, distance: 5, image: f9 },
  { id: 10, name: "양식당 J", category: "양식", location: "강원도 속초시", price: 35000, distance: 30, image: f10 },
];

const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [sortOption, setSortOption] = useState("거리순");
  const [likedStates, setLikedStates] = useState({});
  const [buttonColors, setButtonColors] = useState({});
  const [likedPopup, setLikedPopup] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(false);

  const navigate = useNavigate(); 

  const buttonClass =
    "px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-main-orange hover:text-white active:bg-main-orange";

  const handleLikeClick = (restaurant) => {
    setLikedStates((prevState) => ({
      ...prevState,
      [restaurant.id]: !prevState[restaurant.id],
    }));
    setLikedPopup(true);
  };

  const handleSelectClick = (restaurant) => {
    setButtonColors((prevState) => ({
      ...prevState,
      [restaurant.id]: "#F8B46E",
    }));
    setSelectedPopup(true);
  };

  const closeLikedPopup = () => {
    setLikedPopup(false);
  };

  const closeSelectedPopup = () => {
    setSelectedPopup(false);
  };

  const NextStepPopup = () => {
    navigate("/schedule-create");
  };

  const goToSschedule = () => {
    navigate("/myschedule");
  };

  let filteredRestaurants = selectedCategory === "전체"
    ? restaurantData
    : restaurantData.filter(restaurant => restaurant.category === selectedCategory);

  if (sortOption === "거리순") {
    filteredRestaurants = filteredRestaurants.sort((a, b) => a.distance - b.distance);
  } else if (sortOption === "가격높은순") {
    filteredRestaurants = filteredRestaurants.sort((a, b) => b.price - a.price);
  } else if (sortOption === "가격낮은순") {
    filteredRestaurants = filteredRestaurants.sort((a, b) => a.price - b.price);
  }

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="mx-auto w-[50%] pt-[50px]">
        <div className="flex flex-col items-left mb-6">
          <img
            src={lodging_photato}
            alt="Lodging Photo"
            className="w-32 h-auto mb-2"
          />
          <h1 className="text-2xl font-bold flex items-center">
            <span>
              <i>편집자가 추천해주는 맛집 BEST</i>
            </span>
          </h1>
        </div>

        <h1 className="text-xl font-bold mb-6">카테고리</h1>
        <div className="flex gap-4 mb-6">
          <button onClick={() => setSelectedCategory("전체")} className={`${buttonClass} border-0 shadow-md`}>전체</button>
          <button onClick={() => setSelectedCategory("중식")} className={`${buttonClass} border-0 shadow-md`}>중식</button>
          <button onClick={() => setSelectedCategory("일식")} className={`${buttonClass} border-0 shadow-md`}>일식</button>
          <button onClick={() => setSelectedCategory("양식")} className={`${buttonClass} border-0 shadow-md`}>양식</button>
          <button onClick={() => setSelectedCategory("한식")} className={`${buttonClass} border-0 shadow-md`}>한식</button>
          <button onClick={() => setSelectedCategory("카페")} className={`${buttonClass} border-0 shadow-md`}>카페</button>
          <button onClick={() => setSelectedCategory("디저트")} className={`${buttonClass} border-0 shadow-md`}>디저트</button>
          <button onClick={() => setSelectedCategory("인스타 핫플")} className={`${buttonClass} border-0 shadow-md`}>인스타 핫플</button>
        </div>

        <div className="flex justify-end mb-6">
          <select
            className="border rounded p-2"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="거리순">거리순</option>
            <option value="가격높은순">가격 높은순</option>
            <option value="가격낮은순">가격 낮은순</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          {filteredRestaurants.map(restaurant => (
            <div key={restaurant.id} className="flex p-4 bg-white border border-gray-300 rounded relative items-center">
              {/* 이미지 표시: 정방향으로 설정 */}
              <div className="w-36 h-36">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover rounded" />
              </div>
              <div className="ml-4 flex-grow">
                <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                <p className="text-gray-700">{restaurant.location}</p>
                <p className="text-gray-700">{restaurant.price.toLocaleString()}원</p>
                <p className="text-gray-700">{restaurant.distance} km</p>
              </div>
              <div className="flex items-center justify-end absolute bottom-4 right-4 gap-[5px]">
                <button
                  onClick={() => handleLikeClick(restaurant)}
                  className="flex items-center"
                >
                  <img
                    src={likedStates[restaurant.id] ? filled_heart : empty_heart}
                    alt="Like"
                    className="w-[25%] mb-1"
                  />
                </button>
                <button
                  className="text-white px-4 py-1.5 rounded-xl w-[7vw]"
                  onClick={() => handleSelectClick(restaurant)}
                  style={{
                    backgroundColor: buttonColors[restaurant.id] || "#E4EBF1",
                  }}
                >
                  {buttonColors[restaurant.id] ? "선택됨" : "선택"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 하트 팝업 */}
        {likedPopup && (
          <div className="popup-overlay" onClick={closeLikedPopup}>
            <div className="popup flex flex-col items-center">
              <img src={folder_icon} alt="My Folder" className="w-[20%]" />
              <p>마이페이지에 저장되었습니다.</p>
              <button
                className="mt-4 p-2 bg-orange-500 text-white rounded"
                onClick={goToSschedule}
              >
                마이페이지로 가기
              </button>
            </div>
          </div>
        )}

        {/* 선택 팝업 */}
        {selectedPopup && (
          <div className="popup-overlay" onClick={closeSelectedPopup}>
            <div className="popup">
              <p>일정 작성 단계로 넘어가시겠습니까?</p>
              <div className="flex justify-center mt-4">
                <button
                  className="mx-2 px-4 py-2 bg-gray-300 text-black rounded"
                  onClick={closeSelectedPopup}
                >
                  취소
                </button>
                <button
                  className="mx-2 px-4 py-2 bg-orange-500 text-white rounded"
                  onClick={NextStepPopup}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurant;
