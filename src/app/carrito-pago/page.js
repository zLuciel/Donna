import FormPayment from '@/components/carritoPago/FormPayment'
import MapCart from '@/components/carritoPago/MapCart'
import PaymentMethod from '@/components/carritoPago/PaymentMethod'
import Resumen from '@/components/carritoPago/Resumen'
import React from 'react'

const CarritoPago = () => {
  return (
    <div className='lg:container place-items-center mx-auto grid grid-cols-2 py-8 sm:px-10 md:px-10 lg:px-20 px-5'>
        <div className='self-start'>
            <FormPayment/>
            <PaymentMethod/>
            
        </div>
        <div>
            <Resumen/>
        </div>
    </div>
  )
}

export default CarritoPago