import React from "react";

const PaymentMethod = () => {
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
        <div className="mt-4">
          <div className="checkbox-wrapper-18 mb-4 flex gap-2 items-center">
            <div className="round">
              <input type="checkbox" id="checkbox-18" />
              <label htmlFor ="checkbox-18"></label>
            </div>
            <p>Contra entrega</p>
          </div>
          <div className="checkbox-wrapper-18 flex gap-2 items-center">
            <div className="round">
              <input type="checkbox" id="checkbox-18" />
              <label htmlFor="checkbox-18"></label>
            </div>
            <p>Monedero Digital</p>
          </div>
        </div>
      </div>
       {/* termino condiciones */}
       <label className="flex gap-2 items-start justify-start mt-7">
          <input type="checkbox" />
          <p className="text-sm">He leído y acepto los Términos y Condiciones de compra en Wong.pe. Acepto igualmente la Política de Privacidad y Seguridad</p>
        </label>
        <div className="flex items-center justify-center">
        <button style={{width:"240px"}} className="mt-7 font-bold p-1  w-full btn-agre text-white rounded-2xl">
          <b>PAGAR AHORA</b>
        </button>
        </div>
    </div>
  );
};

export default PaymentMethod;
