import Image from 'next/image'
import React from 'react'

const CardProduct = ({ image,name,price,regular_price,id,categories }) => {
    function formatoPrice(price){
        const formatPrice = new Intl.NumberFormat("de-DE", {currency: "PEN" }).format(price);
        const formatDecimal = formatPrice.replace(".", ",");
        return formatDecimal;
      }
  return (
    <div className="relative card-product grid-card-row ">
    <div className="image-product mb-4 relative">
      <span className=" rounded-tr-xl left-0 text-xs py-1 rounded-br-xl absolute des-gradient text-white font-semibold px-3 left-0"> - 8%</span>
     <div className="container-img-card">
     <Image fill src={image.src}  sizes="(min-width: 808px) 50vw, 100vw" alt="Donna" />
     </div>
    </div>

    <div className="px-3 text-card" >
      <span className="title-card-landing">
        <p>{categories}</p>
        <h3 className="text-sm roboto_bold text-[#565656] ">
          {name} 
        </h3>
      </span>

      <div className="mb-1 price-lading-card">
        <span className="text-orange text-sm/[22px]  roboto_Extrabold flex justify-between  mb-2">
         <p>Precio online</p>  <p>S/{formatoPrice(price)}.00</p>
        </span>
      </div>
    </div>
  </div>
  )
}

export default CardProduct
