"use client"
import InputLogin from '@/components/header/input/InputLogin'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='mx-auto py-6 px-4'>
    <form className="relative bg-white px-5  rounded-md arrow-login">
    <h3 className="mb-5 text-center text-sm text-[#474747] "><b>Entra con tu e-mail y contraseña</b></h3>
    <div className="flex flex-col gap-5">
        <span className="relative">
           <InputLogin type={"text"} name={"username"} label={"Correo"}/> 
        </span>
        
        <span className="relative">
           <InputLogin type={"password"} name={"password"} label={"Contraseña"}/> 
        </span>
    </div>
    <div className="flex flex-col gap-2 mt-5">
    <p className="text-center text-xs text-gray-800 text-[#ff4d00]">Olvide mi contraseña</p>
         <div className="flex gap-3">
         <button
          className="mt-2  font-bold p-1  w-full border border-[#ff4d00] text-[#575757] rounded-2xl"
        >
          <Link className="py-2 text-sm" href="/">
          <b>CERRAR</b>
          </Link>
        </button>
         <button
          className="mt-2  font-bold p-1  w-full btn-agre text-white rounded-2xl"
        >
          <Link className="py-2 text-sm" href="/">
            <b>ENTRAR</b>
          </Link>
        </button>
         </div>
    </div>
    <div className='flex items-center justify-center'>
         <Link href={"/registrar"} className="mt-5 text-xs text-center text-zinc-500">Aun no tienes una cuenta ? <b className="text-[#ff4d00]">Registrate</b></Link>
    </div>
   
  </form>
  </div>
  )
}

export default Login