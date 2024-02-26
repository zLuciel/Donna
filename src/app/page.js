"use client";
import Categoria from "@/components/slider/categoria/Categoria";
import Image from "next/image";

import categoriaMap from "@/components/slider/categoria/mapCategoria";
import mejorSemana from "@/data/semana";
import homeSlider from "@/data/homeSlider";
import Cerdo from "@/assets/cerdo.png";
import Comercial from "@/assets/comercial.png";

import HomePortda from "@/components/slider/homePortada/HomePortda";
import SliderMejor from "@/components/slider/lomejor/SliderMejor";
import SectionSlider from "@/components/slider/section/SectionSlider";
/*ICONS */
import { FaBottleDroplet,FaCartShopping,FaCalendarCheck,FaFishFins } from "react-icons/fa6";
import { MdLiquor } from "react-icons/md";
import { GiBroccoli } from "react-icons/gi";

import Link from "next/link";
import CategoriaHeader from "@/components/header/Categoria";

export default function Home() {
  return (
    <>
      <main className="relative portada-main text-white h-screen w-screen">
       <HomePortda renderjson={homeSlider} idBtnNex={"icoMainNextSH"} idBtnPre={"icoMainPreSH"} />
      </main>
      {/* seccion de categorias flex flex-col justify-center items-center*/}
      <section className="lg:container mx-auto  py-8 sm:px-10 md:px-10 lg:px-20 px-10">
        <div className="flex justify-between pr-8 ">
          <h2 className="mb-1 text-xl font-extrabold ">
        ¡ TODO LO ENCUENTRAS EN DOONA !
         </h2>
         <p>
          <Link className="text-sm border-b border-red-500 text-red-600" href="/productos">
            VER TODOS
          </Link>
        </p>
        </div>
        <div className="relative">
        <Categoria />
        </div>
      </section>
      {/* section promociones */}
      <section className="lg:container mx-auto p-2 sm:px-10 lg:px-20 px-10">
         <span className="mb-5 text-xl font-extrabold flex items-center gap-3">
          <p className="bg-red-600 text-white px-4 py-1 text-lg rounded-2xl"><FaCalendarCheck/></p>
          <h2 >
          LO MEJOR DE LA SEMANA
        </h2>
        </span>
        <div className="relative">
        <SliderMejor renderjson={mejorSemana} viewPagi={true} />
        </div>
      </section>


      {/* seeccion de bebidas */}
      <SectionSlider title="LO MEJOR DE LA BEBIDAS" pretIcoID={"icoBebidaPreS"} nextIcoID={"icoBebidaNextS"} renderjson={categoriaMap} icon={<FaBottleDroplet/>} />
      <SectionSlider title="LO MEJOR EN FRESCOS" pretIcoID={"icoFrescosPreS"} nextIcoID={"icoFrescosNextS"} renderjson={categoriaMap} icon={<FaFishFins/>}/>
      <SectionSlider title="LO MEJOR EN LICORES" pretIcoID={"icoLicoresPreS"} nextIcoID={"icoLicoresNextS"} renderjson={categoriaMap} image={Comercial} icon={<MdLiquor/>}/>
      <SectionSlider title="LO MEJOR EN VERDURAS"pretIcoID={"icoNuevoPreS"} nextIcoID={"icoNuevoNextS"}  renderjson={categoriaMap} icon={<GiBroccoli/>}/>
    </>
  );
}
