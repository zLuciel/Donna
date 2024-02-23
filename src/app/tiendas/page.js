"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import HomePortda from "@/components/slider/homePortada/HomePortda";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import homeSlider from "@/data/homeSlider";
import "@mantine/carousel/styles.css";
import Example from "@/components/filterProduct/Example";
import UbicacionesCard from "@/components/map/UbicacionesCard";
import RenderMap from "@/components/map/RenderMap";
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
      {/* mapa */}
      <section className="lg:container mx-auto px-20 py-10">
        <h2 className="text-3xl text-red-500 mb-5">BUSCA TU TIENDA MAS CERQUITA</h2>
        <div className="grid grid-cols-[250px_1fr] gap-8">
          <div className="flex flex-col gap-2">
          <Example />
          <Example/>
          <UbicacionesCard/>
          <UbicacionesCard/>
          </div>
          <div className=" justify-self-center map-render h-full w-full rounded-3xl overflow-hidden">
          <RenderMap/>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
