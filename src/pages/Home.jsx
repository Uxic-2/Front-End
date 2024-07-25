import React from 'react';
import '../styles/home.css'; 
import mainBanner from '../imgs/main_banner.png'; 

const Home = () => {
  return (
    <div className="home">
      <img src={mainBanner} alt="Main Banner" className="main-banner" />
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
