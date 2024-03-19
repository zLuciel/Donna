"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
//import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
const HomePortda = ({renderjson,idBtnNex,idBtnPre}) => {
  return (
    <>
    <Swiper
    className="xd"
    modules={[Autoplay,Navigation, Pagination]}
    loop={true}
    centeredSlides={true} 
    pagination={{ clickable: true }}
    spaceBetween={20}
    slidesPerView={1.2}
    slidesPerGroup={1}
    autoplay={{ 
      delay: 4000, 
      disableOnInteraction: false,
    }}
    >
      {renderjson?.map((cate, i) => (
        <SwiperSlide key={i}>
          <div className="slider-img  w-screen">
            <Image className="rounded-md" src={cate.image} fill={true}
          sizes="(min-width: 808px) 100vw, 100vw" alt="dsa"/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default HomePortda;
