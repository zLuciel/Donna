import Image from 'next/image'
import React from 'react'
import product from "@/assets/categoria/carne.png"
import { MdDeleteForever } from "react-icons/md";
const ItemsCart = ({title,quantity,id_product,price,price_regular,image}) => {
  return (
    <div className='flex justify-between items-cart p-4  container-items-cart'>
     <div className='flex gap-4 justify-start items-center'>
     <span>
            <Image src={product} width={100} heigth={100} alt="producto" />
        </span>

        <div>
           <p className='text-sm mb-1'>{title}</p>

           <div className='flex items-center gap-2'>
            <span className='numberItems flex justify-center items-center'>2</span>
            <span className='flex flex-col gap-1'>
                <button className='bg-[#414141] text-white rest-btn'>+</button>
                <button className='bg-[#9B9B9B] text-white mas-btn'>-</button>
            </span>
             <span>
                <h3 style={{color:"red"}}>S/ 23.00</h3>
                <p className='text-xs'>S/ 80.00</p>
             </span>
           </div>

        </div>
     </div>
     <MdDeleteForever className="text-lg" />
    </div>
  )
}

export default ItemsCart