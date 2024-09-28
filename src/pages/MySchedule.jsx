import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBMypage";

import schedule_icon from "../imgs/mypage_schedule.svg";

function MySchedule() {
  const myFolder = [
    { folder_name: "서울 여행 일정" },
    { folder_name: "부산 여행 일정" },
    { folder_name: "제주도 여행 일정" },
    { folder_name: "강원도 여행 일정" },
    { folder_name: "경주 여행 일정" },
    { folder_name: "전주 여행 일정" }
  ];
  
  const listItems = 3; 
  const navigate = useNavigate();

  const goToSchedule = () => {
    navigate("/schedule-edit");
  };

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="flex-1 pt-[50px]">
        <div className="items-center">
          <div className="flex  m-auto w-[70%] ">
            <h2 className="text-2xl font-bold">저장한 스케줄</h2>
          </div>
        </div>
        <div className="overflow-auto m-auto pb-5 w-[70%] h-[75vh] border-2 border-main-orange rounded-2xl">
          {Array.from(Array(Math.ceil(myFolder.length / listItems)).keys()).map(
            (v) => {
              return (
                <div className="flex m-auto w-[80%]">
                  {Array.from(
                    {
                      length:
                        myFolder.length - v * listItems >= listItems
                          ? listItems
                          : myFolder.length % listItems,
                    },
                    (_, i) => v * listItems + i
                  ).map((spot, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center w-[33%] mt-20"
                        onClick={goToSchedule}
                      >
                        <img
                          src={schedule_icon}
                          className="w-[120px] h-[120px]"
                          alt="Schedule Icon"
                        />
                        <div className="flex-1 text-base text-center">
                          {myFolder[spot].folder_name}
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
