import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../styles/mypage.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Map from "./MapApi";
import Modal from "./UploadModal";

import map_icon from "../imgs/mypage_map_icon.svg";
import cursor_icon from "../imgs/mypage_cursor_icon.svg";

import "../styles/sidebar.css";

function SideBar() {
  return (
    <div id="sidebar" className="w-200 bg-white p-5">
      <ul>
        <li className="mb-4 text-main-green font-bold">
          <NavLink to="/mypage">내 지도</NavLink>
        </li>
        <li className="mb-4 text-main-green font-bold">
          <NavLink to="/mypage/myfolder">내 여행 폴더</NavLink>
        </li>
        <li className="mb-4 text-main-green font-bold">
          <NavLink to="/mypage/myschedule">저장한 스케줄</NavLink>
        </li>
      </ul>
    </div>
  );
}

function ReadyTravelNoSideBar() {
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
            className="p-4 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button className="w-20 bg-slate-500 text-white px-4 py-2 rounded">
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
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-4 ">
        <div className="items-center mb-10">
          <div className="flex ">
            <img src={map_icon}></img>
            <h2 className="text-2xl">내 지도</h2>
          </div>
          <Map className="z-0" />
        </div>
        <div className="items-center mb-10 bg-slate-400">
          <div className="flex-1 p-4 text-2xl text-center font-bold ">
            여행지 사진을 업로드하여
            <br />
            나의 지도를 채워보세요
          </div>
          <div className=" bg-white w-[10%] ml-[45%] mr-[45%] mb-10">
            <Link to="#" onClick={openModal}>
              모달 열기
            </Link>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{ overlay: { zIndex: 10 } }}
            />
          </div>
          {/* <button className="my-map-upload-button">upload</button> */}
        </div>
        <div className="flex flex-col content-center">
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
          <ReadyTravelNoSideBar />
        </div>
      </div>
    </div>
  );
}

function MyFolder() {
  const myFolder = Array(10).fill({ folder_name: "folder name" });
  const listItems = 3;

  return (
    <div>
      <SideBar />
      <div className="my-container">
        {Array.from(Array(Math.ceil(myFolder.length / listItems)).keys()).map(
          (v) => {
            return (
              <div className="my-folder-wrap">
                {Array.from(
                  {
                    length:
                      myFolder.length - v * listItems >= listItems
                        ? listItems
                        : myFolder.length % listItems,
                  },
                  (_, i) => v * 3 + i
                ).map((spot, index) => {
                  return (
                    <div className="my-folder-item">
                      <div className="my-folder-img"></div>
                      <div className="my-folder-text">
                        {myFolder[index].folder_name}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

function MySchedule() {
  return (
    <>
      <SideBar />
      <div className="my-container">MySchedule</div>
    </>
  );
}

const MyPage = () => {
  return (
    <>
      <div className="my-container">이거안쓰는데지워야하나요?</div>
    </>
  );
};

export { MyPage, MyMap, MyFolder, MySchedule };
