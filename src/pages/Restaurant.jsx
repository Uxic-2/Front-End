import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from '../components/SideBar';

const Restaurant = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-64 p-6">
        <h1 className="text-2xl font-bold mb-6">편집자가 추천해주는 맛집 BEST</h1>
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-gray-200 rounded">전체</button>
          <button className="px-4 py-2 bg-gray-200 rounded">중식</button>
          <button className="px-4 py-2 bg-gray-200 rounded">일식</button>
          <button className="px-4 py-2 bg-gray-200 rounded">양식</button>
          <button className="px-4 py-2 bg-gray-200 rounded">한식</button>
          <button className="px-4 py-2 bg-gray-200 rounded">카페</button>
          <button className="px-4 py-2 bg-gray-200 rounded">디저트</button>
          <button className="px-4 py-2 bg-gray-200 rounded">인스타 핫플</button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex p-4 bg-white border border-gray-300 rounded">
            <div className="w-36 h-24 bg-gray-300"></div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">맛집 위치</h2>
              <p className="text-gray-700">서울시 노원구 노원로</p>
              <p className="text-gray-700">가격</p>
              <button className="mt-2 px-4 py-2 bg-gray-200 rounded">선택</button>
            </div>
          </div>
          <div className="flex p-4 bg-white border border-gray-300 rounded">
            <div className="w-36 h-24 bg-gray-300"></div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">맛집 위치</h2>
              <p className="text-gray-700">서울시 노원구 노원로</p>
              <p className="text-gray-700">가격</p>
              <button className="mt-2 px-4 py-2 bg-gray-200 rounded">선택</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
