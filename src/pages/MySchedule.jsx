import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBMypage";

import schedule_icon from "../imgs/mypage_schedule.svg";

function MySchedule() {
  const myFolder = Array(10).fill({ folder_name: "folder name" });
  const listItems = 3;

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="flex-1 p-4 ">
        <div className="items-center mb-10">
          <div className="flex ">
            <h2 className="text-2xl">저장한 스케줄</h2>
          </div>
        </div>
        <div className="m-auto w-[70%] border-2 border-main-orange rounded-xl">
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
                    (_, i) => v * 3 + i
                  ).map((spot) => {
                    return (
                      <div className="flex flex-col items-center w-[33%] mt-20">
                        <img
                          src={schedule_icon}
                          className="w-[120px] h-[120px]"
                        ></img>
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
