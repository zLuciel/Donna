import React from "react";

const FormPayment = () => {
  return (
    <>
      <h3 className="mb-4">
        <b>1. Información de Entrega</b>
      </h3>
      <form className="flex flex-col gap-3 border-form">
        <span className="flex gap-3">
          <div class="relative w-full">
            <input
              class="input-cal input-base"
              id="input"
              placeholder=""
              type="text"
            />
            <label id="label-input">Name</label>
          </div>
          <div class="relative w-full">
            <input
              class="input-cal input-base"
              id="input"
              placeholder=""
              type="text"
            />
            <label id="label-input">Apellido</label>
          </div>
        </span>
        <div class="relative">
          <input
            class="input-cal input-base"
            id="input"
            placeholder=""
            type="text"
          />
          <label id="label-input">Dirección</label>
        </div>
        <div class="relative">
          <input
            class="input-cal input-base"
            id="input"
            placeholder=""
            type="text"
          />
          <label id="label-input">Referencia</label>
        </div>
        <span className="flex gap-3">
          <div class="relative w-full">
            <input
              class="input-cal input-base"
              id="input"
              placeholder=""
              type="text"
            />
            <label id="label-input">Celular</label>
          </div>
          <div class="relative w-full">
            <input
              class="input-cal input-base"
              id="input"
              placeholder=""
              type="text"
            />
            <label id="label-input">Correo</label>
          </div>
        </span>
        <label className="flex gap-2 items-center">
          <input type="checkbox" />
          <p className="text-sm">Añade mas informacion para tu pedido</p>
        </label>
      </form>
    </>
  );
};

export default FormPayment;
