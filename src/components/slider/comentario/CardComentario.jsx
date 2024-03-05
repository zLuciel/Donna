import Image from 'next/image'
import React from 'react'
import Photo from "@/assets/comentario.webp"
const CardComentario = () => {
  return (
    <div  className="mx-auto flex items-center justify-center gap-5" >
       
       
        <div >
        <h2 className='text-orange text-sm mb-2'>Luis Arcangel Kalifa</h2>
           <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem inventore sequi qui doloremque maiores eligendi vel quisquam iure ut eos magni atque ratione, a officia, deserunt ipsum consectetur! Praesentium.</p>
        </div>
       
    </div>
  )
}

export default CardComentario