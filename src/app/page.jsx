"use client";
import HeaderLanding from "@/components/lading/header/HeaderLanding";
import HomePortda from "@/components/slider/homePortada/HomePortda";
import homeSlider from "@/data/homeSlider";
import Image from "next/image";
import React from "react";
import Mockup from "@/assets/macku.png";
import Beneficio from "@/assets/img_estar_bien.png";
import CategoriaSlider from "@/components/lading/slider/CategoriaSlider";
import Descuento from "@/components/lading/svg/Descuento";
import UserSart from "@/components/lading/svg/UserSart";
import Famili from "@/components/lading/svg/Famili";
import { useProduct } from "./provider/ProviderContext";
import Footer from "@/components/lading/footer/Footer";
import gradient from "@/assets/img_gradient.png";
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
          Todo lo encuentras en <b className="text-[#ff4d00]">Doona</b>
        </h2>
        <CategoriaSlider />
      </section>

      {/* section 2 */}
      <section
        ref={sectionRefs.tiendas}
        className=" relative rounded-md "
      >
        <div className="lg:container  gap-10 mx-auto px-20 grid grid-cols-2">
        <div className="absolute  gradiente-2  h-full top-0 right-0 w-2/5"></div>
        {/* <Image
          alt="Mountains"
          src={gradient}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            zIndex: "1",
            objectFit: "cover", // cover, contain, none
          }}
        /> */}
        <div className="flex flex-col gap-8 justify-self-center self-center">
          <h3 className="text-5xl roboto_bold">
            <b className="text-[#ff4d00] ">Hasta 60% dscto.</b> en tus marcas
            favoritas con tu App Doona
          </h3>
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
        <div style={{ zIndex: "2" }}>
          <Image src={Mockup} alt="mackup" width={600} height={600} />
        </div>
        </div>
      </section>

      {/* Beneficios */}
      <section
        ref={sectionRefs.beneficio}
        className="lg:container mx-auto px-60 py-40"
      >
        <div className="gradient-beneficio relative  items-center grid grid-cols-2  flex gap-4 px-10 py-20">
        <Image
        className={"img-gradient"}
          alt="Mountains"
          src={gradient}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            zIndex: "1",
            objectFit: "cover", // cover, contain, none
          }}
        />
          <div className="absolute container-image-beneficio">
            <div className="relative ">
              <Image
                className="relative"
                src={Beneficio}
                alt="beneficio"
                width={416}
                height={416}
              />
            </div>
          </div>
          <div></div>
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl font-bold roboto_Extrabol mb-3">
              Beneficios para una vida más fácil
            </h2>
            <p className="font-semibold mb-5 text-md">
              Y disfruta de talleres en vivo, clases cortas y sesiones
              especializadas en psicología y nutrición.
            </p>
            <button className="button-beneficio">Conoce Estar Bien</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
