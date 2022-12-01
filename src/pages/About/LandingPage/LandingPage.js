import React from "react";

import "./LandingPage.css";
import img1 from '../../../assets/inner-banner-vctr.png'

const LandingPage = () => {
  return (
    <div>
      <div className="landing-page mb-5">
        <img src={img1} alt="landing" className="img"/>
       
        <div className="content w-100 h-100 text-white text-center  d-flex justify-content-center align-items-center flex-column">
            <p className="fs-3">
            Welcome To Astrip
            </p>
            <h3 className="fs-1 fw-bold">We Are Best Tour & Travel Agency <br/>In The World.</h3>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
