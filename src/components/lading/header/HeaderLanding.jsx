import React from "react";
import SubHeaderLading from "./SubHeaderLading";
import Image from "next/image";
import { useProduct } from "@/app/provider/ProviderContext";

const HeaderLanding = () => {
  const { scrollToSection} = useProduct();
  return (
    <header className="">
      <SubHeaderLading />
      <div className="md:container mx-auto flex justify-between items-center px-20 py-1">
        <Image src={"/DonnaMovil.png"} alt="Donna" width={70} height={70} />
        <div className="flex gap-5 items-center">
          <ul className="flex gap-8 text-sm">
            <li className="cursor-pointer" onClick={() => scrollToSection('categorias')}>Productos</li>
            <li className="cursor-pointer" onClick={() => scrollToSection('tiendas')}>Tiendas</li>
            <li className="cursor-pointer"
              onClick={() => scrollToSection('beneficio')}
            >
              Beneficios
            </li>
          </ul>
          <button className="cargar_mas  font-bold px-3 py-1  w-full btn-agre text-white rounded-md">
            Whatsapp
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderLanding;
