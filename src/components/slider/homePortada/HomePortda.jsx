import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import portada from "@/assets/prueba.webp"
const HomePortda = ({renderjson,idBtnNex,idBtnPre}) => {
  return (
    <>
    <Swiper
    className="xd"
    modules={[Autoplay,Navigation, Pagination]}
    loop={true}
    navigation={{
      prevEl: `#${idBtnPre}`,
      nextEl: `#${idBtnNex}`,
    }}
    pagination={{ clickable: true }}
    spaceBetween={0}
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
            <Image src={portada} fill={true}
          sizes="(min-width: 808px) 50vw, 100vw" alt="dsa"/>
      
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <button id={idBtnPre} ><FaChevronLeft  className='text-3xl'/></button>
    <button id={idBtnNex} ><FaChevronRight  className='text-3xl'/></button>
    </>
  );
};

export default HomePortda;
