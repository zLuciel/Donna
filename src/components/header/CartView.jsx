"use client";
import { useEffect, useRef, useState } from "react";
import React from 'react'
import ItemsCart from './ItemsCart'
import { IoClose } from "react-icons/io5";
const CartView = ({viewCartw,setCartView}) => {
        const contenedorRef = useRef();
        
        useEffect(() => {
      
          function manejarClicFuera(evento) {
            if (contenedorRef.current && !contenedorRef.current.contains(evento.target)) {
              if (!evento.target.matches('.modal-cart-bg')) {
                setCartView(false)
                }
            }
          }
      
          // Agregar el listener de eventos cuando el componente se monta
          document.addEventListener('mousedown', manejarClicFuera);
      
          // Limpiar el listener de eventos cuando el componente se desmonta
          return () => {
            document.removeEventListener('mousedown', manejarClicFuera);
          };
        }, [setCartView]);
      

  return (
    <>
    <div
      className={viewCartw ? "absolute modal-cart " : "hidden"}
    >
        
      <div  ref={contenedorRef} className="modal-cart-bg bg-[#FBFBFB] grid-modal-cart relative">
         
        <div className='py-1'>
            <span>
            <button onClick={()=>setCartView(false)} className="text-2xl p-2"><IoClose /></button>   
             <h2 className='mb-2 text-2xl text-center'>Carrito</h2>
            </span>
        
        <p className='text-center mb-2'>Tines 4 item</p>
        </div>

       

        <div className='flex gap-4 flex-col scroll-items px-6 '>
        <ItemsCart title={"Leche Gloria Ligth 500g"} image={""} price={""} price_regular={""} />
        <ItemsCart title={"Leche Gloria Ligth 500g"} image={""} price={""} price_regular={""} />
        <ItemsCart title={"Leche Gloria Ligth 500g"} image={""} price={""} price_regular={""} />
        <ItemsCart title={"Leche Gloria Ligth 500g"} image={""} price={""} price_regular={""} />
        </div>

        <div className='bg-white flex justify-center flex-col px-6 py-3 box-modal-info'>
         <div className='flex gap-3 flex-col'>
         <span className='flex justify-between'>
                <p>Subtotal</p>
                <p>S/23.00</p>
            </span>
            <span className='flex justify-between'>
                <p>Envio</p>
                <p>S/0.00</p>
            </span>
            <span className='flex justify-between'>
                <b>Total</b>
                <b>S/23.00</b>
            </span>
         </div>
         <button className='mt-3 des-gradient px-2 py-2 text-white'>Comprar</button>
        </div>

        

      </div>
    </div>
  </>
  )
}

export default CartView