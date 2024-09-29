import React, { useEffect, useState } from "react";
import Map from "./MapApi";
import questionIcon from "../imgs/question.png";
import order_icon from "../imgs/schedule_order_icon.svg";
import delete_icon from "../imgs/schedule_delete_icon.svg";
import FrameMap from "../imgs/FrameMap.svg";

import spot1 from "../imgs/spot1.png";
import spot2 from "../imgs/spot2.png";
import spot3 from "../imgs/spot3.png";
import spot4 from "../imgs/spot4.png";
import spot5 from "../imgs/spot5.png";
import spot6 from "../imgs/spot6.png";
import spot7 from "../imgs/spot7.png";
import spot8 from "../imgs/spot8.png";
import spot9 from "../imgs/spot9.png";
import spot10 from "../imgs/spot10.png";
import spot11 from "../imgs/spot11.png";
import spot12 from "../imgs/spot12.png";

import lg1 from "../imgs/lg1.png";
import lg2 from "../imgs/lg2.png";
import lg3 from "../imgs/lg3.png";
import lg4 from "../imgs/lg4.png";
import lg5 from "../imgs/lg5.png";
import lg6 from "../imgs/lg6.png";
import lg7 from "../imgs/lg7.png";
import lg8 from "../imgs/lg8.png";
import lg9 from "../imgs/lg9.png";
import lg10 from "../imgs/lg10.png";

import f1 from "../imgs/f1.png";
import f2 from "../imgs/f2.png";
import f3 from "../imgs/f3.png";
import f4 from "../imgs/f4.png";
import f5 from "../imgs/f5.png";
import f6 from "../imgs/f6.png";
import f7 from "../imgs/f7.png";
import f8 from "../imgs/f8.png";
import f9 from "../imgs/f9.png";
import f10 from "../imgs/f10.png";

// 랜덤 아이템
function getRandomItems(arr, count, exclude = []) {
  const availableItems = arr.filter(item => !exclude.includes(item));
  const shuffled = [...availableItems].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function Schedule() {
  const [schedules, setSchedules] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  const generateSchedule = () => {
    const allSpots = [
      { name: "남산타워", address: "서울특별시 용산구 남산공원길 105", image: spot1 },
      { name: "해운대 해수욕장", address: "부산광역시 해운대구 해운대해변로 264", image: spot2 },
      { name: "제주 성산일출봉", address: "제주특별자치도 서귀포시 성산읍 성산리", image: spot3 },
      { name: "광안리 해변", address: "부산광역시 수영구 광안해변로", image: spot4 },
      { name: "서울숲", address: "서울특별시 성동구 뚝섬로 273", image: spot5 },
      { name: "경복궁", address: "서울특별시 종로구 사직로 161", image: spot6 },
      { name: "동대문 디자인 플라자", address: "서울특별시 중구 을지로 281", image: spot7 },
      { name: "한강공원", address: "서울특별시 용산구 이촌로 72", image: spot8 },
      { name: "인사동 거리", address: "서울특별시 종로구 인사동길", image: spot9 },
      { name: "명동 거리", address: "서울특별시 중구 명동길", image: spot10 },
      { name: "부산 타워", address: "부산광역시 중구 용두산길 37-55", image: spot11 },
      { name: "전주 한옥마을", address: "전라북도 전주시 완산구 기린대로 99", image: spot12 },
    ];

    const allLodgings = [
      { name: "서울 호텔", address: "서울특별시 강남구 역삼동 123", image: lg1 },
      { name: "부산 호텔", address: "부산광역시 해운대구 중동 789", image: lg2 },
      { name: "제주 호텔", address: "제주특별자치도 서귀포시 제주호텔 111", image: lg3 },
      { name: "인천 호텔", address: "인천광역시 연수구 인천호텔 222", image: lg4 },
      { name: "전주 호텔", address: "전라북도 전주시 완산구 전주호텔 333", image: lg5 },
    ];

    const allRestaurants = [
      { name: "서울 맛집", address: "서울특별시 종로구 456", image: f1 },
      { name: "부산 맛집", address: "부산광역시 서구 987", image: f2 },
      { name: "제주 맛집", address: "제주특별자치도 제주시 222", image: f3 },
      { name: "전주 맛집", address: "전라북도 전주시 덕진구 123", image: f4 },
      { name: "강릉 맛집", address: "강원도 강릉시 주문진로 789", image: f5 },
    ];


    const day1Spots = getRandomItems(allSpots, 3);
    const day1Lodging = getRandomItems(allLodgings, 1);
    const day1Restaurant = getRandomItems(allRestaurants, 1);

   
    const day2Spots = getRandomItems(allSpots, 3, day1Spots);
    const day2Lodging = getRandomItems(allLodgings, 1, day1Lodging);
    const day2Restaurant = getRandomItems(allRestaurants, 1, day1Restaurant);

    const tempSchedules = [
      {
        id: 1,
        name: "Generated Schedule",
        startDate: "2024-08-28",
        endDate: "2024-08-30",
        days: [
          {
            day: "Day 1",
            places: [
              ...day1Spots.map(spot => ({
                tag: "관광지",
                name: spot.name,
                address: spot.address,
                thumbnail: spot.image,
              })),
              {
                tag: "맛집",
                name: day1Restaurant[0].name,
                address: day1Restaurant[0].address,
                thumbnail: day1Restaurant[0].image,
              },
              {
                tag: "숙소", 
                name: day1Lodging[0].name,
                address: day1Lodging[0].address,
                thumbnail: day1Lodging[0].image,
              },
            ],
          },
          {
            day: "Day 2",
            places: [
              ...day2Spots.map(spot => ({
                tag: "관광지",
                name: spot.name,
                address: spot.address,
                thumbnail: spot.image,
              })),
              {
                tag: "맛집",
                name: day2Restaurant[0].name,
                address: day2Restaurant[0].address,
                thumbnail: day2Restaurant[0].image,
              },
              {
                tag: "숙소", // 항상 마지막
                name: day2Lodging[0].name,
                address: day2Lodging[0].address,
                thumbnail: day2Lodging[0].image,
              },
            ],
          },
        ],
      },
    ];

    setSchedules(tempSchedules);
    setSelectedDay(tempSchedules[0].days[0]); 
  };


  const handleDeletePlace = (dayIndex, placeIndex) => {
    const updatedSchedules = [...schedules];
    updatedSchedules[0].days[dayIndex].places.splice(placeIndex, 1);
    setSchedules(updatedSchedules);
    setSelectedDay(updatedSchedules[0].days[dayIndex]); 
  };

  useEffect(() => {
    generateSchedule(); 
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleRegenerateClick = () => {
    generateSchedule();
  };

  return (
    <div className="flex-1 p-4">
      <div className="flex flex-col items-center justify-center h-[20vh]">
        <div className="flex items-center">
          <h1 className="text-lg font-medium">여행 스케줄 이름</h1>
          <div className="relative inline-block ml-2 group">
            <img src={questionIcon} alt="Question" className="w-4 h-4 cursor-pointer" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 p-2 text-sm bg-gray-700 text-white rounded hidden group-hover:block">
              STEP 4에서는 3단계의 선택을 바탕으로 짜여진 이동 동선 및 경로를 확인하실 수 있습니다.
            </div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Enter route name"
          className="w-[30%] mt-2 p-2 border border-orange-300 rounded"
        />
      </div>

      <Map className="z-0 w-[50%] h-[70vh] bg-slate-200 mt-10" />
      <div className="flex flex-col items-center justify-center mt-10">
        <img
          className="z-0 w-[50%] h-[70vh] bg-slate-200"
          src={FrameMap}
          alt="Frame Map"
        />
      </div>
      <button
        className="mt-10 mb-10 m-auto flex items-center justify-center bg-main-orange font-bold text-[12px] w-[130px] h-[35px] rounded-xl"
        onClick={handleRegenerateClick} 
      >
        다시 생성하기
      </button>
      {schedules.length > 0 && (
        <div className="flex w-[80%] mt-4 m-auto">
          {schedules[0].days.map((day, index) => (
            <button
              key={index}
              className={`flex items-center justify-center text-center text-[12px] w-[80px] h-[40px] rounded-full m-auto ${
                selectedDay.day === day.day ? "bg-main-green" : "bg-gray-200"
              }`}
              onClick={() => handleDayClick(day)}
            >
              {day.day}
            </button>
          ))}
        </div>
      )}
      {selectedDay && (
        <div className="mt-4">
          <hr className="mt-5 mb-5" />
          <ul>
            {selectedDay.places.map((place, index) => (
              <li className="flex" key={index}>
                <div className="w-40 h-[145px] flex items-center justify-center">
                  <span className="text-center font-bold">{index + 1}</span>
                </div>
                <div>
                  <div className="flex items-center justify-center text-center text-[12px] w-[60px] h-[20px] bg-[#FBD0A5] rounded mb-5">
                    {place.tag}
                  </div>
                  <div className="flex items-center">
                    <img
                      src={place.thumbnail}
                      className="w-[125px] h-[85px] bg-slate-200"
                      alt={place.name} 
                    />
                    <div className="ml-5">
                      <div className="text-[14px]">{place.name}</div>
                      <div className="text-[14px]">{place.address}</div>
                    </div>
                  </div>
                </div>
                <div className="flex mr-20 m-auto">
                  <img className="flex items-center m-5" src={order_icon} alt="Order" />
                  <img
                    className="flex items-center m-5 cursor-pointer"
                    src={delete_icon}
                    alt="Delete"
                    onClick={() => handleDeletePlace(schedules[0].days.indexOf(selectedDay), index)} 
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="bg-black text-white text-center text-[14px] p-2 w-60 h-[40px] mt-20 mb-20 m-auto rounded-md flex items-center justify-center"
      >
        Save
      </button>
    </div>
  );
}

export default Schedule;
