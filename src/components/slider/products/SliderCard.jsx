"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Card from "./Card";

const SliderCard = ({ renderjson, idBtnNex, idBtnPre }) => {
  return (
    <>
      <Swiper
        style={{ padding: "30px 10px" }}
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
        {renderjson?.map((product, i) => (
          <SwiperSlide key={i}>
            <Card
              key={product.id}
              id={product.id}
              image={product.images[0]}
              name={product.name}
              price={product.price}
              regular_price={product.regular_price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderCard;
