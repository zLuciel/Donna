"use client"
import FormPayment from "@/components/carritoPago/FormPayment";
import PaymentMethod from "@/components/carritoPago/PaymentMethod";
import Resumen from "@/components/carritoPago/Resumen";

import React, { useState } from "react";

const initForm = {
  nombre: "",
  apellido: "",
  email: "",
  celular: "",
  direction: "",
  referencia: "",
};

const CarritoPago = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initForm);
  const [checkCE, setCheckCE] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
 
    if (!formData.nombre.trim()) {
      errors.nombre = "El nombre es obligatorio";
    }else if(!/^[a-z0-9_-]{3,15}$/.test(formData.nombre)){
      errors.nombre = "Nombre inválido";
    }

    if (!formData.apellido.trim()) {
      errors.apellido = "El apellido es obligatorio";
    }else if(!/^[a-z0-9_-]{3,15}$/.test(formData.apellido)){
      errors.apellido = "apellido inválido";
    }

    if (!formData.referencia.trim()) {
      errors.referencia = "El nombre es obligatorio";
    }

    if (!formData.celular.trim()) {
      errors.celular = "El celular es obligatorio";
    }else if(!/^\d{9}$/.test(Number(formData.celular))){
      errors.celular = "ingrese un numero correcto";
    }

    if (!formData.email.trim()) {
      errors.email = "El correo electrónico es obligatorio";
    } else if (!/^\S+@\S+$/.test(formData.email)) {
      errors.email = "Correo electrónico inválido";
    }

    if (Object.keys(errors).length === 0) {
      // Aquí puedes manejar el envío del formulario
      console.log("Datos del formulario:", formData);
      // Limpia el formulario después del envío
      setFormData(initForm);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="lg:container place-items-center gap-3 mx-auto grid grid-cols-2 py-8 sm:px-10 md:px-10 lg:px-20 px-5">
      <form onSubmit={handleSubmit} className="self-start">
        <FormPayment handleChange={handleChange} errors={errors} formData={formData} />
        <PaymentMethod checkCE={checkCE} setCheckCE={setCheckCE} formData={formData} handleChange={handleChange}/>
      </form>
      <div className="self-start">
        <Resumen />
      </div>
    </div>
  );
};

export default CarritoPago;
