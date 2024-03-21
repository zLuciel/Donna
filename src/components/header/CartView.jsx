"use client";
import { useEffect, useRef } from "react";
import React from "react";
import ItemsCart from "./ItemsCart";
import { IoClose } from "react-icons/io5";
import DetalleTotal from "./DetalleTotal";
import Link from "next/link";
import useClickOutside from "@/hooks/useClickOutside";
import Cart from "../svg/Cart";
const CartView = ({
  viewCartw,
  setCartView,
  getTotalPrice,
  addedProducts,
  setAddedProducts,
}) => {
  const contenedorRef = useRef();
  const vacioFlex = addedProducts.length === 0 ? "flex justify-center items-center" : "grid-modal-cart"
  useClickOutside(contenedorRef, () => {
    setCartView(false);
    document.body.classList.replace('notviewScroll', 'viewScroll');
  });

  useEffect(() => {
    const existingProducts =
      JSON.parse(localStorage.getItem("addedProducts")) || [];
    setAddedProducts(existingProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewCartw]);

  function handleShoping() {
    setCartView(false);
    document.body.classList.replace("notviewScroll", "viewScroll");
  }
  return (
    <>
      <div className={viewCartw ? "absolute modal-cart " : "hidden"}>
        <div
          ref={contenedorRef}
          className={`modal-cart-bg bg-[#FBFBFB] ${vacioFlex}  relative`}
        >
          {addedProducts.length === 0 &&
            <div className="flex roboto_regular flex-col items-center gap-3">
              <Cart />
              Tu carrito esta vacio.
            </div>
          }
          {addedProducts.length !== 0  && <>
          <div className="py-1">
            <span>
              <button
                onClick={handleShoping}
                className="text-2xl p-2"
              >
                <IoClose />
              </button>
              <h2 className="mb-2 text-2xl text-center font-extrabold">Carrito</h2>
            </span>

            <p className="roboto_regular text-center mb-2">
              Tines {addedProducts.length} item
            </p>
          </div>

          <div className="flex gap-4 flex-col scroll-items px-6 py-3 ">
            {addedProducts.map((product) => (
              <ItemsCart
                setAddedProducts={setAddedProducts}
                key={product.id}
                title={product.name}
                image={product.image}
                price={product.price}
                shadow={true}
                quantity={product.quantity}
                id_product={product.id}
                price_regular={product.regular_price}
              />
            ))}
          </div>

          <div className="bg-white flex justify-center flex-col px-10 py-3 box-modal-info">
            <DetalleTotal getTotalPrice={getTotalPrice} />
            <button
              onClick={handleShoping}
              className="mt-4  font-bold p-1  w-full btn-agre text-white rounded-2xl"
            >
              <Link className="py-2 roboto_bold" href="/carrito-pago">
                <b>Comprar</b>
              </Link>
            </button>
          </div> 
          </>}
        </div>
      </div>
    </>
  );
};

export default CartView;
