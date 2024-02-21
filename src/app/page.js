"use client";
import Categoria from "@/components/slider/categoria/Categoria";
import Image from "next/image";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import Card from "@/components/slider/products/Card";
import categoriaMap from "@/components/slider/categoria/mapCategoria";
import mejorSemana from "@/data/semana";
import LoMejor from "@/components/slider/lomejor/Lomejor";
import Cerdo from "@/assets/cerdo.png";
import Comercial from "@/assets/comercial.png";
import { MdOutlineNavigateNext,MdOutlineArrowBackIos } from "react-icons/md";
export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center px-10 align-center portada-main text-white">
        <div className="lg:container lg:mx-auto p-2">
          <h1 className="text-6xl ">
            ¡Merkat es la marca <br /> que merece tu familia!
          </h1>
          <p className="">
            Con una variedad de productos en las categorias más importantes. Te
            ofrecemos calidad superior al precio del mercado. ¡Te invitamos a
            conocer su línea!
          </p>
        </div>
      </main>
      {/* seccion de categorias */}
      <section className="lg:container mx-auto   py-8 flex flex-col justify-center items-center px-20">
        <h2 className="text-center mb-5 text-xl font-extrabold text-red-600">
          COMPRA POR CATEGORIAS
        </h2>
        <Categoria />
      </section>
      {/* section promociones */}
      <section className="md:container mx-auto p-2 px-20">
        <h2 className="mb-5 text-xl font-extrabold text-red-600">
          LO MEJOR DE LA SEMANA
        </h2>
        <Carousel
         className="py-2"
          withIndicators
          slideSize="25%"
          slideGap="md"
          loop
          height="100%"
          slidesToScroll={4}
          nextControlIcon={<MdOutlineNavigateNext />}
          previousControlIcon={<MdOutlineArrowBackIos/>}
        >
          {mejorSemana?.map((cate, i) => (
            <Carousel.Slide key={i}>
              <LoMejor image={cate.image} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </section>
      {/* seeccion de bebidas */}
      <section className="lg:container lg:mx-auto py-5  px-20">
        <div className="flex justify-between pr-8">
          <h2 className="mb-5 text-xl font-extrabold text-red-600">
            LO MEJOR DE LA BEBIDAS
          </h2>{" "}
          <p>Ver Todos</p>
        </div>
        <Carousel
        className="py-2"
          withIndicators
          slideSize="20%"
          slideGap="md"
          loop
          height="100%"
          slidesToScroll={5}
          nextControlIcon={<MdOutlineNavigateNext />}
          previousControlIcon={<MdOutlineArrowBackIos/>}
        >
          {categoriaMap?.map((cate, i) => (
            <Carousel.Slide key={i}>
              <Card image={cate.image} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </section>
      {/* seeccion de bebidas */}
      <section className="lg:container lg:mx-auto py-2  px-20">
        <div className="flex justify-between pr-8">
          <h2 className="mb-5 text-xl font-extrabold text-red-600">
            LO MEJOR DE LA BEBIDAS
          </h2>{" "}
          <p>Ver Todos</p>
        </div>
        <Carousel
         className="py-2"
          withIndicators
          slideSize="20%"
          slideGap="md"
          loop
          height="100%"
          slidesToScroll={5}
          nextControlIcon={<MdOutlineNavigateNext />}
          previousControlIcon={<MdOutlineArrowBackIos/>}
        >
          {categoriaMap?.map((cate, i) => (
            <Carousel.Slide key={i}>
              <Card image={cate.image} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </section>
      {/* seeccion de bebidas */}
      <section className="lg:container lg:mx-auto py-2 px-20">

        <div className="flex justify-between pr-8">
          <h2 className="mb-5 text-xl font-extrabold text-red-600">
            LO MEJOR DE LA BEBIDAS
          </h2>
          <p>Ver Todos</p>
        </div>
        <Image className="w-full" src={Comercial}  alt="Picture of the author"
          sizes="(min-width: 808px) 50vw, 100vw" />
        <Carousel
          className="py-2 "
          withIndicators
          slideSize="20%"
          slideGap="md"
          loop
          height="100%"
          slidesToScroll={5}
          nextControlIcon={<MdOutlineNavigateNext />}
          previousControlIcon={<MdOutlineArrowBackIos/>}
        >
          {categoriaMap?.map((cate, i) => (
            <Carousel.Slide key={i}>
              <Card image={cate.image} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </section>
      {/* section comercial */}
      <section className="mt-8 py-5 bg-red-600 flex gap-3 text-white justify-center items-center">
        <Image className="img-cerdo" src={Cerdo}  alt="Picture of the author"
          width={230}
          height={230} />
        <h2 className="font-bold text-3xl text-xl">¡ DONDE COMPRAR ES AHORRAR !</h2>
      </section>
    </>
  );
}
