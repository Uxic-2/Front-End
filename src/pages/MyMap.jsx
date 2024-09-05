import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBMypage";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Map from "./MapApi";
import Modal from "./UploadModal";

import map_icon from "../imgs/mypage_map_icon.svg";
import cursor_icon from "../imgs/mypage_cursor_icon.svg";

function SelectDate() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex">
      <div className="flex-grow p-4">
        <div className="flex justify-center space-x-8">
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
            showDoubleView={true}
            className="p-4 border border-gray-300 rounded custom-calendar"
          />
        </div>
        <div className="flex justify-end w-[75%] mt-4">
          <button className="w-20 bg-[#E4EBF1] text-[14px] font-bold px-4 py-2 rounded-xl">
            완료
          </button>
        </div>
      </div>
    </div>
  );
}

function MyMap() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="flex mx-8">
      {" "}
      {/* Added mx-8 for horizontal margin */}
      <SideBar links={links} />
      <div className="flex-1 p-4">
        <div className="items-center mb-10">
          <div className="flex">
            <img src={map_icon} alt="Map Icon" />
            <h2 className="text-2xl">내 지도</h2>
          </div>
          <Map className="z-0 w-[70%] h-[70vh] bg-slate-200" />
        </div>
        <div className="flex flex-col items-center mx-auto m-20 p-12 w-[70%] h-[40vh] bg-[#E4EBF1] rounded-2xl">
          <div className="mt-7 text-2xl text-center font-bold">
            여행지 사진을 업로드하여
            <br />
            나의 지도를 채워보세요
          </div>
          <Link
            to="#"
            className="bg-black text-white text-center p-2 w-[20%] h-[40px] m-auto rounded-md"
            onClick={openModal}
          >
            Upload
          </Link>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
          {/* <button className="my-map-upload-button">upload</button> */}
        </div>
        {/* <div className="flex flex-col content-center">
          <div className="relative">
            <img
              className="relative w-[6%] mt-[5%] ml-[47%]"
              src={cursor_icon}
              alt="cursor_icon"
            />
            <div className="flex-1 p-4 text-2xl text-center font-bold">
              혹시 여행 중이신가요?
            </div>
            <div className="flex-1 p-4 text-base text-center">
              PHOTATO와 함께 여행 계획을 세우지 않았다면
              <br />
              여행 경로를 파악할 수 있도록
              <br />
              여행 시작 날짜와 끝나는 날짜를 입력해주세요
            </div>
          </div>
          <SelectDate />
        </div> */}
      </div>
    </div>
  );
}

export default MyMap;
