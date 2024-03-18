import React from "react";
import Link from "next/link";
import InputLogin from "./input/InputLogin";
const LoginHeader = ({refOpenLogin}) => {
  return (
    <div ref={refOpenLogin} className="absolute  bottom-0 container-login">
      <form className="relative bg-white p-5 rounded-md arrow-login">
        <h3 className="mb-3 text-center text-xl"><b>Iniciar Sesion</b></h3>
        <div className="flex flex-col gap-5">
            <span className="relative">
               <InputLogin type={"text"} name={"username"} label={"Gmail"}/> 
            </span>
            
            <span className="relative">
               <InputLogin type={"password"} name={"password"} label={"Contraseña"}/> 
            </span>
          <p className="text-xs text-center text-zinc-500">Aun no tienes una cuenta ? <Link className="text-black" href={"/"}><b>Registrate</b></Link> </p>
        </div>
        <button
              className="mt-4  font-bold p-1  w-full btn-agre text-white rounded-2xl"
            >
              <Link className="py-2" href="/carrito-pago">
                <b>ENTRAR</b>
              </Link>
            </button>
      </form>
    </div>
  );
};

export default LoginHeader;
