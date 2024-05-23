import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./HeroSection.css";

import certificate from "../../accets/TeacherJackPhoto/certificate.jpg";
import teacherJack from "../../accets/TeacherJackPhoto/teacherJack.png";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="heroSection_grid_div">
      <div className="carousel_left_side">
        <h1 className="heroSection_heading">
          Develop Your English <br /> Step Up to the World
        </h1>
        <p>
          Take Lessons from Teacher Jack and Communicate Like a Native English
          Speaker
        </p>
      </div>

      <div className="carousel_div">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          loop={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <div>
            <SwiperSlide>
              <img className="slider_img" src={certificate} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slider_img" src={teacherJack} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
