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
    pagination={viewPagi && { clickable: true }}
    spaceBetween={5}
    slidesPerView={1.5}
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
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 4,
      },
    }}
   >
     {renderjson?.map((cate, i) => (
       <SwiperSlide  key={i}>
         <LoMejor image={cate.image}  />
       </SwiperSlide>
     ))}
   </Swiper>
   {false && <button id="icoPromoPreS" className="cateBtnSwiper flex justify-center items-center" ><FaChevronLeft  className='text-1xl text-red-500'/></button>}
  {false && <button id="icoPromoNextS" className="cateBtnSwiper flex justify-center items-center" ><FaChevronRight  className='text-1xl text-red-500'/></button>}
   </>
  )
}

export default SliderMejor