import React from "react";
import SubHeaderLading from "./SubHeaderLading";
import Image from "next/image";
import { Button } from "@mantine/core";

const HeaderLanding = () => {
  return (
    <header className="">
      <SubHeaderLading />
      <div className="md:container mx-auto flex justify-between items-center px-20 py-1">

        <div className="flex justify-center items-center gap-6">
          <Image src={"/DonnaMovil.png"} alt="Donna" width={70} height={70} />
        </div>
       <div className="flex gap-5 items-center">
       <ul className="flex gap-8 text-sm">
            <li>Productos</li>
            <li>Centro ayuda</li>
            <li>Clientes</li>
          </ul>
          <Button variant="filled" color="#ff4d00">Whatsapp</Button>
       </div>
      
      </div>
    </header>
  );
};

export default HeaderLanding;
