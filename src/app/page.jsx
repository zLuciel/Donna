"use client";
import HeaderLanding from "@/components/lading/header/HeaderLanding";
import HomePortda from "@/components/slider/homePortada/HomePortda";
import homeSlider from "@/data/homeSlider";
import Image from "next/image";
import Mockup from "@/assets/bento.png";
import CategoriaSlider from "@/components/lading/slider/CategoriaSlider";
import Descuento from "@/components/lading/svg/Descuento";
import UserSart from "@/components/lading/svg/UserSart";
import Famili from "@/components/lading/svg/Famili";
import { useProduct } from "./provider/ProviderContext";
import Footer from "@/components/lading/footer/Footer";
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
        className="py-5 bg-[#ff4d0038] relative "
      >
        <div className="title-div"></div>
        <div className="lg:container py-4 lg:px-20 px-6 title-categoria mx-auto">
          <h2 className="h2-formate lg:text-5xl sm:text-3xl text-3xl xs:text-3xl md:text-4xl roboto_bold ">
            Nuestras categorias
          </h2>
        </div>
        <CategoriaSlider />
      </section>

      {/* section 2 */}
      <section ref={sectionRefs.tiendas} className=" relative rounded-md py-20">
        <div className="lg:container px-6  gap-10 mx-auto lg:px-20 grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col gap-8 justify-self-center self-center">
            <h3 className="lg:text-5xl sm:text-3xl text-3xl xs:text-3xl md:text-4xl roboto_bold">
              <b className="text-[#ff4d00] ">Doona</b> Creando un impacto
              positivo a través de nuestros valores
            </h3>
            <ul className="flex flex-col gap-8">
              <li className="flex gap-3 items-start text-sm">
                <span  style={{ width: "max-content" }}>
                  <Descuento />
                </span>
                
                <span className="flex flex-col gap-1">
                  <h4 className="font-semibold text-xl">Equidad y accesibilidad:</h4>
                  <p className="text-sm">
                    Creemos en un mundo donde todos tienen derecho a acceder a
                    productos de calidad a precios justos, independientemente de
                    su situación económica.
                  </p>
                </span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span style={{ width: "max-content" }}>
                  <Famili />
                </span>
                <span className="flex flex-col gap-1">
                  <h4 className="font-semibold text-xl">Colaboración y cooperación:</h4>
                  <p className="text-sm">
                    Nos comprometemos a trabajar en estrecha colaboración con
                    organizaciones sociales y comunitarias para abordar las
                    necesidades más apremiantes de nuestra sociedad.
                  </p>
                </span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span style={{ width: "max-content" }}>
                  <UserSart />
                </span>

                <span className="flex flex-col gap-1">
                  <h4 className="font-semibold text-xl">
                    Integridad y transparencia:{" "}
                  </h4>
                  <p className="text-sm">
                    Actuamos con honestidad y transparencia en todas nuestras
                    operaciones, construyendo relaciones de confianza con
                    nuestros clientes, empleados y socios.
                  </p>
                </span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span style={{ width: "max-content" }}>
                  <UserSart />
                </span>

                <span className="flex flex-col gap-1">
                  <h4 className="font-semibold text-xl">Empatía y servicio:</h4>
                  <p className="text-sm">
                    Nos esforzamos por comprender las necesidades y
                    preocupaciones de nuestros clientes, brindando un servicio
                    personalizado y atento en todo momento. Buscamos
                    constantemente nuevas formas de servir a nuestra comunidad,
                    adoptando tecnologías y prácticas comerciales que promuevan
                    la inclusión y la sostenibilidad.
                  </p>
                </span>
              </li>
            </ul>
          </div>
          <div
            style={{ zIndex: "2" }}
            className="justify-self-center self-center"
          >
            <Image src={Mockup} alt="mackup" width={400} height={400} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
