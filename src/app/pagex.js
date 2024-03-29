
import Categoria from "@/components/slider/categoria/Categoria";

import mejorSemana from "@/data/semana";
import homeSlider from "@/data/homeSlider";
import Comercial from "@/assets/comercial.png";

import HomePortda from "@/components/slider/homePortada/HomePortda";
import SliderMejor from "@/components/slider/lomejor/SliderMejor";
import SectionSlider from "@/components/slider/section/SectionSlider";
import ImageDefault from "@/assets/Image.webp"
import Licor from "@/components/svg/Licor";
import LoMejor from "@/components/svg/LoMejor";
import Desayuno from "@/components/svg/Desayuno";
import Lacteos from "@/components/svg/Lacteos";
import Limpieza from "@/components/svg/Limpieza";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

async function getDataCategoria() {
  const Abarrotes = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/18`);
  const Bebidas = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/19`);
  const Lacteos = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/20`);
  const Limpieza = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/21`);
  const Cpersonal = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/22`);
  const Confiteria = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/23`);
  if (!Abarrotes.ok) {
    console.error("Failed to fetch data");
  }
  const resA = await Abarrotes.json()
  const resB = await Bebidas.json()
  const resLa = await Lacteos.json()
  const resLi = await Limpieza.json()
  const resCp = await Cpersonal.json()
  const resCo = await Confiteria.json()
  return {
    arrayAbarrotes: resA.products,
    arrayBebidas: resB.products,
    arrayLacteos: resLa.products,
    arrayLimpieza: resLi.products,
    arrayCpersonal: resCp.products,
    arrayConfiteria: resCo.products,
  }
}


export default async function Home() {
  const data = await getDataCategoria();
  
  return (
    <>
      <main className="relative portada-main text-white h-screen w-screen">
        <HomePortda
          renderjson={homeSlider}
          idBtnNex={"iicoMainNextSH"}
          idBtnPre={"iicoMainPreSH"}
        />
      </main>
      {/* seccion de categorias flex flex-col justify-center items-center*/}
      <section className="lg:container mx-auto  mt-8 mb-4 sm:px-10 md:px-10 lg:px-20 px-5">   
        <div className="flex justify-center  font-extrabold items-center gap-3 mb-2">
          <h2 className="mb-1 text-nowrap text-sm  sm:text-base md:text-lg lg:text-1xl ">
            TODAS NUESTRAS CATEGORÍAS  
          </h2>
           <span className="barra mx-auto flex items-center justify-center bg-[#cfcfcf] "></span>
           <div className="flex gap-2">
           {<button id="CateBackBtn"  className="cateBtnSwiper flex bg-[#F7F7F7] text-[#ABABAB] justify-center items-center" ><FaChevronLeft className='text-sm' /></button>}
           {<button id="CateNextBtn" className="cateBtnSwiper flex bg-[#F7F7F7] text-[#ABABAB] justify-center items-center"  ><FaChevronRight className='text-sm' /></button>}
           </div>
           
        </div>

        <div className="relative">
          <Categoria />
        </div>
      </section>
      {/* section promociones */}
      <section className="lg:container mx-auto p-2 sm:px-10 lg:px-20 px-4">
       {false && <span className="text-xl font-extrabold flex items-center gap-3 lg:mb-5 mb-0">
          <p className="icon-shadow shadow shadow-2xl text-white p-2 text-sm sm:text-sm md:text-lg lg:text-3xl rounded-2xl">
            <LoMejor />
          </p>
          <h2 className="text-sm  sm:text-base md:text-lg lg:text-xl">
            LO MEJOR DE LA SEMANA
          </h2>
        </span>}
        <div className="relative">
          <SliderMejor renderjson={mejorSemana}/>
        </div>
      </section>

      {/* seeccion de bebidas */}
      <SectionSlider
        title="LO MEJOR DE LA ABARROTES"
        pretIcoID={"icoBebidaPreS"}
        nextIcoID={"icoBebidaNextS"}
        renderjson={data.arrayAbarrotes}
        icon={<Desayuno />}
      />
      <SectionSlider
        title="LO MEJOR EN BEBIDAS"
        pretIcoID={"icoFrescosPreS"}
        nextIcoID={"icoFrescosNextS"}
        renderjson={data.arrayBebidas}
        icon={<Licor />}
      />
      <SectionSlider
        title="LO MEJOR EN LIMPIEZA"
        pretIcoID={"icoLicoresPreS"}
        nextIcoID={"icoLicoresNextS"}
        renderjson={data.arrayLimpieza}
        icon={<Limpieza />}
      />
      <SectionSlider
        title="LO MEJOR EN LACTEOS"
        pretIcoID={"icoLacteosPreS"}
        nextIcoID={"icoLacteosNextS"}
        renderjson={data.arrayLacteos}
        icon={<Lacteos />}
      />
      <SectionSlider
        title="LO MEJOR EN C.PERSONAL"
        pretIcoID={"icoPersonalPreS"}
        nextIcoID={"icoPersonalNextS"}
        renderjson={data.arrayCpersonal}
        icon={<Lacteos />}
      />
      <SectionSlider
        title="LO MEJOR EN CONFITERIA"
        pretIcoID={"icoConfiteriaPreS"}
        nextIcoID={"icoConfiteriaNextS"}
        renderjson={data.arrayConfiteria}
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
