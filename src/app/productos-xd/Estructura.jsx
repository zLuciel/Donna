"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/slider/products/Card";
import BtnLoadingDinamic from "@/components/cargaDinamica/BtnLoadingDinamic";
import { dataProduct } from "./actions";
import CardProduct from "@/components/lading/CardProduct/CardProduct";
import { useProduct } from "../provider/ProviderContext";

import CardSkeleton from "@/components/lading/CardSkeleton/CardSkeleton";

const Estructura = () => {
  const { count, setCount, data, setData, filter } = useProduct();

  useEffect(() => {
    const getDataProduct = async (id) => {
      const dataRes = await dataProduct(id);
      setData(dataRes);
    };

    if (!filter) getDataProduct(count);
  }, [count, filter, setData]);

  return (
    <>
      {data.length === 0 && (
        <div className="mb-2 auto-product-grid ">
          <CardSkeleton /> 
          <CardSkeleton /> 
          <CardSkeleton /> 
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton /> 
          <CardSkeleton /> 
          <CardSkeleton /> 
          <CardSkeleton />
          <CardSkeleton />
        </div>
      )}
      {data.length !== 0 && (
        <div>
          <div className="mb-2 auto-product-grid">
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
