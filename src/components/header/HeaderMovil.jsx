import Link from "next/link";
import React from "react";
import ModalCategoria from "./ModalCategoria";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import List from "../svg/List";
import User from "../svg/User";
import Cart from "../svg/Cart";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser,FaShoppingCart } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
const HeaderMovil = ({ view, setView }) => {
  return (
    <div className="lg:container  mx-auto py-1  px-5  header-movil ">
      <div className="flex justify-between">
        {/* cuenta y categoria */}
        <div className="flex items-center gap-2">
          <span className="flex gap-2 flex-col justify-center items-center ">
            <FaUser className="text-xl" />{" "}
            <p className="prueba text-xs mt-1 leading-3">Mi cuenta</p>
          </span>
          <div className="categoria">
            <button
              className="flex gap-2 text-xs justify-center flex gap-2 items-center"
              onClick={() => setView(true)}
            >
              Categorias <IoIosArrowDown />
            </button>
            <ModalCategoria view={view} setView={setView} />
          </div>
        </div>
        {/* logo */}
        <Link href="/">
          <Image
            className="logo-header"
            src="/DonnaMovil.png"
            width={90}
            height={90}
            alt="Donna"
          />
        </Link>
        {/* lista y cart */}
        <div className="cuenta-header flex gap-7 items-center ">
          <span className="flex gap-2 flex-col justify-center items-center">
            <FaClipboardList className="text-xl" />{" "}
            <p className="prueba text-xs mt-1 leading-3">Mi Lista</p>
          </span>
          <span className="flex gap-2 flex-col justify-center items-center">
            <FaShoppingCart />{" "}
            <p className="text-xs text-[#2E2E2E] mt-1 font-bold leading-3">
              S/40.00
            </p>
          </span>
        </div>
      </div>

      <span className="search-header flex w-full  rounded-3xl overflow-hidden">
        <input
          className="w-full outline-none px-3 py-2 "
          type="text"
          placeholder="Dinos que buscas y te mostraremos las mejores ofertas"
        />
        <span className="bg-slate-gray px-4 flex justify-center items-center">
          <IoSearch />
        </span>
      </span>

    </div>
  );
};

export default HeaderMovil;
