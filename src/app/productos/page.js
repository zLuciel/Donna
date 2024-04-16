"use client";
import HeaderLanding from '@/components/lading/header/HeaderLanding'
import HeaderLandingResponsive from '@/components/lading/header/HeaderLandingResponsive';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react'
import Estructura from '../productos-xd/Estructura';
import MainProductos from '@/components/lading/main_productos/MainProductos';
import { useProduct } from '../provider/ProviderContext';
import CategoriaLanding from '@/components/lading/Categoria/Categoria';
import {useSearchParams } from 'next/navigation';

const ProductosLanding = () => {
    const matches = useMediaQuery('(max-width: 663px)');
    const { sectionRefs } = useProduct();
    const searchParams = useSearchParams();
    // get parametros
    const $category = searchParams.get("categoria");
    const $mostrar = searchParams.get("mostrar")

    console.log(Number($category));
    console.log($mostrar);

  return (
    <>
       {!matches && <HeaderLanding />}
       {matches && <HeaderLandingResponsive/>}
       <MainProductos/>
       <CategoriaLanding categoria={$category} section={sectionRefs.productos}  filter={true} />
       <section className='lg:container mx-auto px-6 py-20'>
       <Estructura categoria={Number($category)} mostrar={Number($mostrar)}  />
       </section>
    </>
  )
}

export default ProductosLanding
