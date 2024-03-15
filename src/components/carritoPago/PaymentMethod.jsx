import { Checkbox } from "@mantine/core";
import React from "react";

const PaymentMethod = ({ formData, handleChange,checkCE, setCheckCE }) => {
  return (
    <div className="mt-7">
      <h3>
        <b>2. Método de Pago</b>
      </h3>

      <div className="border-form mt-3">
        <p className="text-sm">
          Todas las transacciones son seguras y están encriptadas
        </p>

        {/* chekbox */}
        <div className="mt-4 flex flex-col gap-3">
          <Checkbox
           checked={checkCE}
           onChange={(event) => setCheckCE(event.currentTarget.checked)}
            label="Contra Entrega"
            color="#f80000"
            radius="xl"
          />
          <Checkbox
            
            label="Monedero Digital"
            color="#f80000"
            radius="xl"
          />
        </div>
      </div>
      {/* termino condiciones */}
      <label className="flex gap-2 items-start justify-start mt-7">
        <p className="text-xs">
          He leído y acepto los Términos y Condiciones de compra en Wong.pe.
          Acepto igualmente la Política de Privacidad y Seguridad
        </p>
      </label>
      <div className="flex flex-col gap-3 mt-7 items-center justify-center">
        <button
          className="font-bold p-1 py-2 w-full btn-agre text-white rounded-3xl"
        >
          <b>PAGAR AHORA</b>
        </button>
        <button
          className="font-bold p-1 py-2 bg-slate-200 text-black w-full  text-white rounded-3xl"
        >
          <b>SEGUIR COMPRANDO</b>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
