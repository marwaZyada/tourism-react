import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import img1 from "../../../assets/guide3.png";
import "./Forms.css";

const FormSec = () => {
  return (
    <div className="container py-5">
      <div className="row   form-content">
        <div className="col-lg-6 col-sm-12 bg-dark text-white h-100 d-flex justify-content-center flex-column mb-3">
          <div className="form-content-info  ">
            <div className="text-success">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
            </div>
            <p>
              “This place is great! I had a very pleasant stay here. Great stuff
              and beautiful suites with a fabulous view etiam rhoncus maecenas”!
            </p>
          </div>
          <div className="d-flex justify-content-center gap-3 form-content-photo mt-3">
            <img src={img1} alt="" />
            <div>
              <h2>JOhn Martine </h2>
              <span>Egypt</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 form-content-image d-flex justify-content-center align-items-center flex-column mb-3">
          <div className=" py-5 w-75 text-white text-center form-content-gradiant">
            <h3>Join Newsletter</h3>
            <p className="fs-5">Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
            <div className="w-75 m-auto text-center">
            <input type="text" placeHolder="Your Name"/>
            </div>
            <div className="my-3 w-75 m-auto">
            <input type="text" placeHolder="Your Email"/>
            </div>
            <input type="submit" value="Join Us" className="btn  w-75 fw-bold"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSec;
