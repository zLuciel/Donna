"use client";
import React, { useRef, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import ModalCategoria from "./ModalCategoria";

import Cart from "../svg/Cart";
import List from "../svg/List";
import User from "../svg/User";
import HeaderMovil from "./HeaderMovil";
import CartView from "./CartView";
import { useProduct } from "@/app/provider/ProviderContext";
import { usePathname } from "next/navigation";
import useShadowScrollHook from "@/hooks/useShadowScrollHook";
import LoginHeader from "./LoginHeader";
import useClickOutside from "@/hooks/useClickOutside";
import SubCabezera from "./SubCabezera";
import Registre from "./Registre";


const Header = () => {
  const [view, setView] = useState(false);
  const [viewCart, setCartView] = useState(false);
  const { isShadow } = useShadowScrollHook(false);
  const { dataProduct, setDataProduct, price } = useProduct();
  const pathname = usePathname();
  const [viewLogin,setViewLogin] = useState(false)
  const [classHidden,setClassHidden] = useState(false)

  const scrollHiddel = () => {
    setCartView(true);
    document.body.classList = "notviewScroll";
  };
  const loginRef = useRef();

  const matches = useMediaQuery("(min-width: 917px)");
  
  useClickOutside(loginRef, () => {
    setViewLogin(false);
  });
  
 

  return (
    <header
      className={`w-screen bg-white sticky top-0 z-10 ${
        isShadow ? "shadow-header" : ""
      }`}
    >
      <SubCabezera/>
      {matches && (
        <div
          className={`lg:container  mx-auto  sm:px-10 md:px-10 lg:px-20 px-5 ${
            pathname == "/carrito-pago"
              ? "flex justify-between items-center"
              : "header-grid"
          }  `}
        >
          <Link href="/">
            <Image
              className="logo-header"
              src="/DonnaMovil.png"
              width={90}
              height={90}
              alt="Donna"
            />
          </Link>
          {pathname == "/carrito-pago" && (
            <h3 className="text-black text-2xl">
              <b>Finalizar Compra</b>
            </h3>
          )}
          {pathname !== "/carrito-pago" && (
            <>
              <div className="categoria">
                <button
                  className="flex gap-2 text-sm justify-cent flex gap-2 items-center"
                  onClick={() => setView(true)}
                >
                  Categorias <IoIosArrowDown />
                </button>
                <ModalCategoria view={view} setView={setView} />
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
              <div className="cuenta-header flex gap-7 items-center ">
                <span className="flex cursor-pointer relative  gap-1 flex-col justify-center items-center">
                  <List className="text-xl" />{" "}
                  <p className="text-[#2e2e2e] prueba text-xs mt-1 leading-3">Mi Lista</p>
                </span>
                <span ref={loginRef} onClick={() => setViewLogin(true)} className=" cursor-pointer relative flex gap-1 flex-col justify-center items-center ">
                  <User className="text-xl" />{" "}
                  <p className="text-[#2e2e2e] text-xs mt-1 leading-3">Mi cuenta</p>
                  {viewLogin === !classHidden && <LoginHeader setClassHidden={setClassHidden} />}
                  {classHidden && <Registre setClassHidden={setClassHidden} />}
                </span>
                <span
                  onClick={scrollHiddel}
                  className="flex cursor-pointer gap-1 flex-col justify-center items-center"
                >
                  <span className="relative">
                    <b className="absolute count-cart">{dataProduct.length}</b>{" "}
                    <Cart />
                  </span>{" "}
                  <p className="text-xs text-[#2E2E2E] mt-1 font-bold leading-3">
                    S/{price}.00{" "}
                  </p>
                </span>
                <CartView
                  getTotalPrice={price}
                  addedProducts={dataProduct}
                  setAddedProducts={setDataProduct}
                  viewCartw={viewCart}
                  setCartView={setCartView}
                />
              </div>
            </>
          )}
        </div>
      )}
      {!matches && (
        <HeaderMovil
          scrollHiddel={scrollHiddel}
          view={view}
          setView={setView}
          getTotalPrice={price}
          dataProduct={dataProduct}
          setDataProduct={setDataProduct}
          viewCartw={viewCart}
          setCartView={setCartView}
        />
      )}
    </header>
  );
};

export default Header;
