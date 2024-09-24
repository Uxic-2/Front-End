import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import CustomModal from "./HotspotModal";
import empty_heart from "../imgs/empty_heart.png";
import filled_heart from "../imgs/filled_heart.png";

const HotSpot = () => {
  const [hotSpots, setHotSpots] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentSpot, setCurrentSpot] = useState(null);
  const [likedStates, setLikedStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotSpots = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/search", {
          withCredentials: true,
        });
        const data = response.data.photos;
        setHotSpots(data);

        // 각 spot의 ID에 따라 사용자가 좋아요를 눌렀는지 확인하는 로컬 스토리지에서의 초기 상태 설정
        const likedStatuses = data.map((spot) => {
          return localStorage.getItem(`liked_${spot._id}`) === "true";
        });

        setLikedStates(likedStatuses);
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log("인증 실패: 세션이 유효하지 않음.");
        } else {
          console.error("데이터를 불러오는 중 오류:", error);
          setError("데이터를 불러오는 중 오류가 발생했습니다.");
        }
        setLoading(false);
      }
    };

    fetchHotSpots();
  }, [navigate]);

  const openModal = (spot) => {
    setCurrentSpot(spot);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  // 하트 클릭 시 좋아요 수 증가/감소 로직
  const handleLikeClick = (index, spotId) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index]; // 상태 반전

    // 좋아요 상태를 반영하여 숫자 증가/감소
    const updatedSpots = hotSpots.map((spot, i) => {
      if (i === index) {
        const updatedLikes = newLikedStates[index]
          ? spot.likes + 1
          : spot.likes - 1;
        return { ...spot, likes: updatedLikes }; // likes 수 업데이트
      }
      return spot;
    });

    // 좋아요 상태를 로컬 스토리지에 저장
    if (newLikedStates[index]) {
      localStorage.setItem(`liked_${spotId}`, "true"); // 좋아요 상태 저장
    } else {
      localStorage.setItem(`liked_${spotId}`, "false"); // 좋아요 상태 취소
    }

    setLikedStates(newLikedStates);
    setHotSpots(updatedSpots); // 업데이트된 핫스팟을 설정하여 리렌더링
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!hotSpots.length) {
    return <div>데이터가 없습니다.</div>;
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
                  src={`http://localhost:8080/image/${spot.filename}`}
                  alt={spot.filename}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleLikeClick(index, spot._id)} // spot ID 전달
                  className="flex items-center"
                >
                  <img
                    src={likedStates[index] ? filled_heart : empty_heart} // 좋아요 상태에 따른 이미지 변경
                    alt="Like"
                    className="mr-2 w-[20%]"
                  />
                  <p>{spot.likes ? spot.likes.toLocaleString() : "0"}</p>{" "}
                  {/* 좋아요 수 표시 */}
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
        {/* 모달 컴포넌트 */}
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
