import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import AboutTeacherJackVideo from "../AboutTeacherJackVideo/AboutTeacherJackVideo";
import Packages from "../Packages/Packages";
import StepsForSuccess from "../StepsForSuccess/StepsForSuccess";
import HomeCarousel from "../HomeCarousel/HomeCarousel";

const Home = () => {
  return (
    <div className="home_parent_div">
      <HeroSection></HeroSection>
      <AboutTeacherJackVideo></AboutTeacherJackVideo>
      <Packages></Packages>
      <StepsForSuccess></StepsForSuccess>
      <HomeCarousel></HomeCarousel>
    </div>
  );
};

export default Home;
