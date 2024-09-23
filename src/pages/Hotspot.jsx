import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // useNavigate 추가
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import Modal from "./HotspotModal";
import HiddenSpot from "./HiddenSpot";
import questionIcon from "../imgs/question.png";
import heart from "../imgs/heart.svg";
import heart_fill from "../imgs/heart_fill.svg";

const HotSpot = () => {
  const [hotSpots, setHotSpots] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("HotSpot");
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
  

  const openModal = () => setModalIsOpen(true);
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
        {currentComponent === "HotSpot" ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center relative">
                <h2 className="text-2xl"><b>지금 인기있는 HOT SPOT</b></h2>
                <div className="tooltip-icon ml-2">
                  <img src={questionIcon} alt="Question" className="w-6 h-6" />
                  <div className="tooltip-text -mt-2 -ml-16 w-72">
                    STEP 1에서는 타 유저들의 여행 사진을 모아두어 한 눈에
                    확인하실 수 있습니다. 하트 버튼을 누를 시 여행 폴더에
                    저장하실 수 있고, 선택 버튼을 누르시면 HIDDEN SPOT으로
                    넘어가게 됩니다. 지금 당장 원하는 사진을 골라보세요!
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {hotSpots.map((spot, index) => (
                <div key={spot._id}>
                  {index < 3 && (
                    <div className="text-center text-lg font-bold mb-2">
                      Top {index + 1}
                    </div>
                  )}
                  <div className="bg-gray-300 w-full mb-2 aspect-[16/9]">
                    <img src={spot.imageUrl} alt={spot.filename} className="w-full h-full object-cover"/>
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
                      <p>{spot.likes.toLocaleString()}</p>
                    </button>

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
                      renderHiddenspot={() => setCurrentComponent("Hiddenspot")}
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
