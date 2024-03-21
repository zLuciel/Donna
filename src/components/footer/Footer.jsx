"use client"
import Image from "next/image";
import React from "react";
import metodoPago from "@/assets/footer/metodos-pago-footer.png"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Facebbok from "../svg/Facebbok";
import Instagram from "../svg/Instagram";
import Tiktok from "../svg/Tiktok";
import Youtube from "../svg/Youtube";
const Footer = () => {
  const pathname = usePathname()
  return (
    <footer className="mx-auto ">
      {pathname !== "/carrito-pago" &&<>
      <div className="lg:container mx-auto py-10 sm:px-10 lg:px-20 px-10   grid gap-12 lg:gap-20 md:grid-cols-3 lg:grid-cols-4 " >
      <div>
        <Image
        className="mb-4"
          src="/LogoDonna.png"
          alt="Picture of the author"
          width={130}
          height={130}
        />
        <p className="text-[#6F6F6F] leading-7 text-xs roboto_regular">
          Nuestra tienda online Ripley.com.pe tiene lo que necesitas de tus
          marcas favoritas. Mira todo nuestro catálogo y encuentra lo que te
          hace falta. Llegamos a todo el Perú.
        </p>
      </div>
      {/* Politicas */}
      <div className="flex flex-col gap-4">
       <div>
       <h3 className="roboto_bold mb-3">Políticas</h3>
        <ul>
            <li className="leading-7 text-xs"><Link href="/politicas">Política de envío</Link></li>
            <li className="leading-7 text-xs"><Link href="/politicas">Política de privacidad</Link></li>
            <li className="leading-7 text-xs"><Link href="/politicas">Política de reembolso</Link></li>
            <li className="leading-7 text-xs"><Link href="/politicas">Términos del servicio</Link></li>
        </ul>
       </div>
       <div>
        <h3 className="mb-3 roboto_bold">Métodos de pago</h3>
        <span className="flex gap-4">
        <Image
          src={metodoPago}
          alt="Picture of the author"
          width={840}
          height={440}
        />
        </span>
       </div>
      </div>
      {/* Conoceme */}
      <div className="flex gap-3 flex-col">
       <div>
       <h3 className=" mb-3 roboto_bold">Conoceme</h3>
        <ul>
            <li className="leading-7 text-xs">Nuestras tiendas</li>
            <li className="leading-7 text-xs">Promociones</li>
            <li className="leading-7 text-xs">Ventas telefonicas</li>
        </ul>
       </div>
       <div>
       {/* <h3 className="font-bold mb-3">Descarga Nuestra App</h3>
       <span className="flex gap-4">
        <Image
          src={Apple}
          alt="Picture of the author"
          width={100}
          height={40}
        />
         <Image
          src={Android}
          alt="Picture of the author"
          width={100}
          height={40}
        />
        </span> */}
       </div>
      </div>
      {/* Contactame */}
      <div>
        <h3 className="roboto_bold mb-3">Contactame</h3>
        <ul>
            <li className="leading-7 text-xs">(01) 345 - 4567</li>
            <li className="leading-7 text-xs">informes@bill.com.pe</li>
            <li className="leading-7 text-xs">Jr Leoncio Prado 458, Surquillo - Lima</li>
            <li className="flex gap-3 mt-3">
              <Facebbok/>
              <Instagram/>
              <Tiktok/>
              <Youtube/>
            </li>
        </ul>
      </div>
      </div>
      </>}
      <span className="bg-black roboto_bold w-full text-white flex justify-center text-xs py-3 px-20">Copyright 2024 - Bill. Todos los derechos reservados.</span>
    </footer>
  );
};

export default Footer;
