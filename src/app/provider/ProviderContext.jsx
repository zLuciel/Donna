"use client";
import usePriceTotalHook from "@/hooks/usePriceTotalHook";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { createContext, useContext,  useState } from "react";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [dataProduct, setDataProduct] = useState([]);
  const { price } = usePriceTotalHook(0, dataProduct);
  const { sectionRefs, scrollToSection } = useSmoothScroll();
  const [count, setCount] = useState(20);
  const [filter, setFilter] = useState(false);
  const [data, setData] = useState([]);

  const value = {
    dataProduct,
    setDataProduct,
    price,
    sectionRefs,
    scrollToSection,
    count, setCount,
    data, setData,
    filter, setFilter
  };

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
