"use client";
import React from "react";
import HomePortda from "@/components/slider/homePortada/HomePortda";
import homeSlider from "@/data/homeSlider";
import Example from "@/components/filterProduct/Example";
import UbicacionesCard from "@/components/map/UbicacionesCard";
import RenderMap from "@/components/map/RenderMap";
const page = () => {
  return (
    <>
      <main className="relative portada-main text-white h-screen w-screen">
      <HomePortda renderjson={homeSlider} idBtnNex={"icoMainTiendaNextSH"} idBtnPre={"icoMainTiendaPreSH"} />
      </main>
      {/* mapa */}
      <section className="lg:container mx-auto sm:px-10 md:px-10 lg:px-20 px-10 py-6">
        <h2 className="text-xl font-extrabold text-red-500 mb-5 ">BUSCA TU TIENDA MAS CERQUITA</h2>
        <div className="grid lg:grid-cols-[250px_1fr] md:grid-cols-[250px_1fr] sm:grid-cols-[250px_1fr] grid-cols-[1fr] gap-8">

          <div className="flex flex-col gap-2">

          <div>
          <Example />
          <Example/>
          </div>

          <div className="flex flex-col">
          <UbicacionesCard/>
          <UbicacionesCard/>
          </div>
        
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
