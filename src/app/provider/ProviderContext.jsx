"use client";
import usePriceTotalHook from "@/hooks/usePriceTotalHook";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [dataProduct, setDataProduct] = useState([]);
  const { price } = usePriceTotalHook(0, dataProduct);
  const value = { dataProduct, setDataProduct, price };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("ProductGlobal must be used within a SidebarProvider");
  }
  return context;
};
