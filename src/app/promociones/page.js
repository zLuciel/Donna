"use client";
import React from "react";
import HomePortda from "@/components/slider/homePortada/HomePortda";
import homeSlider from "@/data/homeSlider";
import mejorSemana from "@/data/semana";
import SliderMejor from "@/components/slider/lomejor/SliderMejor";

const page = () => {
  return (
    <>
      <main className="relative portada-main text-white h-screen w-screen">
      <HomePortda renderjson={homeSlider} idBtnNex={"icoMainProNextSH"} idBtnPre={"icoMainProPreSH"}/>
      </main>
      <section className="lg:container mx-auto p-2 sm:px-10 lg:px-20 px-10 py-10">
          <h2 className="text-4xl text-red-500 mb-3 font-extrabold">NUESTRAS PROMOCIONES</h2>
       <div className="relative">
       <SliderMejor renderjson={mejorSemana} />
       </div>
      </section>
    </>
  );
};

export default page;
