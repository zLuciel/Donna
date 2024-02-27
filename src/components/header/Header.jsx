"use client"
import React, { useState } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaUser,FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import ModalCategoria from "./ModalCategoria";
import { FaClipboardList } from "react-icons/fa6";
const Header = () => {
  const [view, setView] = useState(false);
  return (
    <header className="w-screen bg-white sticky top-0 z-10 ">
      {/* sub cabecera */}
      <div className=" bg-zinc-950 px-10 hidden  lg:block md:block ">
        <div className="lg:container lg:mx-auto flex justify-between text-white  p-2">
          <h4 className="leading-5 text-xs">Atenciòn al cliente: (01) 345 - 234</h4>
          <span>
            <ul className="flex gap-10">
              <li className="leading-5 text-xs">venta telefónica</li>
              <li className="leading-5 text-xs"><Link href="/productos">productos</Link></li>
              <li className="leading-5 text-xs"><Link href="/promociones">promociones</Link></li>
              <li className="leading-5 text-xs"><Link href="/tiendas">tiendas</Link></li>  
              <li className="leading-5 text-xs">centro de ayuda</li>
            </ul>
          </span>
        </div>
      </div>

      <div className="lg:container  mx-auto py-1 sm:px-10 md:px-10 lg:px-20 px-5  header-grid ">
      <Link href="/"><Image className="logo-header" src="/LogoDonna.png" width={90} height={90} alt="Donna" /></Link>
        <div className="categoria">
         <button className="flex gap-2 text-sm justify-cent flex gap-2 items-center" onClick={()=> setView(true)}>Categorias <IoIosArrowDown /></button>
         <ModalCategoria view={view} setView={setView} />
        </div>
        <span className="search-header flex w-full  rounded-3xl overflow-hidden">
          <input
            className="w-full outline-none px-3 py-2 "
            type="text"
            placeholder="Dinos que buscas y te mostraremos las mejores ofertas"
          />
         <span className="bg-slate-gray px-4 flex justify-center items-center"><IoSearch /></span>
        </span>
        <div className="cuenta-header flex gap-5 items-center ">
        <span className="flex gap-2 flex-col justify-center items-center"><FaClipboardList className="text-xl" /> <p className="prueba text-sm mt-1 leading-3">Mi Lista</p></span>
          <span className="flex gap-2 flex-col justify-center items-center "><FaUser className="text-xl" /> <p className="prueba text-sm mt-1 leading-3">Mi cuenta</p></span>
          <span className="flex gap-2 flex-col justify-center items-center"><FaShoppingCart className="text-xl"/> <p className="text-sm mt-1 font-bold leading-3">S/40.00</p></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
