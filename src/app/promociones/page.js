"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import HomePortda from "@/components/slider/homePortada/HomePortda";
import homeSlider from "@/data/homeSlider";
import LoMejor from "@/components/slider/lomejor/Lomejor";
import mejorSemana from "@/data/semana";
import "@mantine/carousel/styles.css";
const page = () => {
  return (
    <>
      <main className="portada-main text-white h-screen w-screen">
        <Carousel
          className="portada"
          slideSize="100%"
          slideGap={{ base: 0 }}
          loop
          height="100%"
          slidesToScroll={1}
          nextControlIcon={<FaChevronRight className="text-3xl" />}
          previousControlIcon={<FaChevronLeft className="text-3xl" />}
        >
          {homeSlider?.map((cate, i) => (
            <Carousel.Slide key={i}>
              <HomePortda image={cate.image} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </main>
      <section className="lg:container mx-auto   py-8  px-20">
        <h2 className="text-4xl text-red-500 mb-10">NUESTRAS PROMOCIONES</h2>
        <Carousel
          className="py-2"
          slideSize="25%"
          slideGap="md"
          loop
          height="100%"
          slidesToScroll={4}
          nextControlIcon={<FaChevronRight className="text-3xl" />}
          previousControlIcon={<FaChevronLeft className="text-3xl" />}
        >
          {mejorSemana?.map((cate, i) => (
            <Carousel.Slide key={i}>
              <LoMejor image={cate.image} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default page;
