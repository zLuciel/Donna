import FilterProducto from "@/components/filterProduct/FilterProducto";
import Card from "@/components/slider/products/Card";
import React from "react";
import categoriaMap from "@/components/slider/categoria/mapCategoria";
const page = () => {
  return (
    <div className="container px-8 mx-auto gap-3 py-10 grid grid-cols-[180px_1fr]">
      <FilterProducto />
      {/* grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3 */}
      <div className="auto-product-grid ">
        {categoriaMap?.map((cate, i) => (
          <Card key={i} image={cate.image} />
        ))}
      </div>
    </div>
  );
};

export default page;
