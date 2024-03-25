"use client";
import HeaderLanding from "@/components/lading/header/HeaderLanding";
import HomePortda from "@/components/slider/homePortada/HomePortda";
import homeSlider from "@/data/homeSlider";
import { rem } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { RxCodesandboxLogo } from "react-icons/rx";
import Mockup from "@/assets/macku.png";
import Categoria from "@/components/slider/categoria/Categoria";
const page = () => {
  return (
    <>
      <HeaderLanding />
      <main className="relative portada-main text-white h-screen w-screen">
        <HomePortda
          renderjson={homeSlider}
          idBtnNex={"iicoMainNextSH"}
          idBtnPre={"iicoMainPreSH"}
        />
      </main>

      {/* section */}
      <section className="lg:container mx-auto px-20 py-10">
        <h2 className="text-3xl roboto_bold mb-5">Todo lo encuentras en Doona</h2>
        <Categoria/>
      </section>
      {/* section 2 */}
      <section className="lg:container mx-auto px-20 grid grid-cols-2">
        <div className="flex flex-col gap-8 justify-self-center self-center">
          <h2 className="text-5xl roboto_bold">
            <b className="text-gradient">Hasta 60% dscto.</b> en tus marcas
            favoritas con tu App Doona
          </h2>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-center">
              <RxCodesandboxLogo style={{ width: rem(16), height: rem(16) }} />{" "}
              Beneficios exclusivos en restaurantes, moda, pet shops y más por
              ser cliente.
            </li>
            <li className="flex gap-3 items-center">
              <RxCodesandboxLogo style={{ width: rem(16), height: rem(16) }} />{" "}
              Solicita beneficios especializados para tu salud y la de tu
              familia.
            </li>
            <li className="flex gap-3 items-center">
              <RxCodesandboxLogo style={{ width: rem(16), height: rem(16) }} />{" "}
              ¡Muchos son ilimitados y sin costo!
            </li>
          </ul>
        </div>
        <div>
          <Image src={Mockup} alt="mackup" width={600} height={600} />
        </div>
      </section>
      {/* section 3 */}
      <section className="lg:container px-20 grid grid-cols-2">
        <div>
          <h2 className="text-3xl roboto_bold mb-5">
            Beneficios para una vida más fácil
          </h2>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-center">
              <RxCodesandboxLogo style={{ width: rem(16), height: rem(16) }} />{" "}
              Beneficios exclusivos en restaurantes, moda, pet shops y más por
              ser cliente.
            </li>
            <li className="flex gap-3 items-center">
              <RxCodesandboxLogo style={{ width: rem(16), height: rem(16) }} />{" "}
              Solicita beneficios especializados para tu salud y la de tu
              familia.
            </li>
            <li className="flex gap-3 items-center">
              <RxCodesandboxLogo style={{ width: rem(16), height: rem(16) }} />{" "}
              ¡Muchos son ilimitados y sin costo!
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
