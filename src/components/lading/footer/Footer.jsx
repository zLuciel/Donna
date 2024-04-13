import Image from "next/image";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e9e9e9] py-1  text-sm">
      <div className="lg:container mx-auto lg:px-6 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image
          src="/DonnaMovil.png"
          alt="Picture of the author"
          width={70}
          height={10}

        />
        <p className="text-xs">Copyright © 2024 Mercado Doona</p>
      </div>
      <ul className="flex gap-5">
        <li className="text-2xl text-[#3b3b3bef] ">
          <BsInstagram />
        </li>
        <li className="text-2xl text-[#3b3b3bef]">
          <FaFacebook />
        </li>
        <li className="text-2xl text-[#3b3b3bef]">
          <FaTiktok />
        </li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
