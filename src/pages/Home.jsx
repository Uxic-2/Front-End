import React from "react";
import exampleImage from "../imgs/example_image.jpg";
import { ReactComponent as StepSVG } from "../imgs/step.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/hot-spot"); 
  };

  return (
    <div className="overflow-hidden overflow-x-hidden w-full min-h-screen bg-gradient-to-b from-white via-[#FFFADD] to-[#F8B46E] box-border">
      <div className="relative flex items-center justify-center w-full h-full top-0 left-0 mt-20">
        <StepSVG />
        <button
          onClick={handleButtonClick}
          style={{ bottom: '173px', right: '200px' }}
          className="absolute px-8 py-2 rounded-[50px] bg-[#A9C398] shadow-md shadow-black/30 text-white text-center font-pretendard text-[20px] font-bold leading-normal"
        >
          시작하기
        </button>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-2.5 p-5 mt-8">
        {Array.from({ length: 10 }).map((_, index) => (
          <img
            src={exampleImage}
            alt={`Example ${index + 1}`}
            key={index}
            className="w-full h-auto object-cover border border-gray-300 rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
