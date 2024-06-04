import React, { useEffect } from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import AboutTeacherJackVideo from "../AboutTeacherJackVideo/AboutTeacherJackVideo";
import Packages from "../Packages/Packages";
import StepsForSuccess from "../StepsForSuccess/StepsForSuccess";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        console.log(`Hash changed: ${hash}`);
        const element = document.querySelector(hash);
        if (element) {
          console.log(`Scrolling to element: ${hash}`);
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          console.log(`Element not found: ${hash}`);
        }
      }, 0); // Set an appropriate delay if necessary
    }
  }, [hash]);
  return (
    <div className="home_parent_div">
      <HeroSection></HeroSection>
      <AboutTeacherJackVideo id="about"></AboutTeacherJackVideo>
      <Packages id="packages"></Packages>
      <StepsForSuccess id="how-it-works"></StepsForSuccess>
      <HomeCarousel id="testimonials"></HomeCarousel>
    </div>
  );
};

export default Home;
