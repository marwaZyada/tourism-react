import React from 'react';
import img1 from "../../../assets/section-title-vector.svg";
import img2 from "../../../assets/facility-icon41.svg";
import img3 from "../../../assets/facility-icon42.svg";
import img4 from "../../../assets/facility-icon43.svg";
import img5 from "../../../assets/facility-icon44.svg";
import './facilities.css'
const Facilities = () => {
    return (
       
           <div className="facilities py-5 text-center">
      <div className="">
        <p className="color-green fs-5">WHY CHOOSE US</p>
        <h3 className="fw-bold fs-1">Astrip Extra Facilities!</h3>
        <img src={img1} alt="" />
      </div>
      <div className="container">
        <div className="row py-5 text-center justify-content-center">
          <div className="col-lg-3 col-sm-12  col-md-6 mb-3">
            <div className="content p-3">
            
              <img src={img2} alt="" className="" />
             
              <div className='scale'></div>
              <div className="info mt-4">
                <h3>Best Rate Gurantee</h3>
                <p>Integer nec arcu a lectus efficitur April, 13 2022 0 Comment Lorem ipsum dolor amet, consectetur.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6  mb-3">
            <div className="content p-3">
             
                <img src={img3} alt="" className="" />
              
                <div className='scale'></div>

              <div className="info mt-4">
                <h3>Free Frist Booking</h3>
                <p className="">Nulla dictum vel cursus eleifend. April, 13 2022 0 Comment Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12  col-md-6 mb-3">
            <div className="content p-3">
             
                <img src={img4} alt="" className="" />
                <div className='scale'></div>
              
              <div className="info mt-4">
                <h3>Various Adventures</h3>
                <p>Donec at ante ipsum. Cras tempus, felis in tempus rutrum, odio mi elementum augue, neccstk.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12  col-md-6 mb-3 ">
            <div className="content p-3">
             
                <img src={img5} alt="" className="" />
                <div className='scale'></div>
              
              <div className="info mt-4">
                <h3>Supported 24/7</h3>
                <p>Nullam quis commodo ligula. molestie accumsan Sed nec erat non lectus ornare sollicitudin et.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

       
    );
}

export default Facilities;
