"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import Card from './Card';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const SliderCard = ({renderjson,idBtnNex,idBtnPre}) => {
  return (
    <>
    <Swiper
    style={{padding:"30px 10px"}}
    modules={[Navigation, Pagination]}
    navigation={{
      prevEl: `#${idBtnPre}`,
      nextEl: `#${idBtnNex}`,
    }}
    pagination={{ clickable: true }}
    spaceBetween={10}
    loop={true}
    slidesPerView={1.4}
    slidesPerGroup={3}
    breakpoints={{
      // cuando el ancho es >= 640px
      500: {
        slidesPerView: 2.5,
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
        spaceBetween: 10,
        slidesPerGroup: 5,
      },
    }}
  >
    {renderjson?.map((cate, i) => (
      <SwiperSlide  key={i}>
        <Card image={cate.image} />
      </SwiperSlide>
    ))}
  </Swiper>
  <button id={idBtnPre} className='cateBtnSwiper flex justify-center items-center' ><FaChevronLeft  className='text-1xl text-red-500'/></button>
  <button id={idBtnNex} className='cateBtnSwiper flex justify-center items-center' ><FaChevronRight  className='text-1xl text-red-500'/></button>
  </>
  )
}

export default SliderCard