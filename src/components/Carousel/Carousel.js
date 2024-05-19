import React from "react";
// import React from "react";
import "./Carousel.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import certificate from "../../accets/TeacherJackPhoto/certificate.jpg";
import teacherJackPhoto from "../../accets/TeacherJackPhoto/teacherJack.png";

const Carousel = () => {
  return (
    <div className="carousel_parent_div">
      <>
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
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="carousel_img" src={certificate} alt="Certificate" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="carousel_img"
              src={teacherJackPhoto}
              alt="Teacher_Jack_Photo"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
