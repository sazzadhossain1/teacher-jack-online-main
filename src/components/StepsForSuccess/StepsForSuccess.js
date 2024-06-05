import React from "react";
import "./StepsForSuccess.css";
import logoOne from "../../accets/StepsForSuccessPhoto/logoOne.png";
import logoTwo from "../../accets/StepsForSuccessPhoto/logoTwo.png";
import logoThree from "../../accets/StepsForSuccessPhoto/logoThree.png";
import logoFour from "../../accets/StepsForSuccessPhoto/logoFour.png";
import join from "../../accets/StepsForSuccessPhoto/join.png";

const StepsForSuccess = ({ id }) => {
  return (
    <div className="stepsForSuccess_parent_div" id={id}>
      <div className="joinFirst_div">
        <img className="joinFirst" src={join} alt="" />
      </div>
      <div className="stepsForSuccess_left_div">
        <h1>Steps for Success</h1>
        <div className="stepsForSuccess_logo_div ">
          <img className="logo" src={logoOne} alt="" />
          <h3>Get a Schedule</h3>
        </div>

        <div>
          <div className="two_cart_flex_div">
            <div className="stepsForSuccess_logo_div ">
              <img className="logo" src={logoTwo} alt="" />
              <h3>Fix a Time</h3>
            </div>

            <div className="stepsForSuccess_logo_div ">
              <img className="logo" src={logoThree} alt="" />
              <h3>Make Payment</h3>
            </div>
          </div>
        </div>

        <div className="stepsForSuccess_logo_div ">
          <img className="logo" src={logoFour} alt="" />
          <h3>Atted Class</h3>
        </div>
      </div>
      <div className="joinSecond_div">
        <img className="join" src={join} alt="" />
      </div>
    </div>
  );
};

export default StepsForSuccess;
