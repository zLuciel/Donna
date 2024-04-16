"use client"
import React from "react";
import SubHeaderLading from "./SubHeaderLading";
import Image from "next/image";
import { useProduct } from "@/app/provider/ProviderContext";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeaderLanding = () => {
  const { scrollToSection } = useProduct();
  const router = useRouter()
  const handleHash =(section)=>{
    router.push("/")
    scrollToSection(section)
  }
  return (
    <header className="header-container bg-white">
      <SubHeaderLading />
      <div className="md:container mx-auto flex justify-between items-center lg:px-6 py-1">
       <Link href={"/"} ><Image src={"/DonnaMovil.png"} alt="Donna" width={70} height={70} /></Link>
        <div className="flex gap-5 items-center">
          <ul className="flex gap-8 text-sm">
            <li
              className="cursor-pointer"
              onClick={() => handleHash("nosotros")}
            >
              Nosotros
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleHash("valores")}
            >
              Valores
            </li>
            <li
              className="cursor-pointer"
              onClick={() => router.push("/productos")}
            >
              Productos
            </li>
          </ul>
          <Link
            href="https://wa.link/njs0op"
            target="_blank"
            className="cargar_mas flex gap-2 items-center text-sm font-bold px-3 py-1  w-full btn-agre text-white rounded-md"
          >
            <IoLogoWhatsapp className="" /> Whatsapp
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderLanding;
