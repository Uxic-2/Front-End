import React from "react";
import "../styles/home.css";
// import mainBanner from "../imgs/main_banner.png";
import mainBanner from "../imgs/potato.png";
import exampleImage from "../imgs/example_image.jpg";

const Home = () => {
  return (
    <div className="relative overflow-hidden w-[100vw]">
      <img
        src={mainBanner}
        alt="Main Banner"
        className="w-[85%] m-auto mt-[20vh] object-cover"
      />
      <div className="flex m-10 mb-0 justify-center">
        <div className="flex text-[30px] font-bold">
          <div className="text-[#050202]">나만의 </div>
          <div className="text-main-green ml-3">"</div>
          <div className="text-main-orange">HIDDEN SPOT</div>
          <div className="text-main-green mr-3">"</div>
          <div className="text-[#545454]">을 찾다.</div>
        </div>
      </div>
      <div className="flex m-3 justify-center text-[16px] text-[#A0A0A0]">
        취향에 맞는 추천 여행지와 여행 스케줄을 PHOTATO 해보세요
      </div>
      <div className="image-grid">
        {/* 10개의 예제 이미지를 추가 */}
        {Array.from({ length: 10 }).map((_, index) => (
          <img
            src={exampleImage}
            alt={`Example ${index + 1}`}
            key={index}
            className="grid-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
