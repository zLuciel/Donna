import React from 'react'

const BtnLoadingDinamic =  ({setCount,count}) => {

     function handleLoadingProduct(count) {
        setCount(count+10)
      }
  
  return (
    <button onClick={()=>handleLoadingProduct(count)} className="cargar_mas mt-6 font-bold px-3 py-1  w-full btn-agre text-white rounded-2xl">Cargar más</button>
  )
}

export default BtnLoadingDinamic