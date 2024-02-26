"use client";
import React from 'react'
import LoMejor from './Lomejor'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const SliderMejor = ({renderjson,viewPagi}) => {
  return (
    <>
    <Swiper
    modules={[Navigation, Pagination]}
    navigation={{
      prevEl: `#icoPromoPreS`,
      nextEl: `#icoPromoNextS`,
    }}
    loop
    pagination={viewPagi && { clickable: true }}
    spaceBetween={10}
    slidesPerView={2}
    slidesPerGroup={1}
    breakpoints={{
      // cuando el ancho es >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      // cuando el ancho es >= 768px
      888: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 4,
      },
    }}
   >
     {renderjson?.map((cate, i) => (
       <SwiperSlide  key={i}>
         <LoMejor image={cate.image} />
       </SwiperSlide>
     ))}
   </Swiper>
   <button id="icoPromoPreS" ><FaChevronLeft  className='text-3xl'/></button>
  <button id="icoPromoNextS" ><FaChevronRight  className='text-3xl'/></button>
   </>
  )
}

export default SliderMejor