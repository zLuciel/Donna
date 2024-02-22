import React from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser,FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-screen bg-white sticky top-0 z-10 ">
      {/* sub cabecera */}
      <div className=" bg-zinc-950 px-10">
        <div className="lg:container lg:mx-auto flex justify-between text-white p-2">
          <h4 className="leading-5 text-sm/[5px]">Atenciòn al cliente: (01) 345 - 234</h4>
          <span>
            <ul className="flex gap-10">
              <li className="leading-5 text-sm/[5px]">venta telèfonica</li>
              <li className="leading-5 text-sm/[5px]">promociones</li>
              <li className="leading-5 text-sm/[5px]">tiendas</li>
              <li className="leading-5 text-sm/[5px]">centro de ayuda</li>
            </ul>
          </span>
        </div>
      </div>
      {/* cabezera principal */}
      <div className="lg:container lg:mx-auto py-4 px-10  header-grid ">
        <span><Image className="logo-header" src="/logo.png" width={100} height={100} alt="Donna" /></span>
        <div className="categoria">
          <span className="flex gap-2 justify-cent flex gap-2 items-center">Categorias <IoIosArrowDown /></span>
          <nav>
            <ul>
              <li></li>
            </ul>
          </nav>
        </div>
        <span className="search-header flex w-full rounded-3xl overflow-hidden">
          <input
            className="w-full outline-none px-3 py-1 "
            type="text"
            placeholder="Dinos que buscas y te mostraremos las mejores ofertas"
          />
         <span className="bg-slate-gray px-4 flex justify-center items-center"><IoSearch /></span>
        </span>
        <div className="cuenta-header flex gap-2 items-center ">
          <span className="flex gap-2 justify-center items-center "><FaUser className="text-xl" /> <p className="prueba text-sm/[5px] mt-1">Mi cuenta</p></span>
          <span className="flex gap-2 justify-center items-center"><FaShoppingCart className="text-xl"/> <p className="text-sm/[5px] mt-1">S/40.00</p></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
