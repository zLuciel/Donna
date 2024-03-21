import React from "react";
import CategoriasOptions from "./categoriaOption";
const FilterProducto = () => {
  return (
    <div className="hidden  lg:block md:block ">
     <div className="sticky top-20">
     <h1 className="text-2xl mb-3 font-extrabold ">Abarrotes</h1>
      <h2 className="mb-3 roboto_bold">Filtros aplicados</h2>
      {/* <div className="flex flex-col gap-3 mb-3">
      <span className="bg-red-600 w-max text-white py-1 px-5 rounded-3xl">Filtro (34)</span>
      <span className="bg-red-600  w-max text-white py-1 px-5 rounded-3xl">Marca (3)</span>
      </div> */}
      <CategoriasOptions name="Categorias"/>
      <CategoriasOptions name="Sub - Categorias"/>
      <CategoriasOptions name="Marca"/>
      <CategoriasOptions name="País de origen"/>
      <CategoriasOptions name="Tipo de Producto"/>
     </div>
    </div>
  );
};

export default FilterProducto;
