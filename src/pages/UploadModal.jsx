// 이름 프레젠테이션어쩌고로 했는데 일단 내용 다 집어넣어놔서 이름을 바꿔야 할 듯(전서연)
import React from "react";
import Modal from "react-modal";

import img_icon from "../imgs/mymap_image.png";
import loc_icon from "../imgs/mymap_loc.png";
import left_icon from "../imgs/lefticon.svg";
import right_icon from "../imgs/righticon.svg";

Modal.setAppElement("#root");

function PresentaionalModal({ isOpen, onRequestClose }) {
  const uploadPost = () => {
    console.log("데이터 전송 중...");
    //코드 추가하기...
    onRequestClose();
  };

  return (
    <Modal
      className={`fixed z-0 bg-[#FFFADD] m-[4%_0_0_10%] w-[85%] h-[80vh]" overflow-auto${
        isOpen ? "" : "hidden"
      }`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0)" } }}
    >
      <div className="p-5">
        <button className="ml-[98%]" onClick={onRequestClose}>
          X
        </button>
        <div className="justify-center">user_123</div>
        <div className="flex bg-white m-auto w-[100%] h-[35vh] mb-2">
          <img src={left_icon} className="w-5"></img>
          <div className="flex flex-col w-[100%] m-auto ">
            <img className="mt-[5%] mb-5 m-auto w-[5%]" src={img_icon}></img>
            <div className="m-[0_auto] text-center">
              사진을 여기에 끌어다 놓으세요
            </div>
            <button
              className="m-[1%_auto_3%] bg-main-orange text-white w-[15%] h-[40px] rounded-xl"
              // onClick={uploadimg}
            >
              컴퓨터에서 선택
            </button>
          </div>
          <img src={right_icon} className="w-5"></img>
        </div>
        <div className="flex m-[2%_auto] w-[100%]">
          <img className="w-5 h-5" src={loc_icon}></img>
          <div>위치 추가</div>
        </div>
        <div className="m-[2%_auto] w-[100%]">
          <form>
            <input
              className="w-[100%] p-4 border bg-white bg-opacity-0 text-xs"
              type="text"
              placeholder="제목"
            ></input>
            <textarea
              className="w-[100%] p-4 border bg-white bg-opacity-0 resize-none text-xs"
              placeholder="설명글"
              rows="4"
            ></textarea>
          </form>
        </div>
        <div className="flex justify-center w-[100%]">
          <button
            className="bg-main-orange text-white w-[15%] h-[40px] m-auto rounded-xl"
            onClick={uploadPost}
          >
            Upload
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default PresentaionalModal;
