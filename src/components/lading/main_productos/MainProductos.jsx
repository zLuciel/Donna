import Image from "next/image";
import React from "react";
import Portada from "@/assets/BANNER-PRINCIPAL-DOONA-5.webp"
const MainProductos = () => {
  return (
    <main className="relative portada-main text-white w-screen">
      <Image
        alt="Mountains"
        src={Portada}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </main>
  );
};

export default MainProductos;
