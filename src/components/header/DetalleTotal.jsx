import React from 'react'

const DetalleTotal = ({getTotalPrice}) => {
  return (
    <div className="flex gap-3 flex-col">
    <span className="flex justify-between">
      <p className='roboto_regular'>Subtotal</p>
      <p className='roboto_regular'>S/{getTotalPrice}.00</p>
    </span>
    <span className="flex justify-between">
      <p className='roboto_regular'>Envio</p>
      <p className='roboto_regular'>S/0.00</p>
    </span>
    <span className="flex justify-between">
      <b className='roboto_bold'>Total</b>
      <b className='roboto_bold'>S/{getTotalPrice}.00</b>
    </span>
  </div>
  )
}

export default DetalleTotal