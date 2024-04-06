"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import categoriaMap from "./mapCategoria";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation'

const CategoriaSlider = () => {
  const router = useRouter()
  const handleCategoriaPage = ()=>{
    router.push('/productos')
  }
  return (
    <div className="lg:px-20 px-20 relative mx-auto lg:container">
    <Swiper
    style={{padding:"20px 0"}}
    modules={[Navigation, Pagination]}
    navigation={{
      prevEl: `#btn-back`,
      nextEl: `#btn-skip`,
    }}
    pagination={{ clickable: true }}
    slidesPerView={2}
    spaceBetween={1}
    slidesPerGroup={3}
    breakpoints={{
      // cuando el ancho es >= 640px
      449: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      // cuando el ancho es >= 768px
      800: {
        slidesPerView: 4,
        spaceBetween: 20,
      },  
      980: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1054: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 4,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 5,
        slidesPerGroup: 4,
      },
      1534: {
        slidesPerView: 5,
        spaceBetween: 5,
        slidesPerGroup: 4,
      },
    }}
    >
      {categoriaMap?.map((cate,i) => (
        <SwiperSlide key={i} >
        <div  className="cursor-pointer flex flex-col justify-center items-center">
        <span style={{height:"250px"}} className="circle-cat-lading">
        <Image src={cate.image}  sizes="(min-width: 808px) 50vw, 100vw"
           alt="Donna" />
        </span>
          <h5 className="relative bottom-3 btn-agre no-shadow text-white py-1 px-3 rounded-3xl text-center font-poet font-semibold">{cate?.name}</h5>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
    {<button id="btn-back"  className="flex justify-center items-center" ><FaChevronLeft className='text-1xl' /></button>}
    {<button id="btn-skip" className="flex justify-center items-center"  ><FaChevronRight className='text-1xl' /></button>}
    </div>
  );
};

export default CategoriaSlider;