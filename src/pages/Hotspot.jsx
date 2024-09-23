import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // useNavigate 추가
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import CustomModal from "./HotspotModal"; // Modal import
import heart from "../imgs/heart.svg";
import heart_fill from "../imgs/heart_fill.svg";

const HotSpot = () => {
  const [hotSpots, setHotSpots] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentSpot, setCurrentSpot] = useState(null); // 클릭된 사진의 정보 저장
  const [likedStates, setLikedStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // 네비게이션 추가

  useEffect(() => {
    const fetchHotSpots = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/search', {
          withCredentials: true  // 세션 쿠키 포함
        });
        const data = response.data.photos;
        setHotSpots(data);
        setLikedStates(Array(data.length).fill(false));
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log("인증 실패: 세션이 유효하지 않음.");  // 401 발생 시 로그
        } else {
          console.error('데이터를 불러오는 중 오류:', error);
          setError('데이터를 불러오는 중 오류가 발생했습니다.');
        }
        setLoading(false);
      }
    };
  
    fetchHotSpots();
  }, [navigate]);  // useNavigate 의존성 추가
  

  const openModal = (spot) => {
    setCurrentSpot(spot); // 클릭한 사진의 정보를 저장
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const handleLikeClick = (index) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStates(newLikedStates);
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
      <div className="flex-1 p-4 mr-5">
        <h2 className="text-2xl mb-6"><b>지금 인기있는 HOT SPOT</b></h2>
        <div className="grid grid-cols-3 gap-6">
          {hotSpots.map((spot, index) => (
            <div key={spot._id}>
              {index < 3 && (
                <div className="text-center text-lg font-bold mb-2">
                  Top {index + 1}
                </div>
              )}
              <div className="bg-gray-300 w-full mb-2 aspect-[16/9]" onClick={() => openModal(spot)}>
                <img src={`http://localhost:8080/image/${spot.filename}`} alt={spot.filename} className="w-full h-full object-cover"/>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleLikeClick(index)}
                  className="flex items-center"
                >
                  <img
                    src={likedStates[index] ? heart_fill : heart}
                    alt="Like"
                    className="mr-2 w-[20%]"
                  />
                  <p>{spot.likes ? spot.likes.toLocaleString() : '0'}</p>
                </button>
                <button className="bg-[#E4EBF1] px-4 py-1 w-[68px] rounded" onClick={() => openModal(spot)}>
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
            spot={currentSpot} // 클릭된 사진 정보 전달
          />
        )}
      </div>
    </div>
  );
};

export default HotSpot;
