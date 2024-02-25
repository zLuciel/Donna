import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
const HomePortda = ({renderjson}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={0}
    slidesPerView={1}
    slidesPerGroup={1}
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
  );
};

export default HomePortda;
