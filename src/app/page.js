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
import { FaBottleDroplet,FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

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
          <Link className="text-sm border-b border-black text-red-600" href="/productos">
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
          <p className="bg-red-600 text-white px-4 py-1 text-lg rounded-2xl"><FaBottleDroplet/></p>
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
      <SectionSlider title="LO MEJOR EN FRESCOS" pretIcoID={"icoFrescosPreS"} nextIcoID={"icoFrescosNextS"} renderjson={categoriaMap} icon={<FaBottleDroplet/>}/>
      <SectionSlider title="LO MEJOR EN LICORES" pretIcoID={"icoLicoresPreS"} nextIcoID={"icoLicoresNextS"} renderjson={categoriaMap} image={Comercial} icon={<FaCartShopping/>}/>
      <SectionSlider title="LO MEJOR EN FRESCOS"pretIcoID={"icoNuevoPreS"} nextIcoID={"icoNuevoNextS"}  renderjson={categoriaMap} icon={<FaCartShopping/>}/>
      {/* section comercial */}
      <section className="mt-8 py-5 bg-red-600 flex gap-3 text-white justify-center items-center">
        <Image
          className="img-cerdo"
          src={Cerdo}
          alt="Picture of the author"
          width={230}
          height={230}
        />
        <h2 className="font-bold text-3xl text-xl">
          ¡ DONDE COMPRAR ES AHORRAR !
        </h2>
      </section>
    </>
  );
}
