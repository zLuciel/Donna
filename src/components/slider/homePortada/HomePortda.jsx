"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
//import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HomePortda = ({renderjson,idBtnNex,idBtnPre,setSwiper}) => {
  const [currentPage,setCurrentPage] = useState(0)
  const [currentPageN,setCurrentPageN] = useState(0)
  return (
    <>
    <Swiper
    onSwiper={setSwiper}
    className="portada-home"
    modules={[Autoplay,Navigation, Pagination]}
    loop={true}
    onSlideChange={(swiper) => {
      const current = ` ${swiper.realIndex + 1} / ${swiper.slides.length }`
      const currentN = `${swiper.realIndex + 2} / ${swiper.slides.length}`
      const currentNForm = currentN === "7 / 6" ?  `1 / 6` : currentN
      setCurrentPageN(currentNForm)
      setCurrentPage(current)
      }}
      navigation={{
        prevEl: `#${idBtnPre}`,
        nextEl: `#${idBtnNex}`,
      }}
    centeredSlides={true} 
    pagination={{ clickable: true }}
    spaceBetween={20}
    slidesPerView={1}
    slidesPerGroup={1}
    autoplay={{ 
      delay: 4000, 
      disableOnInteraction: false,
    }}
    >
      {renderjson?.map((cate, i) => (
        <SwiperSlide key={i}>
          <div className="slider-img  w-screen">
            <Image style={{objectFit:"cover"}} className="rounded-md" src={cate.image} fill={true}
          sizes="(min-width: 808px) 100vw, 100vw" alt="dsa"/>
          </div>
        </SwiperSlide>
      ))}
       <button
        id={idBtnPre}
        className="text-black borderPre BtnSwiperPortada flex gap-2 justify-center items-center"
      ><FaChevronLeft className="text-1xl text-red-500" />
        {currentPage}
      </button>
      <button
        id={idBtnNex}
        className="text-black BtnSwiperPortada borderNext flex gap-2 justify-center items-center"
      >{currentPageN}
        <FaChevronRight className="text-1xl text-red-500" />
      </button>
    </Swiper>
    </>
  );
};

export default HomePortda;
