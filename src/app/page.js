"use client";
import Categoria from "@/components/slider/categoria/Categoria";

import categoriaMap from "@/components/slider/categoria/mapCategoria";
import mejorSemana from "@/data/semana";
import homeSlider from "@/data/homeSlider";
import Comercial from "@/assets/comercial.png";

import HomePortda from "@/components/slider/homePortada/HomePortda";
import SliderMejor from "@/components/slider/lomejor/SliderMejor";
import SectionSlider from "@/components/slider/section/SectionSlider";

import Link from "next/link";
import Licor from "@/components/svg/Licor";
import LoMejor from "@/components/svg/LoMejor";
import Desayuno from "@/components/svg/Desayuno";
import Lacteos from "@/components/svg/Lacteos";
import Limpieza from "@/components/svg/Limpieza";
import ComentarioSlider from "@/components/slider/comentario/comentarioSlider";

export default function Home() {
  return (
    <>
      <main className="relative portada-main text-white h-screen w-screen">
        <HomePortda
          renderjson={homeSlider}
          idBtnNex={"icoMainNextSH"}
          idBtnPre={"icoMainPreSH"}
        />
      </main>
      {/* seccion de categorias flex flex-col justify-center items-center*/}
      <section className="lg:container mx-auto  py-8 sm:px-10 md:px-10 lg:px-20 px-5">
        <div className="flex justify-between pr-8 ">
          <h2 className="mb-1 text-sm  sm:text-base md:text-lg lg:text-1xl ">
            ¡ TODO LO ENCUENTRAS EN DOONA !
          </h2>
          <p className="verCategoria">
            <Link
              className="text-xs lg:text-sm border-b border-red-500 text-red-600"
              href="/productos"
            >
              VER TODOS
            </Link>
          </p>
        </div>
        <div className="relative">
          <Categoria />
        </div>
      </section>
      {/* section promociones */}
      <section className="lg:container mx-auto p-2 sm:px-10 lg:px-20 px-4">
        <span className="text-xl font-extrabold flex items-center gap-3 lg:mb-5 mb-0">
          <p className="icon-shadow shadow shadow-2xl text-white p-2 text-sm sm:text-sm md:text-lg lg:text-3xl rounded-2xl">
            <LoMejor />
          </p>
          <h2 className="text-sm  sm:text-base md:text-lg lg:text-1xl">
            LO MEJOR DE LA SEMANA
          </h2>
        </span>
        <div className="relative">
          <SliderMejor renderjson={mejorSemana} viewPagi={true} />
        </div>
      </section>

      {/* seeccion de bebidas */}
      <SectionSlider
        title="LO MEJOR DE LA ABARROTES"
        pretIcoID={"icoBebidaPreS"}
        nextIcoID={"icoBebidaNextS"}
        renderjson={categoriaMap}
        icon={<Desayuno />}
      />
      <SectionSlider
        title="LO MEJOR EN LICORES"
        pretIcoID={"icoFrescosPreS"}
        nextIcoID={"icoFrescosNextS"}
        renderjson={categoriaMap}
        icon={<Licor />}
      />
      <SectionSlider
        title="LO MEJOR EN LIMPIEZA"
        pretIcoID={"icoLicoresPreS"}
        nextIcoID={"icoLicoresNextS"}
        renderjson={categoriaMap}
        image={Comercial}
        icon={<Limpieza />}
      />
      <SectionSlider
        title="LO MEJOR EN LACTEOS"
        pretIcoID={"icoNuevoPreS"}
        nextIcoID={"icoNuevoNextS"}
        renderjson={categoriaMap}
        icon={<Lacteos />}
      />

      {/* <ComentarioSlider
        renderjson={categoriaMap}
        idBtnPre={"icoComentarioPreS"}
        idBtnNex={"icoComentarioNextS"}
      /> */}
    </>
  );
}
