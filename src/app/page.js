"use client";
import HeaderLanding from "@/components/lading/header/HeaderLanding";
import HomePortda from "@/components/slider/homePortada/HomePortda";
import homeSlider from "@/data/homeSlider";
import Image from "next/image";
import React from "react";
import Mockup from "@/assets/macku.png";
import Beneficio from "@/assets/beneficio.png";
import CategoriaSlider from "@/components/lading/slider/CategoriaSlider";
import Descuento from "@/components/lading/svg/Descuento";
import UserSart from "@/components/lading/svg/UserSart";
import Famili from "@/components/lading/svg/Famili";
import { useProduct } from "./provider/ProviderContext";
import Footer from "@/components/lading/footer/Footer";
import gradient from "@/assets/img_gradient.png"
const Page = () => {
  const { sectionRefs } = useProduct();
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
      <section
        ref={sectionRefs.categorias}
        className="lg:container mx-auto px-20 py-10"
      >
        <h2 className="text-5xl roboto_bold mb-5 text-center">
          Todo lo encuentras en <b className="text-gradient">Doona</b> 
        </h2>
        <CategoriaSlider />
      </section>
      {/* section 2 */}
      <section
        ref={sectionRefs.tiendas}
        className="bg-[#E9E9E9] relative rounded-md lg:container  gap-10 mx-auto px-20 grid grid-cols-2"
      >
      <Image
          alt="Mountains"
          src={gradient}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            zIndex:"1",
            objectFit: 'cover', // cover, contain, none
          }}
        />
        <div className="flex flex-col gap-8 justify-self-center self-center">
          <h2 className="text-5xl roboto_bold">
            <b className="text-gradient">Hasta 60% dscto.</b> en tus marcas
            favoritas con tu App Doona
          </h2>
          <ul className="flex flex-col gap-5">
            <li className="flex gap-3 items-center text-sm">
              <Descuento />
              Beneficios exclusivos en restaurantes, moda, pet shops y más por
              ser cliente.
            </li>
            <li className="flex gap-3 items-center text-sm">
              <Famili />
              Solicita beneficios especializados para tu salud y la de tu
              familia.
            </li>
            <li className="flex gap-3 items-center text-sm">
              <UserSart />
              ¡Muchos son ilimitados y sin costo!
            </li>
          </ul>
        </div>
        <div style={{ zIndex:"2"}}>
          <Image src={Mockup} alt="mackup" width={600} height={600} />
        </div>
      </section>

      {/* Beneficios */}
      <section
        ref={sectionRefs.beneficio}
        className="lg:container mx-auto px-20 py-10 gap-20 grid grid-cols-2"
      >
        <div>
          <Image src={Beneficio} alt="mackup" width={600} height={600} />
        </div>

        <div className="flex flex-col gap-8 justify-self-center self-center">
          <h2 className="text-5xl roboto_bold">
            <b className="text-gradient">Beneficio.</b> para una vida más fácil
          </h2>
          <ul className="flex flex-col gap-5">
            <li className="flex gap-3 items-center text-sm">
              <Descuento />
              Accede a Clínica Internacional Digital y solicítalo para Medicina
              General y Pediatría según tu plan.
            </li>
            <li className="flex gap-3 items-center text-sm">
              <Famili />
              Obtén un chequeo preventivo anual sin costo y mantén tu salud bajo
              control.
            </li>
            <li className="flex gap-3 items-center text-sm">
              <UserSart />
              Recibe atención médica en casa y paga solo la consulta (Lima
              Metropolitana y Callao).
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
