import React, { useState } from "react";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import { useNavigate } from "react-router-dom";
import questionIcon from "../imgs/question.png";
import lodging_photato from "../imgs/lodging_photato.png";
import folder_icon from "../imgs/mypage_folder.svg";
import empty_heart from "../imgs/empty_heart.png";
import filled_heart from "../imgs/filled_heart.png";
import "../index.css";

const lodgingData = [
  {
    id: 1,
    name: "호텔 A",
    category: "호텔, 리조트",
    location: "서울시 강남구",
    price: 150000,
    distance: 10,
  },
  {
    id: 2,
    name: "호텔 B",
    category: "호텔, 리조트",
    location: "서울시 종로구",
    price: 120000,
    distance: 8,
  },
  {
    id: 3,
    name: "모텔 C",
    category: "모텔",
    location: "부산시 해운대구",
    price: 80000,
    distance: 15,
  },
  {
    id: 4,
    name: "펜션 D",
    category: "펜션",
    location: "강원도 평창군",
    price: 200000,
    distance: 20,
  },
  {
    id: 5,
    name: "홈 E",
    category: "홈, 빌라",
    location: "제주시",
    price: 90000,
    distance: 18,
  },
  {
    id: 6,
    name: "캠핑 F",
    category: "캠핑",
    location: "전라북도 남원시",
    price: 50000,
    distance: 25,
  },
  {
    id: 7,
    name: "게하 G",
    category: "게하, 한옥",
    location: "경기도 수원시",
    price: 60000,
    distance: 12,
  },
  {
    id: 8,
    name: "한옥 H",
    category: "게하, 한옥",
    location: "전주시",
    price: 110000,
    distance: 17,
  },
  {
    id: 9,
    name: "호텔 I",
    category: "호텔, 리조트",
    location: "인천시 중구",
    price: 130000,
    distance: 5,
  },
  {
    id: 10,
    name: "캠핑 J",
    category: "캠핑",
    location: "강원도 속초시",
    price: 40000,
    distance: 30,
  },
  {
    id: 11,
    name: "펜션 K",
    category: "펜션",
    location: "경기도 가평군",
    price: 180000,
    distance: 22,
  },
  {
    id: 12,
    name: "모텔 L",
    category: "모텔",
    location: "서울시 동대문구",
    price: 70000,
    distance: 6,
  },
  {
    id: 13,
    name: "홈 M",
    category: "홈, 빌라",
    location: "부산시 북구",
    price: 100000,
    distance: 28,
  },
  {
    id: 14,
    name: "한옥 N",
    category: "게하, 한옥",
    location: "경주",
    price: 140000,
    distance: 16,
  },
  {
    id: 15,
    name: "게하 O",
    category: "게하, 한옥",
    location: "부산시 중구",
    price: 90000,
    distance: 24,
  },
];

const Lodging = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [sortOption, setSortOption] = useState("거리순");
  const [likedStates, setLikedStates] = useState({});
  const [buttonColors, setButtonColors] = useState({});
  const [likedPopup, setLikedPopup] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(false);

  const buttonClass =
    "px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-main-orange hover:text-white active:bg-main-orange";

  const navigate = useNavigate();

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  const handleLikeClick = (lodging) => {
    setLikedStates((prevState) => ({
      ...prevState,
      [lodging.id]: !prevState[lodging.id],
    }));
    setLikedPopup(true);
  };

  const handleSelectClick = (lodging) => {
    setButtonColors((prevState) => ({
      ...prevState,
      [lodging.id]: "#F8B46E",
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

  let filteredLodgings =
    selectedCategory === "전체"
      ? lodgingData
      : lodgingData.filter((lodging) => lodging.category === selectedCategory);

  if (sortOption === "거리순") {
    filteredLodgings = filteredLodgings.sort((a, b) => a.distance - b.distance);
  } else if (sortOption === "가격높은순") {
    filteredLodgings = filteredLodgings.sort((a, b) => b.price - a.price);
  } else if (sortOption === "가격낮은순") {
    filteredLodgings = filteredLodgings.sort((a, b) => a.price - b.price);
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
              <i>편집자가 추천해주는 숙소 BEST</i>
            </span>
            <div className="relative ml-2 tooltip-icon">
              <img src={questionIcon} alt="Question" className="w-6 h-6" />
              <div className="tooltip-text text-[14px] mt-2 w-[480px] text-center hidden">
                STEP 3는 선택한 여행지 주변의 숙소, 맛집을
                <br />
                인기순, 저가순 등 다양한 카테고리 별로 확인해볼 수 있습니다.
                <br />
                지금 바로 원하는 숙소/맛집을 골라보세요!
              </div>
            </div>
          </h1>
        </div>

        <h1 className="text-xl font-bold mb-6">카테고리</h1>
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setSelectedCategory("전체")}
            className={`${buttonClass} border-0 shadow-md`}
          >
            전체
          </button>
          <button
            onClick={() => setSelectedCategory("호텔, 리조트")}
            className={`${buttonClass} border-0 shadow-md`}
          >
            호텔, 리조트
          </button>
          <button
            onClick={() => setSelectedCategory("모텔")}
            className={`${buttonClass} border-0 shadow-md`}
          >
            모텔
          </button>
          <button
            onClick={() => setSelectedCategory("펜션")}
            className={`${buttonClass} border-0 shadow-md`}
          >
            펜션
          </button>
          <button
            onClick={() => setSelectedCategory("홈, 빌라")}
            className={`${buttonClass} border-0 shadow-md`}
          >
            홈, 빌라
          </button>
          <button
            onClick={() => setSelectedCategory("캠핑")}
            className={`${buttonClass} border-0 shadow-md`}
          >
            캠핑
          </button>
          <button
            onClick={() => setSelectedCategory("게하, 한옥")}
            className={`${buttonClass} border-0 shadow-md`}
          >
            게하, 한옥
          </button>
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
          {filteredLodgings.map((lodging) => (
            <div
              key={lodging.id}
              className="flex p-4 bg-white border border-gray-300 rounded relative"
            >
              <div className=" bg-gray-300"></div>
              <button
                className={`w-36 h-36 bg-gray-300 relative`}
                onClick={() => handleLinkClick("/vr/room_1/index.html")}
              >
                <div className="absolute bottom-0 right-0 mb-2 mr-2">🔎</div>
              </button>
              <div className="ml-4 flex-grow">
                <h2 className="text-xl font-semibold">{lodging.name}</h2>
                <p className="text-gray-700">{lodging.location}</p>
                <p className="text-gray-700">
                  {lodging.price.toLocaleString()}원
                </p>
                <p className="text-gray-700">{lodging.distance} km</p>
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => handleLikeClick(lodging)}
                    className="flex items-center"
                  >
                    <img
                      src={likedStates[lodging.id] ? filled_heart : empty_heart}
                      alt="Like"
                      className="w-[25%] mb-1"
                    />
                  </button>
                  <button
                    className="text-white px-4 py-1.5 rounded-xl w-[7vw] mr-2"
                    onClick={() => handleSelectClick(lodging)}
                    style={{
                      backgroundColor: buttonColors[lodging.id] || "#E4EBF1",
                    }}
                  >
                    선택
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
            <p>좋아요한 숙소를 ㅇㅇ폴더에 담았습니다!</p>
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

export default Lodging;
