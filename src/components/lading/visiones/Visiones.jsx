import Image from "next/image";
import React from "react";
import vision1 from "@/assets/vision1.jpg";
const Visiones = () => {
  return (
    <section className="container-vision-valor flex flex-col gap-[100px] justify-center ">
      {/* col1 */}

      <div class="big-cards">
        <div class="card-item">
          <Image src={vision1} alt="-" width={600}  />{" "}
          <div class="card-info">
            <h3>Formalización de la propiedad</h3>{" "}
            <p>
              Las urbanizaciones que desarrollamos han sido planeadas y
              establecidas formalmente. De este modo, la inversión de nuestros
              clientes resulta totalmente segura. Ofrecemos los títulos de
              propiedad correspondientes, así como acceso al crédito en las
              instituciones financieras. Así se logra, por un lado, insertar a
              más peruanos en el sistema formal de la economía y por otro,
              seguir contribuyendo con el crecimiento ordenado del Perú.
            </p>
          </div>
        </div>
      </div>

      {/* col 2 */}
      <div className="flex  container-max-width  items-center justify-center mx-auto">
        <div className=" container-text  flex relative right-[-65px] top-[-70px] flex-col gap-5 bg-white px-8 justify-center items-center rounded-3xl">
          <h2 className="text-4xl uppercase font-extrabold text-center">
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
        <Image src={vision1} alt="-" width={600} />
      </div>
    </section>
  );
};

export default Visiones;
