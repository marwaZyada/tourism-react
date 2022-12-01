import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/instagram1.png'
import img2 from '../../../assets/instagram5.png'
import img3 from '../../../assets/instagram3.png'
import img4 from '../../../assets/instagram4.png'
import img5 from '../../../assets/guide1.png'
import img6 from '../../../assets/guide2.png'
import img7 from '../../../assets/guide3.png'

// Import Swiper styles
import "swiper/css";
import './feeds.css'
import { Autoplay } from "swiper";
import {FaInstagram} from 'react-icons/fa'

const Feeds = () => {
    return (
        <div className='feeds'>
            <div className='container text-center mb-5 text-secondary d-flex justify-content center align-items-center gap-3'>
         <FaInstagram className='fs-3'/>   <h2 className=''>
            Instagram Feed
            </h2>
            </div>
            <Swiper
        slidesPerView={5}
        
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
     
        modules={[Autoplay]}
        className="mySwiper"
      >
     <div className='row'>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img1} alt=""className='w-100'/></SwiperSlide> </div>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img2} alt=""className='w-100'/></SwiperSlide> </div>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img3} alt=""className='w-100'/></SwiperSlide> </div>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img4} alt=""className='w-100'/></SwiperSlide> </div>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img5} alt=""className='w-100'/></SwiperSlide> </div>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img6} alt=""className='w-100'/></SwiperSlide> </div>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img7} alt=""className='w-100'/></SwiperSlide> </div>
       <div className='col-lg-2 col-md-4'> <SwiperSlide><img src={img1} alt=""className='w-100'/></SwiperSlide> </div>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img2} alt=""className='w-100'/></SwiperSlide> </div>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img3} alt=""className='w-100'/></SwiperSlide> </div>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img4} alt=""className='w-100'/></SwiperSlide> </div>
       <div className='col-lg-2 col-md-4'> <SwiperSlide><img src={img5} alt=""className='w-100'/></SwiperSlide> </div>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img6} alt=""className='w-100'/></SwiperSlide> </div>
        <div className='col-lg-2 col-md-4'><SwiperSlide><img src={img7} alt=""className='w-100'/></SwiperSlide> </div>
        
        
        
       </div>

      </Swiper>
        </div>
    );
}

export default Feeds;
