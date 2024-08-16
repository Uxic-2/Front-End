import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import schedule_icon from "../imgs/mypage_schedule.svg";

// decouple 해야함(SideBar)
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

function MySchedule() {
  const myFolder = Array(10).fill({ folder_name: "folder name" });
  const listItems = 3;

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-4 ">
        <div className="items-center mb-10">
          <div className="flex ">
            <h2 className="text-2xl">저장한 스케쥴</h2>
          </div>
        </div>
        <div className=" m-auto w-[70%] border-2 border-main-orange rounded-xl">
          {Array.from(Array(Math.ceil(myFolder.length / listItems)).keys()).map(
            (v) => {
              return (
                <div className="flex p-2 m-auto w-[50%]">
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
                      <div className="flex flex-col items-center w-[200px] h-[250px]">
                        <img
                          src={schedule_icon}
                          className="w-[120px] h-[120px]"
                        ></img>
                        <div className="flex-1 text-base text-center">
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
    </div>
  );
}

export default MySchedule;
