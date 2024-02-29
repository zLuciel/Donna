import Link from "next/link";
import React from "react";
import ModalCategoria from "./ModalCategoria";
import Image from "next/image";
import Search from "./Search";
import Cart from "../svg/Cart";
import List from "../svg/List";
import User from "../svg/User";
import Hamburger from "../svg/Hamburger";

const HeaderMovil = ({ view, setView }) => {

  return (
    <div className="lg:container  mx-auto py-3  px-6  header-movil ">
      <div className="flex justify-between">
        {/* cuenta y categoria */}
        <div className="flex items-center gap-2">
          <span className="flex gap-2 flex-col justify-center items-center ">
            <User className="text-3xl" />
          </span>
          <div className="categoria">
            <Hamburger onClick={() => setView(true)}/>
    
            <ModalCategoria view={view} setView={setView} />
          </div>
        </div>
        {/* logo */}
        <Link href="/">
          <Image
            className="logo-header"
            src="/DonnaMovil.png"
            width={70}
            height={70}
            alt="Donna"
          />
        </Link>
        {/* lista y cart */}
        <div className="cuenta-header flex gap-5 items-center ">
            <List className="text-xl" />{" "}
            <Cart />
        </div>
    
      </div>

      <span className="search-header flex w-full  rounded-3xl overflow-hidden">
          <input
            className="w-full outline-none px-3 py-1 "
            type="text"
            placeholder="Dinos que buscas y te mostraremos las mejores ofertas"
          />
         <span className="px-4 flex justify-center items-center"><Search /></span>
        </span>
    </div>
  );
};

export default HeaderMovil;
