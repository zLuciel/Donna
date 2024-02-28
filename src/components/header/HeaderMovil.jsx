import Link from "next/link";
import React from "react";
import ModalCategoria from "./ModalCategoria";
import Image from "next/image";

import { Burger } from '@mantine/core';
import { IoIosArrowDown } from "react-icons/io";
import { FaUser,FaShoppingCart } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import Search from "./Search";

const HeaderMovil = ({ view, setView }) => {

  return (
    <div className="lg:container  mx-auto py-1  px-5  header-movil ">
      <div className="flex justify-between">
        {/* cuenta y categoria */}
        <div className="flex items-center gap-2">
          <span className="flex gap-2 flex-col justify-center items-center ">
            <FaUser className="text-xl" />
          </span>
          <div className="categoria">
              <Burger size="sm"  onClick={() => setView(true)} aria-label="Toggle navigation" />
    
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
            <Search/>
            <FaClipboardList className="text-xl" />{" "}
            <FaShoppingCart />{" "}
        </div>

      </div>
    </div>
  );
};

export default HeaderMovil;
