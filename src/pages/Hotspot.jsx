import React from "react";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import { Route, Routes } from "react-router-dom";

const HotSpot = () => {
  const hotSpots = Array(9).fill({ likes: 123456789 });

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl">지금 인기있는 HOT SPOT</h2>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded p-2"
          />
        </div>
        <div className="flex-1 p-4">인기순</div>
        <div className="grid grid-cols-3 gap-6">
          {hotSpots.map((spot, index) => (
            <div key={index}>
              <div className="bg-gray-300 w-full h-60 mb-2"></div>
              <div className="flex justify-between items-center">
                <p>❤ {spot.likes.toLocaleString()}</p>
                <button className="bg-gray-400 px-4 py-2 rounded">선택</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotSpot;
