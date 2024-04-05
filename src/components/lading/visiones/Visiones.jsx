import Image from "next/image";
import React from "react";
import vision1 from "@/assets/vision1.jpg";
const Visiones = () => {
  return (
    <section className="container-vision-valor  gap-[40px]">
      <div className="lg:container mx-auto grid grid-cols-2 px-20">
        {/* col 1 */}
        <div className="bg-white relative container-max-width">
          <div className="card-item">
            <Image src={vision1} alt="-" width={600} />
          </div>
          <div className="card-info flex items-center justify-center ">
            <p className="text-md">
              Nos regimos por valores arraigados en la equidad, la justicia y la
              integridad, ofreciendo productos de calidad a precios justos,
              independientemente de la situación económica. Nuestra
              responsabilidad social va más allá de lo comercial; nos esforzamos
              por ser buenos ciudadanos corporativos, contribuyendo activamente
              al bienestar de las comunidades en las que operamos.
            </p>
          </div>
        </div>

        {/* col 2 */}
        <div className="bg-white relative flex card-info gap-10 flex-col items-center justify-center  container-max-width">
          <div className="flex flex-col  ">
            <h2 className="text-4xl roboto_bold  text-center mb-4">MISION</h2>
            <p className="text-md">
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
          <div className=" flex flex-col  ">
            <h2 className="text-4xl roboto_bold  text-center mb-4">VISION</h2>
            <p className="text-md">
              Ser el motor del cambio positivo, inspirando a otras empresas a
              adoptar prácticas responsables y solidarias. Aspiramos a ser
             <b> reconocidos como líderes en la promoción de la igualdad de
              oportunidades y la justicia social en los millones de peruanos.</b>
              Aspiramos a ser un faro de esperanza
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visiones;
