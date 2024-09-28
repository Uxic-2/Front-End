import React, { useState } from "react";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import lodging_photato from "../imgs/lodging_photato.png";
import empty_heart from "../imgs/empty_heart.png";
import filled_heart from "../imgs/filled_heart.png";
import folder_icon from "../imgs/mypage_folder.svg";
import { useNavigate } from "react-router-dom"; 
import "../index.css";

const restaurantData = [
  { id: 1, name: "중식당 A", category: "중식", location: "서울시 강남구", price: 20000, distance: 10 },
  { id: 2, name: "일식당 B", category: "일식", location: "서울시 종로구", price: 30000, distance: 8 },
  { id: 3, name: "양식당 C", category: "양식", location: "부산시 해운대구", price: 40000, distance: 15 },
  { id: 4, name: "한식당 D", category: "한식", location: "강원도 평창군", price: 15000, distance: 20 },
  { id: 5, name: "카페 E", category: "카페", location: "제주시", price: 10000, distance: 18 },
  { id: 6, name: "디저트 F", category: "디저트", location: "전라북도 남원시", price: 8000, distance: 25 },
  { id: 7, name: "인스타 핫플 G", category: "인스타 핫플", location: "경기도 수원시", price: 25000, distance: 12 },
  { id: 8, name: "중식당 H", category: "중식", location: "전주시", price: 22000, distance: 17 },
  { id: 9, name: "카페 I", category: "카페", location: "인천시 중구", price: 12000, distance: 5 },
  { id: 10, name: "양식당 J", category: "양식", location: "강원도 속초시", price: 35000, distance: 30 },
  { id: 11, name: "한식당 K", category: "한식", location: "경기도 가평군", price: 18000, distance: 22 },
  { id: 12, name: "디저트 L", category: "디저트", location: "서울시 동대문구", price: 9000, distance: 6 },
  { id: 13, name: "일식당 M", category: "일식", location: "부산시 북구", price: 28000, distance: 28 },
  { id: 14, name: "한식당 N", category: "한식", location: "경주", price: 16000, distance: 16 },
  { id: 15, name: "양식당 O", category: "양식", location: "부산시 중구", price: 38000, distance: 24 },
];

const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [sortOption, setSortOption] = useState("거리순");
  const [likedStates, setLikedStates] = useState({});
  const [buttonColors, setButtonColors] = useState({});
  const [likedPopup, setLikedPopup] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(false);

  const navigate = useNavigate(); // navigate 함수 추가

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
            <div key={restaurant.id} className="flex p-4 bg-white border border-gray-300 rounded relative">
              <div className="w-36 h-24 bg-gray-300"></div>
              <div className="ml-4 flex-grow">
                <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                <p className="text-gray-700">{restaurant.location}</p>
                <p className="text-gray-700">{restaurant.price.toLocaleString()}원</p>
                <p className="text-gray-700">{restaurant.distance} km</p>
                <div className="flex justify-end mt-2">
                  <button
                    className="text-white px-4 py-1.5 rounded-xl w-[7vw] mr-2"
                    onClick={() => handleSelectClick(restaurant)}
                    style={{
                      backgroundColor: buttonColors[restaurant.id] || "#E4EBF1",
                    }}
                  >
                    {buttonColors[restaurant.id] ? "선택됨" : "선택"}
                  </button>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {likedPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg flex flex-col items-center">
            <img
              src={folder_icon}
              className="w-[120px] h-[120px] mb-4"
              alt="Folder Icon"
            />
            <p>좋아요한 맛집을 ㅇㅇ폴더에 담았습니다!</p>
            <div className="flex mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={goToSschedule}
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
    </div>
  );
};

export default Restaurant;
