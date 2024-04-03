import Image from "next/image";
import React from "react";
import vision1 from "@/assets/vision1.jpg"
const Visiones = () => {
  return (
    <section className="container-vision-valor flex flex-col gap-20">
        {/* col1 */}
    <div className="flex w-4/5  items-center mx-auto">
      <Image src={vision1} alt="-" width={500}   />
      <div className="flex flex-col relative left-[-65px] bottom-[-70px] gap-5 bg-white px-8 py-[60px] rounded-3xl">
        <h2 className="text-4xl uppercase font-extrabold text-center">Misión</h2>
        <p className="text-center text-sm ">
          Empoderamos a las comunidade, transformamos vidas a traves del acceso
          a productos eseciales de alta calidad a precios accesibles. Nuestra
          mision es brindar a cada hogar la oportunidad de acceder a alimentos y
          productos esenciales con precios justos , promoviendo asi una sociedad
          mas qeuitativa y prospera. especialmente aquellos en situacion de
          vulneravilidad
        </p>
      </div>
    </div>
    {/* col 2 */}
    <div className="flex w-4/5 gap-10 items-center mx-auto mt-10">
      <div className="flex relative right-[-65px] top-[-70px] flex-col gap-5 bg-white px-8 py-[60px] rounded-3xl">
        <h2 className="text-4xl uppercase font-extrabold text-center">Visión</h2>
        <p className="text-center text-sm">
          Empoderamos a las comunidade, transformamos vidas a traves del acceso
          a productos eseciales de alta calidad a precios accesibles. Nuestra
          mision es brindar a cada hogar la oportunidad de acceder a alimentos y
          productos esenciales con precios justos , promoviendo asi una sociedad
          mas qeuitativa y prospera. especialmente aquellos en situacion de
          vulneravilidad
        </p>
      </div>
      <Image src={vision1} alt="-" width={500}   />
    </div>
    </section>
  );
};

export default Visiones;
