// 이름 프레젠테이션어쩌고로 했는데 일단 내용 다 집어넣어놔서 이름을 바꿔야 할 듯(전서연)
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function PresentaionalModal({ isOpen, onRequestClose, renderHiddenspot }) {
  return (
    <Modal
      className={`fixed z-0 left-0 top-0 w-[100vw] h-[100vh] overflow-auto${
        isOpen ? "" : "hidden"
      }`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="mt-20 m-auto p-5 rounded-2xl border border-gray-400 w-[60vw] ">
        <button className="ml-[98%] " onClick={onRequestClose}>
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
            onClick={renderHiddenspot}
          >
            네
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default PresentaionalModal;
