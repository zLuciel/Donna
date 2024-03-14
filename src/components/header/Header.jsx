"use client";
import React, {  useEffect, useState } from "react";
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
const Header = () => {
  const [view, setView] = useState(false);
  const [isShadow, setIsShadow] = useState(false);
  const [viewCart, setCartView] = useState(false);
  const { dataProduct, setDataProduct,viewScroll, setViewScroll } = useProduct();

  useEffect(() => {
    const handleScroll = () => {
      const showShadow = window.scrollY > 0;
      if (showShadow !== isShadow) {
        setIsShadow(showShadow);
        
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShadow]);

  const getTotalPrice = () => {
    let totalPrice = 0;
    dataProduct.forEach((product) => {
      const price = parseFloat(product.price) || 0;
      const quantity = product.quantity || 1;
      totalPrice += price * quantity;
    });
    //agregar formato moneada style: 'currency',
    const formPen = new Intl.NumberFormat("de-DE", { currency: "PEN" }).format(
      totalPrice
    );
    return formPen.replace(".", ",");
  };
  const scrollHiddel = ()=>{
    setCartView(true)
    document.body.classList = "notviewScroll" 
  }
  const matches = useMediaQuery("(min-width: 917px)");

  return (
    <header
      className={`w-screen bg-white sticky top-0 z-10 ${
        isShadow ? "shadow-header" : ""
      }`}
    >
      {/* sub cabecera */}
      <div className=" bg-zinc-950 px-10 hidden  lg:block md:block ">
        <div className="lg:container lg:mx-auto flex justify-between text-white  p-2">
          <h4 className="leading-5 text-xs">
            Atención al cliente: (01) 345 - 234
          </h4>
          <span>
            <ul className="flex gap-10">
              <li className="leading-5 text-xs">venta telefónica</li>
              <li className="leading-5 text-xs">
                <Link href="/productos">productos</Link>
              </li>
              <li className="leading-5 text-xs">
                <Link href="/promociones">promociones</Link>
              </li>
              <li className="leading-5 text-xs">
                <Link href="/tiendas">tiendas</Link>
              </li>
              <li className="leading-5 text-xs">centro de ayuda</li>
            </ul>
          </span>
        </div>
      </div>

      {matches && (
        <div className="lg:container  mx-auto  sm:px-10 md:px-10 lg:px-20 px-5  header-grid ">
          <Link href="/">
            <Image
              className="logo-header"
              src="/LogoDonna.png"
              width={90}
              height={90}
              alt="Donna"
            />
          </Link>
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
            <span className="flex gap-2 flex-col justify-center items-center">
              <List className="text-xl" />{" "}
              <p className="prueba text-xs mt-1 leading-3">Mi Lista</p>
            </span>
            <span className="flex gap-2 flex-col justify-center items-center ">
              <User className="text-xl" />{" "}
              <p className="prueba text-xs mt-1 leading-3">Mi cuenta</p>
            </span>
            <span
              onClick={scrollHiddel}
              className="flex cursor-pointer gap-2 flex-col justify-center items-center"
            >
              <span className="relative" onClick={()=>setViewScroll(true)}>
                <b className="absolute count-cart">{dataProduct.length}</b>{" "}
                <Cart />
              </span>{" "}
              <p className="text-xs text-[#2E2E2E] mt-1 font-bold leading-3">
                S/{getTotalPrice()}.00{" "}
              </p>
            </span>
            <CartView
              getTotalPrice={getTotalPrice}
              addedProducts={dataProduct}
              setAddedProducts={setDataProduct}
              viewCartw={viewCart}
              setCartView={setCartView}
              setViewScroll={setViewScroll}
            />
          </div>
        </div>
      )}
      {!matches && <HeaderMovil scrollHiddel={scrollHiddel} view={view} setView={setView} getTotalPrice={getTotalPrice}
              dataProduct={dataProduct}
              setDataProduct={setDataProduct}
              viewCartw={viewCart}
              setCartView={setCartView}
              setViewScroll={setViewScroll}/>}
    </header>
  );
};

export default Header;
