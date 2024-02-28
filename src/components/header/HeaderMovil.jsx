import Link from 'next/link'
import React from 'react'
import ModalCategoria from './ModalCategoria'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import List from '../svg/List';
import User from '../svg/User';
import Cart from '../svg/Cart';
import { IoIosArrowDown } from "react-icons/io";
const HeaderMovil = ({view,setView}) => {
  return (
    <div className="lg:container  mx-auto py-1 sm:px-10 md:px-10 lg:px-20 px-5  header-movil ">
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
        <div className="cuenta-header flex gap-7 items-center ">
        <span className="flex gap-2 flex-col justify-center items-center"><List className="text-xl" /> <p className="prueba text-xs mt-1 leading-3">Mi Lista</p></span>
          <span className="flex gap-2 flex-col justify-center items-center "><User className="text-xl" /> <p className="prueba text-xs mt-1 leading-3">Mi cuenta</p></span>
          <span className="flex gap-2 flex-col justify-center items-center"><Cart/> <p className="text-xs text-[#2E2E2E] mt-1 font-bold leading-3">S/40.00</p></span>
        </div>
      </div>
  )
}

export default HeaderMovil