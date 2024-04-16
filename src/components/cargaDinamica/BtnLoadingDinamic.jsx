"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BtnLoadingDinamic = ({ count, categoria }) => {
  const router = useRouter();

  function handleLoadingProduct(count,categoria) {
    if(categoria) {
      router.replace(
        `/productos?categoria=${categoria}&mostrar=${count + 10}`,
        { scroll: false }
      );
    } else {
      router.replace(`/productos?mostrar=${count + 10}`, { scroll: false });
    }
  }

  return (
    <button
      onClick={() => handleLoadingProduct(count,categoria)}
      className="cargar_mas mt-6 font-bold px-3 py-1  w-full btn-agre text-white rounded-2xl"
    >
      Cargar más
    </button>
  );
};

export default BtnLoadingDinamic;
