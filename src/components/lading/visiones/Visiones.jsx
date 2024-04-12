import Image from "next/image";
import React from "react";
import vision1 from "@/assets/TRABAJADOR-DOONA.webp";
const Visiones = ({ section }) => {
  return (
    <section ref={section} className="container-vision-valor  gap-[40px]">
      <div className="lg:container mx-auto grid lg:grid-cols-2  grid-cols-1 gap-20 lg:px-20 px-6">
        {/* col 1 */}

        <div className=" justify-self-center relative ">
          <span className="flex text-1xl title-nunito gradient-title text-white" >Conoce nuestra misión</span>
          <div className="bg-white container-max-width">
            <p>
              Empoderamos a las comunidades, transformamos vidas a través del
              acceso a productos esenciales de alta calidad a precios
              accesibles. Nuestra misión{" "}
              <b>
                {" "}
                es brindar a cada hogar la oportunidad de acceder a alimentos y
                productos esenciales con precios justos
              </b>
              , promoviendo así una sociedad más equitativa y próspera.
              especialmente aquellos en situación de vulnerabilidad.
            </p>
          </div>
        </div>

        {/* col 2 */}
        <div className=" justify-self-center relative">
        <span className="flex text-1xl title-nunito gradient-title text-white" >Conoce nuestra visión</span>
          <div className="bg-white container-max-width">
           <p>
            Ser el motor del cambio positivo, inspirando a otras empresas a
            adoptar prácticas responsables y solidarias. Aspiramos a ser
            <b>
              {" "}
              reconocidos como líderes en la promoción de la igualdad de
              oportunidades y la justicia social en los millones de peruanos.
            </b>{" "}
            Aspiramos a ser un faro de esperanza
          </p> 
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Visiones;
