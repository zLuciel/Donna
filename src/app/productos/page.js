"use client";
import HeaderLanding from '@/components/lading/header/HeaderLanding'
import HeaderLandingResponsive from '@/components/lading/header/HeaderLandingResponsive';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react'
import Estructura from '../productos-xd/Estructura';
import MainProductos from '@/components/lading/main_productos/MainProductos';
import { useProduct } from '../provider/ProviderContext';
import CategoriaLanding from '@/components/lading/Categoria/Categoria';

const ProductosLanding = () => {
    const matches = useMediaQuery('(max-width: 663px)');
    const { sectionRefs } = useProduct();
  return (
    <>
       {!matches && <HeaderLanding />}
       {matches && <HeaderLandingResponsive/>}
       <MainProductos/>
       <CategoriaLanding section={sectionRefs.productos} />
       <section className='lg:container mx-auto px-6 py-20'>
       <Estructura/>
       </section>
    </>
  )
}

export default ProductosLanding
