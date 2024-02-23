import FilterProducto from "@/components/filterProduct/FilterProducto";
import Card from "@/components/slider/products/Card";
import React from "react";
import categoriaMap from "@/components/slider/categoria/mapCategoria";
const page = () => {
  return (
    <div className="lg:container mx-auto grid grid-cols-[500px_minmax(900px,_1fr)_100px]">
      <FilterProducto />

      <div className=" grid grid-cols-4 gap-3">
        {categoriaMap?.map((cate, i) => (
          <Card key={i} image={cate.image} />
        ))}
      </div>
    </div>
  );
};

export default page;
