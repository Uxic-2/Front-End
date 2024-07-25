import React from 'react';
import '../styles/about/about.css';

const About = () => {
  return (
    <div className="about-page">
      <aside className="sidebar">
      <div className="about-title">ABOUT</div>
        <div className="logo">LOGO</div>
        <div className="greeting">인사말</div>
      </aside>
      <section className="about-section">
        <h2>서비스명</h2>
        <p>PHOTATO</p>
        <br></br>
        <h2>서비스 정의</h2>
        <p>사진 위치 분석 기반 국내 여행 추천 시스템</p>
        <br></br>
        <h2>서비스 목적</h2>
        <p>여행지 선택이 어려운 사용자를 위해 시각적인 정보(이미지)를 기반으로 선택지를 제공하여 국내 여행지를 추천한다.</p>
        <br></br>
        <h2>서비스 기능</h2>
        <ol>
          <li>사진 분석 및 위치 추출: 사용자들이 업로드한 사진에서 GPS 정보를 추출하여 위치정보 제공</li>
          <li>여행지 추천: 사진에서 추출한 위치 정보를 바탕으로 주변의 유명한 관광지 및 자연 경관을 추천. 관광지에 대한 정보와 추천 제공</li>
          <li>숙소 추천: 해당 위치 주변의 숙소를 추천하고, 객실 이미지 정보를 왜곡 없이 VR (또는 360º 동영상)으로 제공</li>
          <li>맛집 추천: 해당 위치 주변의 인기 맛집을 추천. 사용자 리뷰와 평점을 반영하여 맞춤형 추천 제공</li>
          <li>사용자 경험 개선: 직관적인 UI/UX를 통해 사용자가 쉽게 사진을 업로드할 수 있고, 여행지 사진을 다양하게 확인할 수 있도록 설계. 사용자의 선호도 기반의 여행 추천 가능</li>
        </ol>
      </section>
    </div>
  );
};

export default About;
