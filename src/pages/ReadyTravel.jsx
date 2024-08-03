import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../index.css';

const ReadyTravel = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow p-4">
        <h1 className="text-xl mb-4 text-center">여행 기간을 선택해주세요.</h1>
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded">완료</button>
        </div>
      </div>
    </div>
  );
};

export default ReadyTravel;
