"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CardComentario from './CardComentario';
const ComentarioSlider = ({renderjson,idBtnPre,idBtnNex}) => {
  return (
    <section className="lg:container relative mx-auto  py-8 sm:px-10 md:px-10 lg:px-20 px-5">
    <Swiper
    style={{padding:"30px 10px"}}
    modules={[Navigation, Pagination]}
    navigation={{
      prevEl: `#${idBtnPre}`,
      nextEl: `#${idBtnNex}`,
    }}
    spaceBetween={40}
    loop={true}
    slidesPerView={2}
    slidesPerGroup={1}
  >
    {renderjson?.map((cate, i) => (
      <SwiperSlide  key={i}>
        <CardComentario/>
      </SwiperSlide>
    ))}
  </Swiper>
  <button id={idBtnPre} className='cateBtnSwiper flex justify-center items-center' ><FaChevronLeft  className='text-1xl text-red-500'/></button>
  <button id={idBtnNex} className='cateBtnSwiper flex justify-center items-center' ><FaChevronRight  className='text-1xl text-red-500'/></button>
  </section>
  )
}

export default ComentarioSlider