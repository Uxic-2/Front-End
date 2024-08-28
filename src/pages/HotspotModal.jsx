import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom"; 

Modal.setAppElement("#root");

function CustomModal({ isOpen, onRequestClose }) {
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
        <div className="bg-gray-300 m-auto w-[50%] h-[30vh] mb-2"></div>
        <div className="text-center">장소: 서울 월드컵 공원</div>
        <div className="text-center">주소: 서울 월드컵 공원</div>
        <div className="text-center">
          위 장소를 포함한 여행 코스를 받아보시겠습니까?
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gray-100 w-[15%] h-[40px] m-auto rounded-xl"
            onClick={onRequestClose}
          >
            아니오
          </button>
          <button
            className="bg-gray-100 w-[15%] h-[40px] m-auto rounded-xl"
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
