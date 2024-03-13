"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
const ItemsCart = ({
  setAddedProducts,
  title,
  quantity,
  id_product,
  price,
  price_regular,
  image,
}) => {
  const local = JSON.parse(localStorage.getItem("addedProducts")) || [];
  const localid = local.find((product) => product.id == id_product);
  const [newQuantity, setQuantiny] = useState(localid.quantity);

  useEffect(() => {
    const updateLocalStorage = (id_product, newQuantity) => {
      const cartProducts =
        JSON.parse(localStorage.getItem("addedProducts")) || [];
      const productIndex = cartProducts.findIndex(
        (product) => product.id == id_product
      );

      if (productIndex !== -1) {
        cartProducts[productIndex].quantity = newQuantity;
        localStorage.setItem("addedProducts", JSON.stringify(cartProducts));
      }
      setAddedProducts(cartProducts);
    };
    updateLocalStorage(id_product, newQuantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newQuantity]);
  
  function deleteLocal(id_product){
    const cartProducts = JSON.parse(localStorage.getItem("addedProducts")) || [];
    const result = cartProducts.filter(product => product.id != id_product);
    localStorage.setItem("addedProducts", JSON.stringify(result));
    setAddedProducts(JSON.parse(localStorage.getItem("addedProducts")))
  }

  function decrementQuantity() {
    if (newQuantity !== 1) setQuantiny(newQuantity - 1);
  }
  return (
    <div className="flex justify-between items-cart p-4  container-items-cart">
      <div className="flex gap-4 justify-start items-center">
        <div style={{ width: "80px", height: "62px" }} className="relative">
          <Image
            style={{ objectFit: "contain" }}
            src={image}
            fill
            alt="producto"
          />
        </div>

        <div>
          <p className="text-sm mb-1">{title}</p>

          <div className="flex items-center  gap-2">
            <span className="numberItems flex justify-center items-center">
              {quantity}
            </span>
            <span className="flex flex-col justify-center gap-1">
              <button
                className="bg-[#414141] text-white rest-btn"
                onClick={() => setQuantiny(newQuantity + 1)}
              >
                +
              </button>
              <button
                className="bg-[#9B9B9B] text-white mas-btn"
                onClick={decrementQuantity}
              >
                -
              </button>
            </span>
            <span>
              <h3 style={{ color: "red" }}>S/ {price}</h3>
              <u className="text-xs line-through">S/ {price_regular} </u>
            </span>
          </div>
        </div>
      </div>
      <MdDeleteForever className="text-lg cursor-pointer"  onClick={()=>deleteLocal(id_product)}/>
    </div>
  );
};

export default ItemsCart;
