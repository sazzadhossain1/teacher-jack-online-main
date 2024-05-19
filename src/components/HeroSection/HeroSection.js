import React from "react";
import "./HeroSection.css";
import Carousel from "../Carousel/Carousel";

const HeroSection = () => {
  return (
    <div className="heroSection_grid_div">
      <div>
        <h1>
          Develop Your English <br /> Step Up to the World
        </h1>
        <p>
          Take Lessons from Teacher Jack and Communicate Like a Native English
          Speaker
        </p>
      </div>
      <Carousel></Carousel>
    </div>
  );
};

export default HeroSection;
