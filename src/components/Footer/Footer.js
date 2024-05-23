import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faQq } from "@fortawesome/free-brands-svg-icons";

import logoPhoto from "../../accets/NaviPhoto/logo.png";
const Footer = () => {
  return (
    <div className="footer_parent_div">
      <div className="footer_grid_div">
        <div>
          <img className="footer_logo" src={logoPhoto} alt="" />
          <p>
            Take Lessons from Teacher Jack and Communicate Like a Native English
            Speaker
          </p>
        </div>
        <div className="footer_link_div">
          <p>Links</p>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Packages</Link>
          <Link>How it Works</Link>
          <Link>Testimonials</Link>
        </div>
        <div>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>teacherjackonline@gmail.com</p>
          </div>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faPhone} />
            <p> 1.214.736.5989</p>
          </div>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faPhone} />
            <p>+880 1793-596432</p>
          </div>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faComments} />
            <p>Jack2147365989</p>
          </div>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faQq} />
            <p>3396883165</p>
          </div>
        </div>
      </div>
      <div className="footer_copyRight_div">
        <div>
          <p>
            IT Partner:{" "}
            <Link to="https://abaacorp.com/" target="_blank">
              Abaacorp.com.
            </Link>
          </p>
        </div>
        <div>
          <p>© 2022 TeacherJackOnline. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
