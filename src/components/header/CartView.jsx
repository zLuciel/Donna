"use client";
import { useEffect, useRef} from "react";
import React from "react";
import ItemsCart from "./ItemsCart";
import { IoClose } from "react-icons/io5";
const CartView = ({ viewCartw, setCartView,getTotalPrice, addedProducts, setAddedProducts}) => {
  const contenedorRef = useRef();
  

  useEffect(() => {
    function manejarClicFuera(evento) {
      if (
        contenedorRef.current &&
        !contenedorRef.current.contains(evento.target)
      ) {
        if (!evento.target.matches(".modal-cart-bg")) {
          setCartView(false);
        }
      }
    }

    // Agregar el listener de eventos cuando el componente se monta
    document.addEventListener("mousedown", manejarClicFuera);

    // Limpiar el listener de eventos cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", manejarClicFuera);
    };
  }, [setCartView]);
  
  useEffect(() => {
    const existingProducts = JSON.parse(localStorage.getItem('addedProducts')) || [];
    setAddedProducts(existingProducts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewCartw]);



  return (
    <>
      <div className={viewCartw ? "absolute modal-cart " : "hidden"}>
        <div
          ref={contenedorRef}
          className="modal-cart-bg bg-[#FBFBFB] grid-modal-cart relative"
        >
          <div className="py-1">
            <span>
              <button
                onClick={() => setCartView(false)}
                className="text-2xl p-2"
              >
                <IoClose />
              </button>
              <h2 className="mb-2 text-2xl text-center">Carrito</h2>
            </span>

            <p className="text-center mb-2">Tines {addedProducts.length} item</p>
          </div>

          <div className="flex gap-4 flex-col scroll-items px-6 py-3 ">
          {addedProducts.map((product) => (
             <ItemsCart setAddedProducts={setAddedProducts} key={product.id} title={product.name}  image={product.image}
             price={product.price}
             quantity={product.quantity}
             id_product={product.id}
             price_regular={product.regular_price} />
        ))}
           
          </div>

          <div className="bg-white flex justify-center flex-col px-10 py-3 box-modal-info">
            <div className="flex gap-3 flex-col">
              <span className="flex justify-between">
                <p>Subtotal</p>
                <p>S/{getTotalPrice()}</p>
              </span>
              <span className="flex justify-between">
                <p>Envio</p>
                <p>S/0.00</p>
              </span>
              <span className="flex justify-between">
                <b>Total</b>
                <b>S/{getTotalPrice()}</b>
              </span>
            </div>
            <button className="mt-4 font-bold p-1  w-full btn-agre text-white rounded-2xl">
              <b>Comprar</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartView;





