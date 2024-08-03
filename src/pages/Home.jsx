import React from 'react';
import '../styles/home.css'; 
import mainBanner from '../imgs/main_banner.png'; 
import exampleImage from '../imgs/example_image.jpg'; 

const Home = () => {
  return (
    <div className="home">
      <img src={mainBanner} alt="Main Banner" className="main-banner" />
      <h1>Home Page</h1>
      <div className="image-grid">
        {/* 10개의 예제 이미지를 추가 */}
        {Array.from({ length: 10 }).map((_, index) => (
          <img src={exampleImage} alt={`Example ${index + 1}`} key={index} className="grid-image" />
        ))}
      </div>
    </div>
  );
};

export default Home;
