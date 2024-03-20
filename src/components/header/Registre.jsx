"use client";
import Link from "next/link";
import React from "react";
import InputLogin from "./input/InputLogin";
import { useForm } from "react-hook-form";
import InputDinamic from "./input/InputDinamic";

const Registre = ({ setClassHidden }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="absolute  bottom-0 container-registrar">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white px-5  rounded-md arrow-login"
      >
        <h3 className="mb-5 text-center text-sm text-[#474747] ">
          <b>Completar Registro</b>
        </h3>
        <div className="flex flex-col gap-5">
          <span className="relative">
            <InputDinamic label={"Nombres"}>
              <input
                id="input"
                className="input-cal input-base setInput "
                type="text"
                placeholder=""
                {...register("name", {
                  required: true,
                  minLength: {value: 3, message: "minimo 3 caracteres"},
                  maxLength: {value: 9, message: "maximo 9 catacteres"},
                  pattern: { value: /^[A-Za-z]+$/ , message: "Ingrese solo letras" },
                })}
              />
            </InputDinamic>
            
            {errors.name && <span className="flex justify-center items-center"><p className="text-xs text-orange-700">{errors.name.message} </p></span>}
          </span>
          <span className="relative">
          <InputDinamic label={"Apellidos"}>
              <input
                id="input"
                className="input-cal input-base setInput "
                type="text"
                placeholder=""
                {...register("apellido", {
                  required: true,
                  minLength: {value: 5, message: "minimo 5 caracteres"},
                  maxLength: {value: 25, message: "maximo 25 catacteres"},
                  pattern: { value: /^[A-Za-z]+$/ , message: "Ingrese solo letras" },
                })}
              />
            </InputDinamic>
            
            {errors.apellido && <span className="flex justify-center items-center"><p className="text-xs text-orange-700">{errors.apellido.message} </p></span>}
          
          </span>
          <span className="relative">
          <InputDinamic label={"Correo"}>
              <input
                id="input"
                className="input-cal input-base setInput "
                type="text"
                placeholder=""
                {...register("correo", {
                  required: true,
                  pattern: { value: /^\S+@\S+$/i , message: "Gmail incorrecto" },
                })}
              />
            </InputDinamic>
            
            {errors.correo && <span className="flex justify-center items-center"><p className="text-xs text-orange-700">{errors.correo.message} </p></span>}
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
          <p className="mt-5 text-xs text-center text-zinc-500">
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
            <button
              onClick={() => setClassHidden(false)}
              className="mt-2 py-2 text-sm  font-bold p-1  w-full border border-[#ff4d00] text-[#575757] rounded-2xl"
            >
              <b>REGRESAR</b>
            </button>
            <button
              type="submit"
              className="mt-2  font-bold p-1  w-full btn-agre text-white rounded-2xl"
            >
              <b>REGISTRAR</b>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registre;
