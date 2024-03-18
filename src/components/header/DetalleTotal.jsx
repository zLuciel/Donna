import React from 'react'

const DetalleTotal = ({getTotalPrice}) => {
  return (
    <div className="flex gap-3 flex-col">
    <span className="flex justify-between">
      <p>Subtotal</p>
      <p>S/{getTotalPrice}.00</p>
    </span>
    <span className="flex justify-between">
      <p>Envio</p>
      <p>S/0.00</p>
    </span>
    <span className="flex justify-between">
      <b>Total</b>
      <b>S/{getTotalPrice}.00</b>
    </span>
  </div>
  )
}

export default DetalleTotal