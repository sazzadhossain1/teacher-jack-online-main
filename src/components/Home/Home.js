import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import AboutTeacherJackVideo from "../AboutTeacherJackVideo/AboutTeacherJackVideo";

const Home = () => {
  return (
    <div className="home_parent_div">
      <HeroSection></HeroSection>
      <AboutTeacherJackVideo></AboutTeacherJackVideo>
    </div>
  );
};

export default Home;
