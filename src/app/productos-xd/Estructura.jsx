"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/slider/products/Card";
import BtnLoadingDinamic from "@/components/cargaDinamica/BtnLoadingDinamic";
import { dataProduct } from "./actions";
import CardProduct from "@/components/lading/CardProduct/CardProduct";
const Estructura = () => {
  const [count, setCount] = useState(20);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataProduct = async (id) => {
      const dataRes = await dataProduct(id);
      setData(dataRes);
    };

    getDataProduct(count);
  }, [count, setData]);


  return (
    <>
      {data.length === 0 && <h2>cargando</h2>}
      {data.length !== 0 && (
        <div>
          <div className="mb-2 auto-product-grid ">
            {data?.map((product) => (
              // <Card
              //   key={product.id}
              //   id={product.id}
              //   image={product.images[0]}
              //   name={product.name}
              //   price={product.price}
              //   regular_price={product.regular_price}
              // />
              <CardProduct
                key={product.id}
                categories={product.categories[0].name}
                id={product.id}
                regular_price={product.regular_price}
                price={product.price}
                name={product.name}
                image={product.images[0]}
              />
            ))}
          </div>
          <span className="flex justify-center align-center">
            <BtnLoadingDinamic setCount={setCount} count={count} />
          </span>
        </div>
      )}
    </>
  );
};

export default Estructura;
