import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="container-about">
      <div className="bg-white container-info-about flex  py-5 h-full">
        <div className="lg:w-4/5 md:w-4/5  flex flex-col gap-7 p-5  justify-center">
          <h3 className="lg:text-5xl sm:text-3xl text-3xl xs:text-3xl md:text-4xl roboto_bold">
            <b className="text-[#ff4d00] ">Doona:</b> Innovación social y
            productos de alta calidad
          </h3>
          <p className="lg:text-md md:text-sm w-4/5">
            Nuestra empresa se erige como un pilar fundamental en la
            construccion de mundo mas justo y solidario, donde el acceso
            equitativo a productos esenciales de alta calidad es una realidad.
          </p>
          <span className="font-semibold">
            ¡No te pierdas los mejores precios del barrio aqui!
          </span>
          <div style={{width:"max-content"}}>
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
    </div>
  );
};

export default About;
