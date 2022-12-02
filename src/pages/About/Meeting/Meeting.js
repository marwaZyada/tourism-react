import React from "react";
import img1 from "../../../assets/section-title-vector.svg";
import img2 from "../../../assets/guide1.png";
import img3 from "../../../assets/guide2.png";
import img4 from "../../../assets/guide3.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialAtCircular } from "react-icons/ti";
import "./Meeting.css";

const Meeting = () => {
  return (
    <div className="meeting py-5 text-center">
      <div className="">
        <p className="color-green fs-5">Tour Guide's</p>
        <h3 className="fw-bold fs-1">Meet Our Excellent Guide’s</h3>
        <img src={img1} alt="" />
      </div>
      <div className="container">
        <div className="row py-5 text-center justify-content-center">
          <div className="col-lg-4 col-sm-12  col-md-6 mb-3">
            <div className="content">
            <div className="image">
              <img src={img2} alt="" className="w-100" />
              <div className="social">
                <FaFacebookF />
                <AiOutlineTwitter />
                <AiOutlineInstagram />
                <TiSocialAtCircular />
              </div>
              </div>
              <div className="info py-3">
                <h3>Savannah Nguyen</h3>
                <p>Tour Guide</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6  mb-3">
            <div className="content">
              <div className="image">
                <img src={img3} alt="" className="w-100" />
                <div className="social">
                  <FaFacebookF />
                  <AiOutlineTwitter />
                  <AiOutlineInstagram />
                  <TiSocialAtCircular />
                </div>
              </div>

              <div className="info py-3">
                <h3>Leslie Alexander</h3>
                <p className="">Tour Guide</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12  col-md-6 mb-3">
            <div className="content ">
              <div className="image">
                <img src={img4} alt="" className="w-100" />
                <div className="social">
                  <FaFacebookF />
                  <AiOutlineTwitter />
                  <AiOutlineInstagram />
                  <TiSocialAtCircular />
                </div>
              </div>
              <div className="info py-3">
                <h3>Guy Hawkins</h3>
                <p>Tour Guide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
