import Image from "next/image";
import React from "react";
import Yape from "@/assets/footer/yape.png"
import Plin from "@/assets/footer/plin.png"
import Apple from "@/assets/footer/apple.png"
import Android from "@/assets/footer/android.png"
const Footer = () => {
  return (
    <footer className="mx-auto ">
      <div className="lg:container mx-auto py-10 px-20   grid gap-20 md:grid-cols-3 lg:grid-cols-4 " >
      <div>
        <Image
        className="mb-4"
          src="/logo.png"
          alt="Picture of the author"
          width={130}
          height={130}
        />
        <p className="leading-7 text-sm/[5px]">
          Nuestra tienda online Ripley.com.pe tiene lo que necesitas de tus
          marcas favoritas. Mira todo nuestro catálogo y encuentra lo que te
          hace falta. Llegamos a todo el Perú.
        </p>
      </div>
      {/* Politicas */}
      <div className="flex flex-col gap-4">
       <div>
       <h3 className="font-bold mb-3">Políticas</h3>
        <ul>
            <li className="leading-7 text-sm/[5px]">Política de envío</li>
            <li className="leading-7 text-sm/[5px]">Política de privacidad</li>
            <li className="leading-7 text-sm/[5px]">Política de reembolso</li>
            <li className="leading-7 text-sm/[5px]">Términos del servicio</li>
        </ul>
       </div>
       <div>
        <h3 className="font-bold mb-3">Métodos de pago</h3>
        <span className="flex gap-4">
        <Image
          src={Yape}
          alt="Picture of the author"
          width={40}
          height={40}
        />
         <Image
          src={Plin}
          alt="Picture of the author"
          width={40}
          height={40}
        />
        </span>
       </div>
      </div>
      {/* Conoceme */}
      <div className="flex gap-3 flex-col">
       <div>
       <h3 className="font-bold mb-3">Conoceme</h3>
        <ul>
            <li className="leading-7 text-sm/[5px]">Nuestras tiendas</li>
            <li className="leading-7 text-sm/[5px]">Promociones</li>
            <li className="leading-7 text-sm/[5px]">Ventas telefonicas</li>
        </ul>
       </div>
       <div>
       <h3 className="font-bold mb-3">Descarga Nuestra App</h3>
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
        </span>
       </div>
      </div>
      {/* Contactame */}
      <div>
        <h3 className="font-bold mb-3">Contactame</h3>
        <ul>
            <li className="leading-7 text-sm/[5px]">(01) 345 - 4567</li>
            <li className="leading-7 text-sm/[5px]">informes@bill.com.pe</li>
        </ul>
      </div>
      </div>
      <span className="bg-black w-full text-white flex justify-center  py-3 px-20">Copyright 2024 - Bill. Todos los derechos reservados.</span>
    </footer>
  );
};

export default Footer;
