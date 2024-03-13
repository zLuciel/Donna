"use client"
import { createContext, useContext, useEffect, useState } from 'react';


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [dataProduct, setDataProduct] = useState([]);
    const [viewScroll, setViewScroll] = useState(false);
    

  return (
    <ProductContext.Provider value={{ dataProduct, setDataProduct,viewScroll,setViewScroll }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('ProductGlobal must be used within a SidebarProvider');
  }
  return context;
};