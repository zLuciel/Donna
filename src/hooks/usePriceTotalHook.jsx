import { useState, useEffect } from 'react';

function usePriceTotalHook(initialValue, dataProduct) {
  const [price, setPrice] = useState(initialValue);

  useEffect(() => {
    getTotalPrice(dataProduct);
  }, [dataProduct]);

  function getTotalPrice(dataProduct) {
    let totalPrice = 0;
    dataProduct.forEach((product) => {
      const price = parseFloat(product.price) || 0;
      const quantity = product.quantity || 1;
      totalPrice += price * quantity;
    });
    // Agregar formato de moneda
    const formattedPrice = new Intl.NumberFormat("de-DE", {currency: "PEN" }).format(totalPrice);
    // Actualizar el estado de price con el precio total calculado
    setPrice(formattedPrice);
  }

  return {
    price,
  };
}

export default usePriceTotalHook;


