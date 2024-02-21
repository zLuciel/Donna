import Image from 'next/image'
import React from 'react'

const Card = ({image}) => {
  return (
    <div className="card-product flex flex-col justify-start ">
         <div className="relative image-product">
            <Image src={image}  sizes="(min-width: 808px) 50vw, 100vw"
           alt="Donna" />
        </div>
       <div className="">
       <h3 className="mb-2">Aceite Vegetal Primor 700ml</h3>
        <div className="mb-1">
        <p className="text-red-600 text-sm/[22px] font-extrabold mb-1">Precio online S/40.00</p>
        <p className="text-sm/[15px]">Precio regular <u className="line-through">S/ 80.00</u></p>
        </div>
        <button className="mt-5 font-bold p-1 bg-red-600 w-full text-white rounded-2xl">AGREGAR</button>
       </div>
    </div>
  )
}

export default Card