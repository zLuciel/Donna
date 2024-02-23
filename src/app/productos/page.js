import FilterProducto from "@/components/filterProduct/FilterProducto";
import Card from "@/components/slider/products/Card";
import React from "react";
import categoriaMap from "@/components/slider/categoria/mapCategoria";
const page = () => {
  return (
    <div className="container px-8 mx-auto  grid grid-cols-[200px_1fr]">
      <FilterProducto />
      <div className=" grid grid-cols-5 gap-3">
        {categoriaMap?.map((cate, i) => (
          <Card key={i} image={cate.image} />
        ))}
      </div>
    </div>
  );
};

export default page;
