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
      { _id: "1", image: spot1, likes: 120, address: "Seoul, Korea" },
      { _id: "2", image: spot2, likes: 98, address: "Busan, Korea" },
      { _id: "3", image: spot3, likes: 150, address: "Incheon, Korea" },
      { _id: "4", image: spot4, likes: 60, address: "Jeju, Korea" },
      { _id: "5", image: spot5, likes: 75, address: "Daegu, Korea" },
      { _id: "6", image: spot6, likes: 45, address: "Gwangju, Korea" },
      { _id: "7", image: spot7, likes: 85, address: "Suwon, Korea" },
      { _id: "8", image: spot8, likes: 110, address: "Daejeon, Korea" },
      { _id: "9", image: spot9, likes: 50, address: "Pohang, Korea" },
      { _id: "10", image: spot10, likes: 95, address: "Ulsan, Korea" },
      { _id: "11", image: spot11, likes: 100, address: "Sejong, Korea" },
      { _id: "12", image: spot12, likes: 130, address: "Gangneung, Korea" }
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
