import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";

const Lodging = () => {
  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="ml-64 p-6">
        <h1 className="text-2xl font-bold mb-6">편집자가 추천해주는 숙소 BEST</h1>
        <h1 className="text-xl font-bold mb-6">카테고리</h1>
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-orange-500 hover:text-white active:bg-orange-500">
            전체
          </button>
          <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-orange-500 hover:text-white active:bg-orange-500">
            호텔, 리조트
          </button>
          <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-orange-500 hover:text-white active:bg-orange-500">
            모텔
          </button>
          <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-orange-500 hover:text-white active:bg-orange-500">
            펜션
          </button>
          <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-orange-500 hover:text-white active:bg-orange-500">
            홈, 빌라
          </button>
          <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-orange-500 hover:text-white active:bg-orange-500">
            캠핑
          </button>
          <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-orange-500 hover:text-white active:bg-orange-500">
            게하, 한옥
          </button>
        </div>
        
        <div className="flex justify-end mb-6">
          <select className="border rounded p-2" defaultValue="거리순">
            <option value="거리순">거리순</option>
            <option value="가격순">가격순</option>
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex p-4 bg-white border border-gray-300 rounded">
            <div className="w-36 h-24 bg-gray-300"></div>
            <div className="ml-4 flex-grow">
              <h2 className="text-xl font-semibold">숙소 위치</h2>
              <p className="text-gray-700">서울시 노원구 노원로</p>
              <p className="text-gray-700">가격</p>
              <div className="flex items-center mt-2">
                <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded mr-2 hover:bg-orange-500 hover:text-white">
                  선택
                </button>
                <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-orange-500 hover:text-white">
                  ❤️
                </button>
              </div>
            </div>
          </div>
          <div className="flex p-4 bg-white border border-gray-300 rounded">
            <div className="w-36 h-24 bg-gray-300"></div>
            <div className="ml-4 flex-grow">
              <h2 className="text-xl font-semibold">숙소 위치</h2>
              <p className="text-gray-700">서울시 노원구 노원로</p>
              <p className="text-gray-700">가격</p>
              <div className="flex items-center mt-2">
                <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded mr-2 hover:bg-orange-500 hover:text-white">
                  선택
                </button>
                <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-orange-500 hover:text-white">
                  ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lodging;
