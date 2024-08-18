import React, { useEffect, useState, useRef } from "react";
import "../styles/about.css";
import "../styles/sidebar.css";
import "../styles/about/aboutlogo.css";
import "../styles/about/aboutgreeting.css";
import character_logo from "../imgs/character_logo.png";
import logo from "../imgs/logo.png";

import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBAbout";

const About = () => {
  const [activeSection, setActiveSection] = useState("ABOUT");

  const aboutRef = useRef(null);
  const logoRef = useRef(null);
  const greetingRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.dataset.section);
        }
      });
    }, options);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (logoRef.current) observer.observe(logoRef.current);
    if (greetingRef.current) observer.observe(greetingRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (logoRef.current) observer.unobserve(logoRef.current);
      if (greetingRef.current) observer.unobserve(greetingRef.current);
    };
  }, []);

  return (
    <div>
      <div className="about-page">
        <SideBar links={links} />
        {/* <aside className="sidebar">
          <div className={`sidebar-item side1 ${activeSection === 'ABOUT' ? 'active' : ''}`}>ABOUT</div>
          <div className={`sidebar-item side2 ${activeSection === 'LOGO' ? 'active' : ''}`}>LOGO</div>
          <div className={`sidebar-item side3 ${activeSection === '인사말' ? 'active' : ''}`}>인사말</div>
        </aside> */}
        <section ref={aboutRef} data-section="ABOUT" className="about-section">
          <h2>서비스명</h2>
          <p>PHOTATO</p>
          <br />
          <h2>서비스 정의</h2>
          <p>사진 위치 분석 기반 국내 여행 추천 시스템</p>
          <br />
          <h2>서비스 목적</h2>
          <p>
            여행지 선택이 어려운 사용자를 위해 시각적인 정보(이미지)를 기반으로
            선택지를 제공하여 국내 여행지를 추천한다.
          </p>
          <br />
          <h2>서비스 기능</h2>
          <ol>
            <li>
              사진 분석 및 위치 추출: 사용자들이 업로드한 사진에서 GPS 정보를
              추출하여 위치정보 제공
            </li>
            <li>
              여행지 추천: 사진에서 추출한 위치 정보를 바탕으로 주변의 유명한
              관광지 및 자연 경관을 추천. 관광지에 대한 정보와 추천 제공
            </li>
            <li>
              숙소 추천: 해당 위치 주변의 숙소를 추천하고, 객실 이미지 정보를
              왜곡 없이 VR (또는 360º 동영상)으로 제공
            </li>
            <li>
              맛집 추천: 해당 위치 주변의 인기 맛집을 추천. 사용자 리뷰와 평점을
              반영하여 맞춤형 추천 제공
            </li>
            <li>
              사용자 경험 개선: 직관적인 UI/UX를 통해 사용자가 쉽게 사진을
              업로드할 수 있고, 여행지 사진을 다양하게 확인할 수 있도록 설계.
              사용자의 선호도 기반의 여행 추천 가능
            </li>
          </ol>
        </section>
      </div>
      <div className="blank"></div>
      <section ref={logoRef} data-section="LOGO" className="logo-section">
        <div className="logo-container">
          <img
            src={character_logo}
            alt="character_logo"
            className="character-logo"
          />
          <p>
            <img src={logo} alt="logoimg" className="logoimg" />는 사진분석 여행
            추천 시스템이라는 취지에 걸맞게 나만의 spot을 찾길 바라는 마음에서
            시작되었습니다.<br></br>
            “PHOTATO”는 뜨거운 감자를 의미하며, 나만의 숨겨진 곳을 공유하고 그
            곳이 많은 이들의 “HOT SPOT”이 되길 바라는 마음에서 유래되었습니다.
            <br></br>
            <br></br>
            <br></br>
            <h4>
              <b>Main Color</b>
            </h4>
            <div className="color2div">
              <div className="maincolor1"></div>
              <p>#F8B46E</p>
            </div>
            <br></br>
            <div className="color2div">
              <div className="maincolor2"></div>
              <p>#A9C498</p>
            </div>
          </p>
        </div>
      </section>
      <div className="blank"></div>
      <section
        ref={greetingRef}
        data-section="인사말"
        className="greeting-section"
      >
        <p>
          안녕하세요! 여행의 새로운 길을 열어주는 PHOTATO에 오신 것을
          환영합니다.<br></br>
          <br></br>
          <br></br>
          PHOTATO는 여러분의 소중한 여행 사진을 통해 최고의 국내 여행지를
          추천하는 혁신적인 서비스입니다. 여행지 선택이 고민되시나요? <br></br>
          PHOTATO가 도와드리겠습니다. 여러분이 업로드한 사진에서 GPS 정보를
          분석하여 위치 정보를 제공하고, 주변의 유명한 관광지와 아름다운 자연
          경관을 한눈에 확인할 수 있도록 도와드립니다.<br></br>
          <br></br>
          <br></br>
          사진 속 풍경만큼이나 멋진 여행지를 찾고 계신가요? PHOTATO는 여러분의
          사진을 통해 발견한 위치를 기반으로 주변의 숨겨진 명소와 인기 관광지를
          추천합니다. 또한, 해당 위치 주변의 숙소를 추천해드리며, 객실의
          이미지를 왜곡 없이 VR 또는 360º 동영상으로 제공하여 실제와 같은 경험을
          선사합니다. 여행의 즐거움은 맛있는 음식과 함께 완성되죠. PHOTATO는
          사용자 리뷰와 평점을 반영하여 해당 위치 주변의 인기 맛집도 맞춤형으로
          추천해드립니다.<br></br>
          <br></br>
          <br></br>
          PHOTATO는 직관적인 UI/UX를 통해 사용자가 쉽게 사진을 업로드하고,
          다양한 여행지 사진을 확인할 수 있도록 설계되었습니다. 또한, 사용자의
          선호도를 반영한 개인 맞춤형 여행 추천 기능으로, 여러분의 여행 경험을
          더욱 특별하게 만들어 드립니다.<br></br>
          <br></br>
          <br></br>
          사진 한 장으로 시작되는 여행, 지금 바로 PHOTATO에서 시작하세요!
          여러분의 사진이 가이드가 되어, 잊지 못할 추억을 만들어드리겠습니다.
          PHOTATO와 함께라면, 새로운 여행지 발견의 설렘이 여러분을 기다리고
          있습니다.
        </p>
      </section>
      <div className="blank"></div>
    </div>
  );
};

export default About;
