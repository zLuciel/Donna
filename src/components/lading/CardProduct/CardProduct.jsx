import Image from "next/image";
import React from "react";

const CardProduct = ({ image, name, price, regular_price, id, categories }) => {
  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  return (
    <div className="relative card-product grid-card-row ">
      <div className="image-product mb-4 relative">
        <span className=" rounded-tr-xl left-0 text-xs py-1 rounded-br-xl absolute des-gradient text-white font-semibold px-3 left-0">
          {" "}
          - 8%
        </span>
        <div className="container-img-card">
          <Image
            fill
            src={image.src}
            sizes="(min-width: 808px) 50vw, 100vw"
            alt="Donna"
          />
        </div>
      </div>

      <div className="px-3 text-card">
        <span className="title-card-landing ">
          <p className="roboto_bold uppercase text-sm">{categories}</p>
          <h3 className="text-sm roboto_bold title-product-lading text-[#565656]">
            {capitalizeFirstLetter(name)}
          </h3>
        </span>

        <div className="mb-1 price-lading-card">
          <span className="w-full text-orange text-sm/[22px] flex justify-between  mb-2">
            <p className="roboto_Extrabold">Precio online</p>{" "}
            <p className="roboto_Extrabold">S/{price}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;