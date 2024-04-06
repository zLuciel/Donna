"use client";
import React from "react";
import Image from "next/image";
import { useProduct } from "@/app/provider/ProviderContext";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Burger } from "@mantine/core";
import SubHeaderLading from "./SubHeaderLading";

const HeaderLandingResponsive = () => {
  const { scrollToSection } = useProduct();
  const [opened, { open, close }] = useDisclosure(false);
 
  
  function handleDinamic (section){
    scrollToSection(section)
    close()
  }

  return (
    <>
    <SubHeaderLading />
      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <header className="flex  justify-center items-center header-responsive">
          <div className="md:container h-full mx-auto flex flex-col gap-4 justify-center items-center px-20 py-1">
            <Image src={"/DonnaMovil.png"} alt="Donna" width={70} height={70} />
            <div className="flex flex-col gap-5 items-center justify-center">
              <ul className="flex gap-8 flex-col text-sm">
                <li
                  className="cursor-pointer"
                  onClick={() =>handleDinamic("nosotros")}
                >
                  Nosotros
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleDinamic("valores")}
                >
                  Valores
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleDinamic("productos")}
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
      </Modal>
      <div className=" px-2 flex justify-between items-center">
        <Image src={"/DonnaMovil.png"} alt="Donna" width={70} height={70} />
        <Burger  size="sm" color="red" onClick={open}  aria-label="Toggle navigation" />
      </div>
      
    </>
  );
};

export default HeaderLandingResponsive;
