import React from "react";
import Image from "next/image";
import Verdura from "@/assets/VERDURAS.png";
import Wave from "@/assets/wave.png";
import WaveTop from "@/assets/wave-top.png";
import Link from "next/link";
const Main = () => {
  return (
    <main className="portada-main py-20 w-screen relative">
      <div className="absolute bottom-0 w-full" style={{ height: "300px" }}>
        <Image src={Wave} sizes="100vw" fill alt="wave" />
      </div>
      <div className="absolute top-0 w-full" style={{ height: "200px" }}>
        <Image src={WaveTop} sizes="100vw" fill alt="wave" />
      </div>
      <div className="xl:container  lg:px-6 px-15 mx-auto  grid gap-10 main-grid place-self-center items-center h-portada ">
        {/* col 1 */}
        <div className="flex flex-col gap-8 z-[1] ">
          <h1 className="text-3xl 2xl:text-8xl lg:text-6xl title-nunito text-[#ff4d00] ">
            ! TODO LO QUE NECESITAS ¡
          </h1>
          <p className="nunito-sub-title sub-title-main xl:text-2xl lg:text-xl">
            Delivery gratis a tu casa
          </p>
          <p className="text-md">Somos tu tienda de confianza, ofreciendo los precios más competitivos y una amplia selección <br /> de productos para tu hogar, siempre a tu alcance</p>
          <div className="flex gap-7">
            <Link
              href="https://wa.link/njs0op"
              className="conocer-btn text-md btn-default btn-main  font-semibold"
            >
              Quiero conocer màs
            </Link>
            <Link
              href="/productos"
              type="button"
              style={{ border: "1px solid #696969" }}
              className="btn-main text-md btn-default font-semibold"
            >
              Ver productos
            </Link>
          </div>
        </div>
        {/* col 2 */}
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <Image
            src={Verdura}
            className="portada"
            alt="Doona Portada"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "contain", // cover, contain, none
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
