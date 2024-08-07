import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../styles/sidebar.css";
import "../styles/mypage.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Map from "./MapApi";
import Modal from "./UploadModal";

import map_icon from "../imgs/mypage_map_icon.svg";
import cursor_icon from "../imgs/mypage_cursor_icon.svg";

function MySidebar() {
  return (
    <>
      <aside className="sidebar">
        <NavLink to="/mypage/mymap" className="sidebar-item side1">
          내 지도
        </NavLink>
        <NavLink to="/mypage/myfolder" className="sidebar-item side2">
          내 여행 폴더
        </NavLink>
        <NavLink to="/mypage/myschedule" className="sidebar-item side3">
          저장한 스케줄
        </NavLink>
      </aside>
    </>
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
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
    <>
      <MySidebar />
      <div className="my-container">
        <div className="my-map-container">
          <div className="my-map-header-wrap">
            <img className="my-map-icon" src={map_icon}></img>
            <h2 className="my-map-header">내 지도</h2>
          </div>
          <Map style={{ overlay: { zIndex: 0 } }} />
        </div>
        <div className="my-map-container">
          <div className="my-map-upload-bold-text">
            여행지 사진을 업로드하여
            <br />
            나의 지도를 채워보세요
          </div>
          <div>
            <Link to="#" onClick={openModal}>
              모달 열기
            </Link>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{ overlay: { zIndex: 1000 } }}
            />
          </div>
          {/* <button className="my-map-upload-button">upload</button> */}
        </div>
        <div className="my-map-container">
          <div className="my-map-section">
            <img
              className="my-cursor_icon"
              src={cursor_icon}
              alt="cursor_icon"
            />
            <div className="my-map-upload-bold-text">혹시 여행 중이신가요?</div>
            <div className="my-map-upload-text">
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
    </>
  );
}

function MyFolder() {
  const myFolder = Array(10).fill({ folder_name: "folder name" });
  const listItems = 3;

  return (
    <div>
      <MySidebar />
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
      <MySidebar />
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

export { MySidebar, MyPage, MyMap, MyFolder, MySchedule };
