"use client"
import React from 'react'
import ItemsCart from '../header/ItemsCart'
import { useProduct } from '@/app/provider/ProviderContext';
import DetalleTotal from '../header/DetalleTotal';

const Resumen = () => {
    const { dataProduct, setDataProduct,price } = useProduct();

  return (
    <div>
        <h3 className='px-4 mb-3'><b>Resumen de tu pedido</b></h3>

        <div style={{maxWidth:"400px"}} className='flex flex-col gap-3'>
             <div className='flex flex-col gap-4 scroll-items'>
        {dataProduct.map((product) => (
             <ItemsCart shadow={false} setAddedProducts={setDataProduct} key={product.id} title={product.name}  image={product.image}
             price={product.price}
             quantity={product.quantity}
             id_product={product.id}
             price_regular={product.regular_price} />
        ))}
        </div>
        <div className="py-4 px-10">
             <DetalleTotal getTotalPrice={price}/>
        </div>
       
        </div>
       
    </div>
  )
}

export default Resumen