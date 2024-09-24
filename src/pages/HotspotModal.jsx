import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

function CustomModal({ isOpen, onRequestClose, spot }) {
  const navigate = useNavigate();

  const goToHiddenSpot = () => {
    navigate("/hidden-spot");
  };

  return (
    <Modal
      className={`fixed z-0 bg-white m-[10%_0_0_25%] w-[60%] h-[60vh] rounded-xl overflow-auto ${
        isOpen ? "" : "hidden"
      }`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.05)" } }}
    >
      <div className="p-5">
        <button className="ml-[98%]" onClick={onRequestClose}>
          X
        </button>

        {/* 사진 표시 */}
        <div className="bg-gray-300 m-auto w-[50%] aspect-[16/9] mb-2">
          <img src={`http://localhost:8080/image/${spot.filename}`} alt={spot.filename} className="w-full h-full object-cover" />
        </div>
        
        {/* 사진 정보 표시 */}
        <div className="text-center">장소: {spot.filename}</div>
        <div className="text-center">주소: {spot.address ? spot.address : '주소 없음'}</div>
        <div className="text-center">
          위 장소를 포함한 여행 코스를 받아보시겠습니까?
        </div>
        
        <div className="flex justify-center mt-1"> 
          <button
            className="bg-gray-100 w-[15%] h-[40px] rounded-xl mr-10 shadow-md"  // 그림자 추가
            onClick={onRequestClose}
          >
            아니오
          </button>

          <button
            className="bg-[#fc926b] text-white w-[15%] h-[40px] rounded-xl shadow-md"  // 그림자 추가
            onClick={goToHiddenSpot}
          >
            네
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default CustomModal;
