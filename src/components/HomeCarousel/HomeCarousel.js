import React from "react";
import "./HomeCarousel.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import photoOne from "../../accets/studentPhoto/photoOne.jpeg";
import photoTwo from "../../accets/studentPhoto/photoTwo.jpg";
import photoThree from "../../accets/studentPhoto/photoThree.jpg";
import photoFour from "../../accets/studentPhoto/photoFour.jpg";
import photoFive from "../../accets/studentPhoto/photoFive.jpeg";
import photoSix from "../../accets/studentPhoto/photoSix.jpg";

const HomeCarousel = ({ id }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

  const carouselData = [
    {
      id: 1,
      image: photoOne,
      name: "Sophie",
      Identity: "Student",
      text: "A professional English teacher, gave me a lot help, impressed me very much.",
    },
    {
      id: 2,
      image: photoTwo,
      name: "Tia",
      Identity: "Student",
      text: "Jack is an online English teacher of mine, and we had several really nice and interesting classes recently. In the class, Jack is really humorous and talkative. He told me a lot about his life experiences as well as some interesting anecdotes happening among his friends. Apart from these, Jack also helped me with my pronunciations and my grammars, making me more like a native speaker. I would say Jack is really a nice person not only as a teacher but also as a friend.",
    },
    {
      id: 3,
      image: photoThree,
      name: "Melantha",
      Identity: "Student",
      text: "What Jack impressed me most is that he is very patient. As a non-English speaker, it's hard for me to pronounce every word well, but he would let me read after him, one by one, and reminded me not to neglect all the details. Also, he is very humorous, people will have much fun in his class. And he will teach you some native knowledge, they are quite interesting and useful. You would learn a lot with him, not only about the pronunciation, the grammar, but also some native knowledge of America.",
    },
    {
      id: 4,
      image: photoFour,
      name: "Brook",
      Identity: "Student",
      text: "Jack is the most devoted and knowledgeable English teacher I’ve ever met. As an average Chinese student seeking for development in English, I consider myself lucky for having sessions with him. Not only did he correct my pronunciation errors, he also delivered me with spectacular insights in writing. The patience and devotion he has shown is also well appreciated. In spite of all that, he broadens my horizon to a new perspective to English and makes my eyes wide open to a new world. I do appreciate his hard work and thanks to him.",
    },
    {
      id: 5,
      image: photoFive,
      name: "Jack",
      Identity: "Student",
      text: "Jack is the most devoted and knowledgeable English teacher I’ve ever met. As an average Chinese student seeking for development in English, I consider myself lucky for having sessions with him. Not only did he correct my pronunciation errors, he also delivered me with spectacular insights in writing. The patience and devotion he has shown is also well appreciated. In spite of all that, he broadens my horizon to a new perspective to English and makes my eyes wide open to a new world. I do appreciate his hard work and thanks to him.",
    },
    {
      id: 6,
      image: photoSix,
      name: "Dukelane",
      Identity: "Student",
      text: "Jack is actually a quite unique speaking teacher for me. Although we only had a few classes, I can tell that he knows how to make English an language rather than a subject. He used oral idioms and phrases to teach me and also tested my pronunciation by letting me read out paragraphs which truly helps me in learning how to speak like a native speaker. I may never learn those fantastic expressions without him. Having classes with him is really enjoyable.",
    },
  ];

  return (
    <div className="carousel_parent_div" id={id}>
      <h2 className="WhatStudents">What Students Say About Me</h2>
      <div className="carousel_div">
        <Carousel responsive={responsive}>
          {carouselData.map((data) => (
            <div className="carousel_cart_div" key={data.id}>
              <div className="carousel_flex_div">
                <img className="carousel_image" src={data.image} alt="" />
                <div>
                  <p className="name">{data.name}</p>
                  <p className="identity">{data.Identity}</p>
                </div>
              </div>
              {data.text}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
