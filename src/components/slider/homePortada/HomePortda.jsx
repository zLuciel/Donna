import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const HomePortda = ({renderjson,idBtnNex,idBtnPre}) => {
  return (
    <>
    <Swiper
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
          <div className="lg:container mx-auto px-20 flex flex-col justify-center h-screen w-screen">
            <h1 className="text-6xl ">
              ¡Merkat es la marca <br /> que merece tu familia!
            </h1>
            <p className="">
              Con una variedad de productos en las categorias más importantes.
              Te ofrecemos calidad superior al precio del mercado. ¡Te invitamos
              a conocer su línea!
            </p>
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
