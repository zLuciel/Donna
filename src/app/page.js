"use client";
import Categoria from "@/components/slider/categoria/Categoria";
import Image from "next/image";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import categoriaMap from "@/components/slider/categoria/mapCategoria";
import mejorSemana from "@/data/semana";
import homeSlider from "@/data/homeSlider";
import Cerdo from "@/assets/cerdo.png";
import Comercial from "@/assets/comercial.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import HomePortda from "@/components/slider/homePortada/HomePortda";
import Link from "next/link";
import SliderCard from "@/components/slider/products/SliderCard";
import SliderMejor from "@/components/slider/lomejor/SliderMejor";
import SectionSlider from "@/components/slider/section/SectionSlider";
export default function Home() {
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
      {/* seccion de categorias flex flex-col justify-center items-center*/}
      <section className="lg:container mx-auto  py-8 px-20">
        <h2 className="mb-1 text-xl font-extrabold ">
        ¡ TODO LO ENCUENTRAS EN DOONA !
        </h2>
        <Categoria />
      </section>
      {/* section promociones */}
      <section className="md:container mx-auto p-2 px-20">
        <h2 className="mb-5 text-xl font-extrabold text-red-600">
          LO MEJOR DE LA SEMANA
        </h2>
        <SliderMejor renderjson={mejorSemana} />
      </section>


      {/* seeccion de bebidas */}
  
         <SectionSlider renderjson={categoriaMap}/>
      {/* seeccion de bebidas */}
      <SectionSlider renderjson={categoriaMap}/>
      {/* seeccion de bebidas */}
      <SectionSlider renderjson={categoriaMap} image={Comercial}/>
      {/* seeccion de bebidas */}
      <SectionSlider renderjson={categoriaMap}/>
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
