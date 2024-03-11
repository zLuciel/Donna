import Image from "next/image";
import React from "react";

const Card = ({ image,name,price,regular_price }) => {
  return (
    <div className="relative card-product flex flex-col justify-start ">
      <div className="image-product mb-4 relative">
        <span className=" rounded-tr-xl left-0 text-xs py-1 rounded-br-xl absolute des-gradient text-white font-semibold px-3 left-0"> - 8%</span>
       <div className="container-img-card">
       <Image fill src={image.src}  sizes="(min-width: 808px) 50vw, 100vw" alt="Donna" />
       </div>
      </div>

      <div className="px-3">
        <span className="mb-5">
          <h3 className="mb-6 leading-5  text-sm text-semibold">
            {name}
          </h3>
        </span>

        <div className="mb-1">
          <p className="text-orange text-sm/[22px] font-extrabold mb-2">
            Precio online S/{price}
          </p>
          <p className="text-xs">
            Precio regular <u className="line-through">S/{regular_price} </u>
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
