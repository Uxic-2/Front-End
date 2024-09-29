import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import CustomModal from "./HotspotModal";
import empty_heart from "../imgs/empty_heart.png";
import filled_heart from "../imgs/filled_heart.png";
import spot1 from "../imgs/spot1.png";
import spot2 from "../imgs/spot2.png";
import spot3 from "../imgs/spot3.png";
import spot4 from "../imgs/spot4.png";
import spot5 from "../imgs/spot5.png";
import spot6 from "../imgs/spot6.png";
import spot7 from "../imgs/spot7.png";
import spot8 from "../imgs/spot8.png";
import spot9 from "../imgs/spot9.png";
import spot10 from "../imgs/spot10.png";
import spot11 from "../imgs/spot11.png";
import spot12 from "../imgs/spot12.png";

const HotSpot = () => {
  const [hotSpots, setHotSpots] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentSpot, setCurrentSpot] = useState(null);
  const [likedStates, setLikedStates] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const mockData = [
      { _id: "1", image: spot1, name: "남산타워", likes: 120, address: "서울특별시 용산구 남산공원길 105" },
      { _id: "2", image: spot2, name: "부산 타워", likes: 98, address: "부산광역시 중앙동" },
      { _id: "3", image: spot3, name: "인천 차이나타운", likes: 150, address: "인천광역시 중구 차이나타운로 12" },
      { _id: "4", image: spot4, name: "제주도 성산일출봉", likes: 60, address: "제주특별자치도 서귀포시 성산읍" },
      { _id: "5", image: spot5, name: "대구 83타워", likes: 75, address: "대구광역시 달서구 두류공원로 200" },
      { _id: "6", image: spot6, name: "광주 무등산", likes: 45, address: "광주광역시 동구 무등로 155" },
      { _id: "7", image: spot7, name: "수원 화성", likes: 85, address: "경기도 수원시 장안구 연무동" },
      { _id: "8", image: spot8, name: "대전 엑스포", likes: 110, address: "대전광역시 유성구 대덕대로 480" },
      { _id: "9", image: spot9, name: "포항 영일대 해수욕장", likes: 50, address: "경상북도 포항시 북구 영일대해변로" },
      { _id: "10", image: spot10, name: "울산 대왕암 공원", likes: 95, address: "울산광역시 동구 일산동" },
      { _id: "11", image: spot11, name: "세종 호수공원", likes: 100, address: "세종특별자치시 호수공원길" },
      { _id: "12", image: spot12, name: "강릉 경포대", likes: 130, address: "강원도 강릉시 창해로 17" }
    ];

    setHotSpots(mockData);
    setLikedStates(mockData.map(() => false));
    setLoading(false);
  }, []);

  const openModal = (spot) => {
    setCurrentSpot(spot);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const handleLikeClick = (index) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];

    const updatedSpots = hotSpots.map((spot, i) => {
      if (i === index) {
        const updatedLikes = newLikedStates[index]
          ? spot.likes + 1
          : spot.likes - 1;
        return { ...spot, likes: updatedLikes };
      }
      return spot;
    });

    setLikedStates(newLikedStates);
    setHotSpots(updatedSpots);
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="flex-1 pt-[50px] mr-5">
        <h2 className="text-2xl mb-6">
          <b>지금 인기있는 HOT SPOT</b>
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {hotSpots.map((spot, index) => (
            <div key={spot._id}>
              {index < 3 && (
                <div className="text-center text-lg font-bold mb-2">
                  Top {index + 1}
                </div>
              )}
              <div
                className="bg-gray-300 w-full mb-2 aspect-[16/9]"
                onClick={() => openModal(spot)}
              >
                <img
                  src={spot.image}
                  alt={`spot${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleLikeClick(index)}
                  className="flex items-center"
                >
                  <img
                    src={likedStates[index] ? filled_heart : empty_heart}
                    alt="Like"
                    className="mr-2 w-[20%]"
                  />
                  <p>{spot.likes ? spot.likes.toLocaleString() : "0"}</p>
                </button>
                <button
                  className="bg-[#E4EBF1] px-4 py-1 w-[68px] rounded"
                  onClick={() => openModal(spot)}
                >
                  선택
                </button>
              </div>
            </div>
          ))}
        </div>
        {currentSpot && (
          <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            spot={currentSpot}
          />
        )}
      </div>
    </div>
  );
};

export default HotSpot;
