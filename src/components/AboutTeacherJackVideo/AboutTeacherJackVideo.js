import React from "react";
import "./AboutTeacherJackVideo.css";

import photoOne from "../../accets/youtubePhoto/photoOne.jpg";
import photoTwo from "../../accets/youtubePhoto/photoTwo.jpg";
import photoThree from "../../accets/youtubePhoto/photoThree.jpg";
import photoFour from "../../accets/youtubePhoto/photoFour.jpg";
import photoFive from "../../accets/youtubePhoto/phootFive.jpg";
import photosix from "../../accets/youtubePhoto/photosix.jpg";
import photoSaven from "../../accets/youtubePhoto/photoSaven.jpg";
import photoEight from "../../accets/youtubePhoto/photoEight.jpg";
import photoNine from "../../accets/youtubePhoto/photoNine.jpg";
import photoTen from "../../accets/youtubePhoto/photoTen.jpg";
import photoElaven from "../../accets/youtubePhoto/photoElaven.jpg";
import photoTwelve from "../../accets/youtubePhoto/photoTwilve.jpg";
import photoThirteen from "../../accets/youtubePhoto/photothirteen.jpg";
import photoFourteen from "../../accets/youtubePhoto/photoFour.jpg";
import photoFifteen from "../../accets/youtubePhoto/photoFifteen.jpg";
import photoSixteen from "../../accets/youtubePhoto/photoSixteen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const youTubePhoto = [
  {
    id: 1,
    photo: photoOne,
    link: "https://www.youtube.com/watch?v=UlaAYWKwTjw&feature=youtu.be",
  },
  {
    id: 2,
    photo: photoTwo,
    link: "https://www.youtube.com/watch?v=OIJck3nIXtw&feature=youtu.be",
  },
  {
    id: 3,
    photo: photoThree,
    link: "https://www.youtube.com/watch?v=UbIKgHEayeU&feature=youtu.be",
  },
  {
    id: 4,
    photo: photoFour,
    link: "https://www.youtube.com/watch?v=gLYg8pcvlOo&feature=youtu.be",
  },
  {
    id: 5,
    photo: photoFive,
    link: "https://www.youtube.com/watch?v=VW-I-B9L1po",
  },
  {
    id: 6,
    photo: photosix,
    link: "https://www.youtube.com/watch?v=grRVJCyl_kE",
  },
  {
    id: 7,
    photo: photoSaven,
    link: "https://www.youtube.com/watch?v=CTy6QJhMm-Q",
  },
  {
    id: 8,
    photo: photoEight,
    link: "https://www.youtube.com/watch?v=CTy6QJhMm-Q",
  },
  {
    id: 9,
    photo: photoNine,
    link: "https://www.youtube.com/watch?v=Hw79GlNHMZg&feature=youtu.be",
  },
  {
    id: 10,
    photo: photoTen,
    link: "https://www.youtube.com/watch?v=_SZaM5A-8j0&feature=youtu.be",
  },
  {
    id: 11,
    photo: photoElaven,
    link: "https://www.youtube.com/watch?v=_SZaM5A-8j0&feature=youtu.be",
  },
  {
    id: 12,
    photo: photoTwelve,
    link: "https://www.youtube.com/watch?v=o-3Vb5qPon0&feature=youtu.be",
  },
  {
    id: 13,
    photo: photoThirteen,
    link: "https://www.youtube.com/watch?v=UlaAYWKwTjw&feature=youtu.be",
  },
  {
    id: 14,
    photo: photoFourteen,
    link: "https://www.youtube.com/watch?v=NXoEANl1yHQ",
  },
  {
    id: 15,
    photo: photoFifteen,
    link: "https://www.youtube.com/@teacherjackonline75243",
  },
  {
    id: 16,
    photo: photoSixteen,
    link: "https://www.facebook.com/TeacherJackOnline",
  },
];

const AboutTeacherJackVideo = () => {
  return (
    <div className="aboutTeacher_parent_div">
      {/* <p className="about_p"></p> */}
      <h1>About Teacher Jack</h1>
      <div className="about_blank_div"></div>
      <div className="aboutTeacher_grid_div">
        <div className="aboutTeacher_text_div">
          <p>
            TESOL Certified, ELT Teacher Jack is experienced and has taught
            students from China, South Korea, Mexico and the United States of
            America over the last 7 years.
          </p>
          <p>
            Teacher Jack is friendly, helpful, open minded and affordable. He
            goes the extra mile to ensure student understanding of the lessons.
            He travels a lot and interacts with people from different
            background.
          </p>
          <p>
            He is knowledgeable and knows exactly which student requires what
            level of training. He is easily reachable and is always ready to
            help his students.
          </p>
        </div>
        <div className="youTube_video_grid_div">
          {youTubePhoto.map((photo) => (
            <div key={photo.id}>
              <Link to={photo.link} target="_blank">
                <div className="youTube_video_link">
                  <img
                    className="youTube_video_photo"
                    src={photo.photo}
                    alt=""
                  />
                </div>
                <FontAwesomeIcon className="play_icon" icon={faPlay} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeacherJackVideo;
