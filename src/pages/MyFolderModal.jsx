import React from "react";
import Modal from "react-modal";
import HotSpotList from "./MyFolderModalList";

import folder_icon from "../imgs/mypage_folder.svg";

// 관광지, 숙소, 맛집 이미지 import
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

import lg1 from "../imgs/lg1.png";
import lg2 from "../imgs/lg2.png";
import lg3 from "../imgs/lg3.png";
import lg4 from "../imgs/lg4.png";
import lg5 from "../imgs/lg5.png";
import lg6 from "../imgs/lg6.png";
import lg7 from "../imgs/lg7.png";
import lg8 from "../imgs/lg8.png";
import lg9 from "../imgs/lg9.png";
import lg10 from "../imgs/lg10.png";

import f1 from "../imgs/f1.png";
import f2 from "../imgs/f2.png";
import f3 from "../imgs/f3.png";
import f4 from "../imgs/f4.png";
import f5 from "../imgs/f5.png";
import f6 from "../imgs/f6.png";
import f7 from "../imgs/f7.png";
import f8 from "../imgs/f8.png";
import f9 from "../imgs/f9.png";
import f10 from "../imgs/f10.png";

// 랜덤 아이템 선택
function getRandomItems(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

Modal.setAppElement("#root");

function PresentationalModal({ isOpen, onRequestClose }) {
  const hotSpots = getRandomItems(
    [spot1, spot2, spot3, spot4, spot5, spot6, spot7, spot8, spot9, spot10, spot11, spot12],
    9
  );
  const lodgings = getRandomItems([lg1, lg2, lg3, lg4, lg5, lg6, lg7, lg8, lg9, lg10], 4);
  const restaurants = getRandomItems([f1, f2, f3, f4, f5, f6, f7, f8, f9, f10], 6);

  return (
    <Modal
      className="fixed z-0 bg-white m-[4%_0_0_10%] w-[85%] h-[90vh] overflow-auto"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0)" } }}
    >
      <div className="p-5">
        <div className="flex">
          <img className="w-10" src={folder_icon} alt="Folder Icon" />
          <div className="text-xl">부산</div>
        </div>
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
              <HotSpotList HotSpot={hotSpots} listItems={9} />
            </div>
            <div className="w-[100%] mt-20">
              <div>숙소</div>
              <HotSpotList HotSpot={lodgings} listItems={4} />
            </div>
            <div className="w-[100%] mt-20">
              <div>맛집</div>
              <HotSpotList HotSpot={restaurants} listItems={6} />
            </div>
          </div>

          <div className="flex flex-col m-auto w-[100%]"></div>
        </div>
      </div>
    </Modal>
  );
}

export default PresentationalModal;
