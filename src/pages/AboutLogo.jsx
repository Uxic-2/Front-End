import React from 'react';
import '../styles/about/aboutlogo.css';

const AboutLogo= () => {
  return (
    <div className="about-page">
      <aside className="sidebar">
      <div className="about-title">ABOUT</div>
        <div className="logo">LOGO</div>
        <div className="greeting">인사말</div>
      </aside>
      
      <section className="logo-section">
      는 사진분석 여행 추천 시스템이라는 본 웹사이트의 취지에 걸맞는
나만의 spot을 찾길 바라는 마음에서 시작되었다.
“PHOTATO”는 뜨거운 감자를 의미하는데, 나만의 숨겨진 곳을 공유하고 
그 곳이 많은 이들의 “HOT SPOT”이 되길 바라는 마음에서 유래되었다. 
      </section>

    </div>
  );
};

export default AboutLogo;
