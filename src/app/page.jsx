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
import visionimg from "@/assets/vision.jpg";
import Vision from "@/components/lading/Vision/Vision";
import About from "@/components/lading/about/About";
import Visiones from "@/components/lading/visiones/Visiones";
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
      <About />
      <Visiones />
      {/* section */}
      <section
        ref={sectionRefs.categorias}
        className="mx-auto   py-5 bg-[#ff4d0038] "
      >
        <div className=" bg-white py-4 px-3 title-categoria">
          <h2 className="text-3xl roboto_bold">
            Nuestras <b className="text-[#ff4d00]"> categorias</b>
          </h2>
        </div>
        <CategoriaSlider />
      </section>

      {/* section 2 */}
      <section ref={sectionRefs.tiendas} className=" relative rounded-md ">
        <div className="lg:container  gap-10 mx-auto px-20 grid grid-cols-2">
          <div className="flex flex-col gap-8 justify-self-center self-center">
            <h3 className="text-5xl roboto_bold">
              <b className="text-[#ff4d00] ">Hasta 60% dscto.</b> en tus marcas
              favoritas con tu App Doona
            </h3>
            <ul className="flex flex-col gap-8">
              <li className="flex gap-4 items-start text-sm">
                <Descuento />
                <span className="flex flex-col gap-1">
                  <h4 className="font-semibold">Equidad y accesibilidad</h4>
                  <p className="text-xs">
                    Creemos en un mundo donde todos tienen derecho a acceder a
                    productos de calidad a precios justos. independientemente de
                    su situación economica.
                  </p>
                </span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span style={{width:"max-content"}}><Famili /></span>
                <span className="flex flex-col gap-1">
                  <h4 className="font-semibold">Equidad y accesibilidad</h4>
                  <p className="text-xs">
                    Creemos en un mundo donde todos tienen derecho a acceder a
                    productos de calidad a precios justos. independientemente de
                    su situación economica.
                  </p>
                </span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span style={{width:"max-content"}}><UserSart /></span>
                
                <span className="flex flex-col gap-1">
                  <h4 className="font-semibold">Equidad y accesibilidad</h4>
                  <p className="text-xs">
                    Creemos en un mundo donde todos tienen derecho a acceder a
                    productos de calidad a precios justos. independientemente de
                    su situación economica.
                  </p>
                </span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span style={{width:"max-content"}}><UserSart /></span>
                
                <span className="flex flex-col gap-1">
                  <h4 className="font-semibold">Equidad y accesibilidad</h4>
                  <p className="text-xs">
                    Creemos en un mundo donde todos tienen derecho a acceder a
                    productos de calidad a precios justos. independientemente de
                    su situación economica.
                  </p>
                </span>
              </li>
            </ul>
          </div>
          <div style={{ zIndex: "2" }}>
            <Image src={Mockup} alt="mackup" width={600} height={600} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
