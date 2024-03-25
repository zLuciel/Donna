"use client"
import InputLogin from "@/components/header/input/InputLogin";
import Link from "next/link";
import React from "react";

const Registrar = () => {
  return (
    <div className="mx-auto py-6 px-4">
      <form className="relative bg-white px-5  rounded-md arrow-login">
        <h3 className="mb-5 text-center text-sm text-[#474747] ">
          <b>Completar Registro</b>
        </h3>
        <div className="flex flex-col gap-5">
          <span className="relative">
            <InputLogin type={"text"} name={"name"} label={"Nombres"} />
          </span>
          <span className="relative">
            <InputLogin type={"text"} name={"apellido"} label={"Apellidos"} />
          </span>
          <span className="relative">
            <InputLogin type={"text"} name={"gmail"} label={"Correo"} />
          </span>

          <span className="relative">
            <InputLogin
              type={"password"}
              name={"password"}
              label={"Contraseña"}
            />
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <p className="mt-5 mb-4 text-xs text-center text-zinc-500">
            Al registrarme acepto los 
            <Link className="text-[#ff4d00]" href={"/"}>
              <b>Términos y Condiciones</b>
            </Link>
             de compra en Wong.pe. Acepto igualmente la 
            <Link className="text-[#ff4d00]" href={"/"}>
              <b>Política de Privacidad </b>
            </Link>
          </p>
          <div className="flex gap-3">
            <Link
              href={"/login"}
              className="text-center mt-2 py-2 text-sm  font-bold p-1  w-full border border-[#ff4d00] text-[#575757] rounded-2xl"
            >
              <b>REGRESAR</b>
            </Link>
            <button className="mt-2  font-bold p-1  w-full btn-agre text-white rounded-2xl">
              <Link className="py-2 text-sm" href="/">
                <b>REGISTRAR</b>
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registrar;
