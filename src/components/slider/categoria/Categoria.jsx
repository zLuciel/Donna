"use client";
import React from "react";
import Image from "next/image";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import categoriaMap from "./mapCategoria";
import { MdOutlineNavigateNext,MdOutlineArrowBackIos } from "react-icons/md";

const Categoria = () => {
  return (
    <Carousel
    className="py-2"
    withIndicators
    slideSize="14.28%"
    slideGap="md"
    loop
    height="100%"
    controlsOffset="xs"
    slidesToScroll={7}
    nextControlIcon={<MdOutlineNavigateNext className="text-xl"/>}
    previousControlIcon={<MdOutlineArrowBackIos className="text-xl"/>}
    >
      {categoriaMap?.map((cate,i) => (
        <Carousel.Slide key={i} >
        <div className="flex flex-col justify-center items-center">
        <span className="circle-cat">
        <Image src={cate.image}  sizes="(min-width: 808px) 50vw, 100vw"
           alt="Donna" />
        </span>
          <h5 className="text-center font-poet font-semibold">{cate?.name}</h5>
        </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default Categoria;
