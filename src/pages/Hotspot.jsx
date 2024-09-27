import React, { useState, useEffect } from "react";
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

    const mockData = [
      { _id: "1", filename: "spot1.jpg", likes: 120, address: "Seoul, Korea" },
      { _id: "2", filename: "spot2.jpg", likes: 98, address: "Busan, Korea" },
      { _id: "3", filename: "spot3.jpg", likes: 150, address: "Incheon, Korea" },
      { _id: "4", filename: "spot4.jpg", likes: 60, address: "Jeju, Korea" },
      { _id: "5", filename: "spot5.jpg", likes: 75, address: "Daegu, Korea" },
      { _id: "6", filename: "spot6.jpg", likes: 45, address: "Gwangju, Korea" },
      { _id: "7", filename: "spot7.jpg", likes: 85, address: "Suwon, Korea" },
      { _id: "8", filename: "spot8.jpg", likes: 110, address: "Daejeon, Korea" },
      { _id: "9", filename: "spot9.jpg", likes: 50, address: "Pohang, Korea" },
      { _id: "10", filename: "spot10.jpg", likes: 95, address: "Ulsan, Korea" },
      { _id: "11", filename: "spot11.jpg", likes: 100, address: "Sejong, Korea" },
      { _id: "12", filename: "spot12.jpg", likes: 130, address: "Gangneung, Korea" }
    ];

    setHotSpots(mockData);

    const likedStatuses = mockData.map((spot) => false); 
    setLikedStates(likedStatuses);

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
                  src={`http://localhost:8080/image/${spot.filename}`}
                  alt={spot.filename}
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
