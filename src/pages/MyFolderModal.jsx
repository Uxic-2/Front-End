import React from "react";
import Modal from "react-modal";

import img_icon from "../imgs/mymap_image.png";
import loc_icon from "../imgs/mymap_loc.png";
import folder_icon from "../imgs/mypage_folder.svg";

import HotSpotList from "./MyFolderModalList";

Modal.setAppElement("#root");

function PresentaionalModal({ isOpen, onRequestClose }) {
  const myFolder = Array(10).fill({ folder_name: "folder name" });
  const listItems = 3;
  return (
    <Modal
      className="fixed z-0 bg-white m-[4%_0_0_10%] w-[85%] h-[90vh] overflow-auto"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0)" } }}
    >
      <div className="p-5">
        <div className="flex">
          <img className="w-10" src={folder_icon}></img>
          <div className="text-xl">부산</div>
        </div>
        {/* folder container */}
        <div className="border border-main-orange border-solid rounded-xl w-[100%] p-4 mt-4">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <button
                className="border border-solid border-black text-[10px] w-[10%] h-[25px] rounded-xl mr-auto"
                onClick={onRequestClose}
              >
                스케줄 만들기
              </button>
              <div className="flex justify-end ml-2 w-[100%]">
                <button
                  className="ml-2 border border-solid border-black text-[10px] w-[5%] h-[25px] rounded-xl"
                  onClick={onRequestClose}
                >
                  수정
                </button>
                <button className="ml-2" onClick={onRequestClose}>
                  X
                </button>
              </div>
            </div>
            <div className="w-[100%] mt-2">
              <div>관광지</div>
              <HotSpotList HotSpot={myFolder} listItems={listItems} />
            </div>
            <div className="w-[100%] mt-20">
              <div>숙소</div>
              <HotSpotList HotSpot={myFolder} listItems={listItems} />
            </div>
            <div className="w-[100%] mt-20">
              <div>맛집</div>
              <HotSpotList HotSpot={myFolder} listItems={listItems} />
            </div>
          </div>

          <div className="flex flex-col m-auto w-[100%]"></div>
        </div>
      </div>
    </Modal>
  );
}

export default PresentaionalModal;
