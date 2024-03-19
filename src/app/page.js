
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

async function getDataCategoria() {
  const Abarrotes = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/18`);
  const Bebidas = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/19`);
  const Lacteos = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/20`);
  const Limpieza = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/21`);
  const Cpersonal = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/22`);
  const Confiteria = await fetch(`${process.env.URL_WEB}/api/woocommerce/products/23`);
  if (!Abarrotes.ok) {
    console.log("Failed to fetch data");
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
          idBtnNex={"icoMainNextSH"}
          idBtnPre={"icoMainPreSH"}
        />
      </main>
      {/* seccion de categorias flex flex-col justify-center items-center*/}
      <section className="lg:container mx-auto  mt-16 mb-4 sm:px-10 md:px-10 lg:px-20 px-5">
      <div className="w-full relative">
      <Image
          className="w-full mb-5"
          style={{height:"60px !important",objectFit:"cover",borderRadius:"10px"}}
          src={ImageDefault}
          alt="Picture of the author"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
        <div className="flex justify-between pr-8 ">
          <h2 className="mb-1 text-sm  sm:text-base md:text-lg lg:text-1xl ">
            ¡ TODO LO ENCUENTRAS EN DOONA !
          </h2>
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
          <h2 className="text-sm  sm:text-base md:text-lg lg:text-1xl">
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
        pretIcoID={"icoNuevoPreS"}
        nextIcoID={"icoNuevoNextS"}
        renderjson={data.arrayLacteos}
        icon={<Lacteos />}
      />
      <SectionSlider
        title="LO MEJOR EN C.PERSONAL"
        pretIcoID={"icoNuevoPreS"}
        nextIcoID={"icoNuevoNextS"}
        renderjson={data.arrayCpersonal}
        icon={<Lacteos />}
      />
      <SectionSlider
        title="LO MEJOR EN CONFITERIA"
        pretIcoID={"icoNuevoPreS"}
        nextIcoID={"icoNuevoNextS"}
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
