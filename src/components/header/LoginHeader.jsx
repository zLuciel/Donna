import React from "react";
import InputLogin from "./input/InputLogin";
const LoginHeader = ({ setClassHidden, setViewLogin }) => {

  function handleP(){
   
    setViewLogin(false)
  }

  return (
    <div className="absolute  bottom-0 container-login">
      <form className="relative bg-white px-5  rounded-md arrow-login">
        <h3 className="mb-5 text-center text-sm text-[#474747] ">
          <b>Entra con tu e-mail y contraseña</b>
        </h3>
        <div className="flex flex-col gap-5">
          <span className="relative">
            <InputLogin type={"text"} name={"username"} label={"Correo"} />
          </span>

          <span className="relative">
            <InputLogin
              type={"password"}
              name={"password"}
              label={"Contraseña"}
            />
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <p className="text-center text-xs text-gray-800 text-[#ff4d00]">
            Olvide mi contraseña
          </p>
          <div className="flex gap-3">
            <button onClick={handleP} type="button" className="mt-2  font-bold p-1  w-full border border-[#ff4d00] text-[#575757] rounded-2xl">
                <b>CERRAR</b>
            </button>
            <button type="submit" className="mt-2  font-bold p-1  w-full btn-agre text-white rounded-2xl">     
                <b>ENTRAR</b>
            </button>
          </div>
        </div>
        <p
          onClick={() => setClassHidden(true)}
          className="mt-5 text-xs text-center text-zinc-500"
        >
          Aun no tienes una cuenta ?{" "}
          <b className="text-[#ff4d00]">Registrate</b>
        </p>
      </form>
    </div>
  );
};

export default LoginHeader;
