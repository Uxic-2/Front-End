import React, { useState } from "react";
import Calendar from "react-calendar";
import Map from "./MapApi";
import "react-calendar/dist/Calendar.css";
import "../styles/mypage.css";

import map_icon from "../imgs/mypage_map_icon.svg";
import cursor_icon from "../imgs/mypage_cursor_icon.svg";

function MySidebar() {
  return (
    <div>
      <ul className="my-sidebar">
        <li>
          <a href="/mypage/mymap" className="my-sidebar-content">
            내 지도
          </a>
        </li>
        <li>
          <a href="/mypage/myfolder" className="my-sidebar-content">
            내 여행 폴더
          </a>
        </li>
        <li>
          <a href="/mypage/myschedule" className="my-sidebar-content">
            저장한 스케줄
          </a>
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            완료
          </button>
        </div>
      </div>
    </div>
  );
}

function MyMap() {
  return (
    <>
      <MySidebar />
      <div className="my-container">
        <div className="my-map-container">
          <div className="my-map-header-wrap">
            <img className="my-map-icon" src={map_icon}></img>
            <h2 className="my-map-header">내 지도</h2>
          </div>
          <Map />
        </div>
        <div className="my-map-container">
          <div className="my-map-upload-bold-text">
            여행지 사진을 업로드하여
            <br />
            나의 지도를 채워보세요
          </div>
          <button className="my-map-upload-button">upload</button>
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
    <div>
      <div className="my-container">이거안쓰는데지워야하나요?</div>
    </div>
  );
};

export { MyPage, MyMap, MyFolder, MySchedule };
