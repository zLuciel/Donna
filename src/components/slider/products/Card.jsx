import Image from "next/image";
import React from "react";

const Card = ({ image }) => {
  return (
    <div className="relative card-product flex flex-col justify-start ">
      <div className="image-product mb-4">
        <span className=" rounded-tr-xl left-0 text-xs py-1 rounded-br-xl absolute des-gradient text-white font-semibold px-3 left-0"> - 8%</span>
        <Image src={image} sizes="(min-width: 808px) 50vw, 100vw" alt="Donna" />
      </div>

      <div className="">
        <span className="mb-5">
          <h3 className="mb-6 leading-5  text-sm text-semibold">
            Aceite Vegetal Primor 700ml
          </h3>
        </span>

        <div className="mb-1">
          <p className="text-orange text-sm/[22px] font-extrabold mb-2">
            Precio online S/40.00
          </p>
          <p className="text-xs">
            Precio regular <u className="line-through">S/ 80.00</u>
          </p>
        </div>
        <button className="mt-4 font-bold p-1  w-full btn-agre text-white rounded-2xl">
          AGREGAR
        </button>
      </div>
    </div>
  );
};

export default Card;
