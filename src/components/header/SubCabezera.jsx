import Link from 'next/link'
import React from 'react'

const SubCabezera = () => {
  return (
    <div className=" bg-zinc-950 px-10 hidden  lg:block md:block ">
        <div className="lg:container lg:mx-auto flex justify-between text-white  p-2">
          <h4 className="leading-5 text-xs">
            Atención al cliente: (01) 345 - 234
          </h4>
          <span>
            <ul className="flex gap-10">
              <li className="leading-5 text-xs">venta telefónica</li>
              <li className="leading-5 text-xs">
                <Link href="/productos">productos</Link>
              </li>
              <li className="leading-5 text-xs">
                <Link href="/promociones">promociones</Link>
              </li>
              <li className="leading-5 text-xs">
                <Link href="/tiendas">tiendas</Link>
              </li>
              <li className="leading-5 text-xs">centro de ayuda</li>
            </ul>
          </span>
        </div>
      </div>
  )
}

export default SubCabezera