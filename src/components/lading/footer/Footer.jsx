import { useProduct } from "@/app/provider/ProviderContext";
import Image from "next/image";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook,FaTiktok} from "react-icons/fa";

const Footer = () => {
  const { scrollToSection} = useProduct();
  return (
    <footer className="bg-[#e9e9e9] p-3 flex  py-10 justify-center items-center text-sm">
      <div className="lg:container justify-between px-40 flex gap-10  item-center">
        {/* col-1 */}
        <div className="flex gap-3 flex-col">
          <Image
            src="/DonnaMovil.png"
            alt="Picture of the author"
            width={120}
            height={10}
          />
          <h3 className="roboto_bold mb-1">
            ¿Más barato que el mercado?
          </h3>
          <p className="text-xs">© 2024 Mercado Doona</p>
        </div>
        {/* col -2 */}
        <div className="flex flex-col gap-5">
          <h3 className="text-md"><b>SECCIONES</b></h3>
          <ul className="flex text-md flex-col gap-3">
            <li className="text-[#3b3b3bef] cursor-pointer" onClick={() => scrollToSection('categorias')}>Producto</li>
            <li className="text-[#3b3b3bef] cursor-pointer" onClick={() => scrollToSection('tiendas')}>Tienda</li>
            <li className="text-[#3b3b3bef] cursor-pointer"conClick={() => scrollToSection('beneficio')}>Beneficios</li>
          </ul>
        </div>
        {/* col -3 */}
        <div className="flex flex-col gap-4">
        <h3 className="text-md"><b>VISITA NUESTRAS REDES</b></h3>
        <ul className="flex gap-5">
          <li className="text-3xl text-[#3b3b3bef] "><BsInstagram /></li>
          <li className="text-3xl text-[#3b3b3bef]"><FaFacebook /></li>
          <li className="text-3xl text-[#3b3b3bef]"><FaTiktok /></li>
        </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
