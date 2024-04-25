"use client";
import HeaderLanding from "@/components/lading/header/HeaderLanding";
import homeSlider from "@/data/homeSlider";
import movilHomeSlider from "@/data/movilHomeSlider";
import Image from "next/image";
import Bento from "@/assets/TRABAJADOR-DOONA-VERTICAL.png";
import Descuento from "@/components/lading/svg/Descuento";
import UserSart from "@/components/lading/svg/UserSart";
import Famili from "@/components/lading/svg/Famili";
import { useProduct } from "./provider/ProviderContext";
import Footer from "@/components/lading/footer/Footer";
import About from "@/components/lading/about/About";
import Visiones from "@/components/lading/visiones/Visiones";
import HeaderLandingResponsive from "@/components/lading/header/HeaderLandingResponsive";
import { useMediaQuery } from "@mantine/hooks";
import Main from "@/components/lading/main/Main";
import CategoriaLanding from "@/components/lading/Categoria/Categoria";

const Page = () => {
  const { sectionRefs } = useProduct();
  const matches = useMediaQuery('(max-width: 663px)');
  const movil = useMediaQuery('(max-width: 552px)');
  return (
    <>
    <h1 className="text-prueba">hola como estan</h1>
     {!matches && <HeaderLanding />}
      {matches && <HeaderLandingResponsive/>}
      <Main/>
      <div className="bg-[#F3F5FD] ">
      <About section={sectionRefs.nosotros} />
      <Visiones section={sectionRefs.propuestas} />
      </div>
      {/* section */}
      <CategoriaLanding section={sectionRefs.productos} />

      {/* section 2 */}
      <section  ref={sectionRefs.valores} className=" relative rounded-md py-20">
        <div className="lg:container px-6  gap-10 mx-auto lg:px-6 grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col gap-8 justify-self-center self-center">
            <h3 className="lg:text-5xl sm:text-3xl text-3xl xs:text-3xl md:text-4xl title-nunito">
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
                  <p className="text-sm text-prueba">
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
            <Image className="rounded-3xl" src={Bento} alt="mackup" width={400} height={400} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
