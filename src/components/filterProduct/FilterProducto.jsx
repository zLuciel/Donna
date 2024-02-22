import React from "react";
import CategoriasOptions from "./categoriaOption";
import Example from "./Example";
const FilterProducto = () => {
  return (
    <div className="lg:container mx-auto px-20 d-fl">
      <span>Filtro (34)</span>
      <span>Marca (3)</span>
      <CategoriasOptions />
      <Example/>
    </div>
  );
};

export default FilterProducto;
