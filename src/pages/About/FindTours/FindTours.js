import React from "react";
import './FindTours.css'
import {GoPrimitiveDot} from "react-icons/go"
import img1 from '../../../assets/feature3.png'
import img2 from '../../../assets/feature4.png'
import img3 from '../../../assets/feature3-icon.svg'

const FindTours = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mb-3">
          <p>Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutin volutpat. Donec in quis the pellentesque veliten.</p>
          <p>You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
          <p>This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin</p>
          <ul>
            <li> <GoPrimitiveDot className="text-success "/> of additional materials or parts (if needed)</li>
            <li><GoPrimitiveDot className="text-success "/>Transportation cost for carrying new materials/parts</li>
          </ul>
          <button className="btn btn-outline-success fw-bold tour-btn"> Find Tours</button>
        </div>
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center gap-3 position-relative">
            <div className=""> <img src={img1} alt="" className="w-100 "/></div>
           <div className="mt-5"> <img src={img2} alt=""className="w-100 "/></div>
           <img src={img3} alt="" className="image"/>
           
           
        </div>
      </div>
    </div>
  );
};

export default FindTours;
