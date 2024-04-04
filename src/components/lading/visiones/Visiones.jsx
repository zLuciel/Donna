import Image from "next/image";
import React from "react";
import vision1 from "@/assets/vision1.jpg";
const Visiones = () => {
  return (
    <section className="container-vision-valor flex flex-col gap-[60px]">
      {/* col 1 */}
      <div className="relative container-max-width mx-auto">
        <div className=" card-info">
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Misión
          </h2>
          <p className="text-center text-sm">
            Empoderamos a las comunidade, transformamos vidas a traves del
            acceso a productos eseciales de alta calidad a precios accesibles.
            Nuestra mision es brindar a cada hogar la oportunidad de acceder a
            alimentos y productos esenciales con precios justos , promoviendo
            asi una sociedad mas qeuitativa y prospera. especialmente aquellos
            en situacion de vulneravilidad
          </p>
        </div>
        <div className="card-item ">
          <Image src={vision1} alt="-" width={600} />
        </div>
      </div>


      {/* responsive card vision */}
      <div className="mx-auto" style={{width:"80%"}}>
        <div className="">
          <Image src={vision1} alt="-" width={600} />
        </div>
        <div className="bg-white p-10">
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Misión
          </h2>
          <p className="text-center text-sm">
            Empoderamos a las comunidade, transformamos vidas a traves del
            acceso a productos eseciales de alta calidad a precios accesibles.
            Nuestra mision es brindar a cada hogar la oportunidad de acceder a
            alimentos y productos esenciales con precios justos , promoviendo
            asi una sociedad mas qeuitativa y prospera. especialmente aquellos
            en situacion de vulneravilidad
          </p>
        </div>
        
      </div>


      {/* col 2 */}
      <div className="relative container-max-width mx-auto">
        <div className="card-item item-b">
          <Image src={vision1} alt="-" width={600} />
        </div>
        <div className=" card-info info-b">
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Visión
          </h2>
          <p className="text-center text-sm">
            Empoderamos a las comunidade, transformamos vidas a traves del
            acceso a productos eseciales de alta calidad a precios accesibles.
            Nuestra mision es brindar a cada hogar la oportunidad de acceder a
            alimentos y productos esenciales con precios justos , promoviendo
            asi una sociedad mas qeuitativa y prospera. especialmente aquellos
            en situacion de vulneravilidad
          </p>
        </div>
      </div>
    </section>
  );
};

export default Visiones;
