"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import Card from './Card';

const SliderCard = ({renderjson}) => {
  return (
    <Swiper
    style={{padding:"40px 0"}}
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={10}
    slidesPerGroup={1}
    breakpoints={{
      // cuando el ancho es >= 640px
      640: {
        slidesPerView: 2,
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
        <Card image={cate.image} />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default SliderCard