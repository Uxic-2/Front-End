import React, { useState } from "react";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBHotspot";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import questionIcon from "../imgs/question.png";
import "../index.css";

import { useNavigate } from "react-router-dom";

const ReadyTravel = () => {
  const [selectedRange, setSelectedRange] = useState([null, null]);

  const formatDay = (locale, date) => {
    return date.getDate(); // Only return day of the month
  };

  const navigate = useNavigate();

  const NextStepPopup = () => {
    if (selectedRange[0] && selectedRange[1]) {
      // Only proceed if both start and end dates are selected
      navigate("/lodging");
    } else {
      alert("여행 기간을 선택해주세요.");
    }
  };

  const handleDateChange = (value) => {
    if (Array.isArray(value)) {
      setSelectedRange(value); // Set both start and end date
    } else {
      setSelectedRange([value, null]); // Reset if only a single date is selected
    }
  };

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="flex-grow mx-auto pt-[50px]">
        {/* 텍스트와 아이콘을 같은 줄에 배치하기 위해 flex 사용 */}
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-sm text-center mr-2">
            <b>여행 기간을 선택해주세요.</b>
          </h1>
          <div className="relative tooltip-icon">
            <img src={questionIcon} alt="Question" className="w-6 h-6" />
            <div className="tooltip-text mt-2 w-72 text-center">
              STEP 2는 여행에 있어 중요한 요소인 여행 기간을 선정하는
              단계입니다. 여행 기간을 선정해주세요.
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-8">
          <Calendar
            onChange={handleDateChange}
            value={selectedRange}
            selectRange={true}
            showDoubleView={true}
            className="p-4 custom-calendar"
            formatDay={formatDay}
            tileClassName={({ date, view }) => {
              if (selectedRange[0] && selectedRange[1]) {
                const startDate = new Date(selectedRange[0]);
                const endDate = new Date(selectedRange[1]);

                if (date >= startDate && date <= endDate) {
                  return "highlight-range"; // Apply class to highlight the selected range
                }
              }
              return null;
            }}
          />
        </div>

        {/* Display selected date range */}
        {selectedRange[0] && selectedRange[1] && (
          <div className="text-center mt-4">
            <p>
              여행 시작일: {selectedRange[0].toLocaleDateString()} <br />
              여행 종료일: {selectedRange[1].toLocaleDateString()}
            </p>
          </div>
        )}

        <div className="flex justify-end w-[75%] mt-4">
          <button
            className="bg-[#DEF8FF] text-[12px] font-bold px-4 py-2 rounded-xl"
            onClick={NextStepPopup}
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyTravel;
