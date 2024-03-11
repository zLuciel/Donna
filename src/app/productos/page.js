"use client"

import BtnLoadingDinamic from "@/components/cargaDinamica/BtnLoadingDinamic";
import FilterProducto from "@/components/filterProduct/FilterProducto";
import Card from "@/components/slider/products/Card";
import { useEffect, useState } from "react";
import { dataProduct } from "./actions";


const page =  () => {
  const [count,setCount] = useState(20)
  const [data,setData] = useState([])
  /*const data = await getDataProduct(count);*/
  useEffect(() => {
    const getDataProduct = async (id) => {
      const dataRes = await dataProduct(id)
      console.log(dataRes);
      setData(dataRes)
    }
 
    getDataProduct(count)
  }, [count, setData])

  return (
    <div className="container px-8 mx-auto gap-3 py-10 grid lg:grid-cols-[220px_1fr]">
      <FilterProducto />
      {/* grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3 */}
      <div>
      <div className="mb-2 auto-product-grid ">
        {data?.map((product) => (
          <Card
            key={product.id}
            image={product.images[0]}
            name={product.name}
            price={product.price}
            regular_price={product.regular_price}
          />
        ))}
      </div>
      <span className="flex justify-center align-center">
      <BtnLoadingDinamic setCount={setCount} count={count}/>
      </span>
      </div>
    </div>
  );
};

export default page;
