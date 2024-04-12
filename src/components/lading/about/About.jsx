import Link from "next/link";
import React from "react";
import Image from "next/image";
import Verdura from "@/assets/VERDURAS.png";
const About = ({section}) => {
  return (
    <section ref={section} className="lg:container mx-auto container-about grid  px-20">

      <div className="relative">
      <Image src={Verdura} sizes="100vw" fill alt="wave"/>
      </div>

      <div className="container-info-about relative flex  py-5 h-full">
        <div className="lg:w-4/5 md:w-4/5 w-full flex flex-col gap-7 p-5  justify-center z-[3] ">
          <h3 className="lg:text-5xl sm:text-3xl text-3xl xs:text-3xl md:text-4xl title-nunito">
            <b className="text-[#ff4d00] ">Doona:</b> Innovación social y
            productos de alta calidad
          </h3>
          <p className="lg:text-md md:text-sm">
            Nuestra empresa se erige como un pilar fundamental en la
            construccion de mundo mas justo y solidario, donde el acceso
            equitativo a productos esenciales de alta calidad es una realidad.
          </p>
          <span className="font-semibold">
            ¡No te pierdas los mejores precios del barrio aqui!
          </span>
          <div>
            <Link
              href="https://wa.link/njs0op"
              target="_blank"
              className="button-about"
            >
              <span>Conocer más</span>
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;
