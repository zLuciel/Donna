"use client";
import React from 'react'
import LoMejor from './Lomejor'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
const SliderMejor = ({renderjson}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={10}
    slidesPerView={4.2}
   >
     {renderjson?.map((cate, i) => (
       <SwiperSlide  key={i}>
         <LoMejor image={cate.image} />
       </SwiperSlide>
     ))}
   </Swiper>
  )
}

export default SliderMejor