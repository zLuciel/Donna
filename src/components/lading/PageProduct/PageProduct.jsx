"use client"
import HeaderLanding from '@/components/lading/header/HeaderLanding'
import HeaderLandingResponsive from '@/components/lading/header/HeaderLandingResponsive';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react'
import MainProductos from '@/components/lading/main_productos/MainProductos';
import CategoriaLanding from '@/components/lading/Categoria/Categoria';

import { useProduct } from '@/app/provider/ProviderContext';
import Estructura from '@/app/productos-xd/Estructura';

const PageProduct = ({$category,$mostrar}) => {
    const matches = useMediaQuery('(max-width: 663px)');
    const { sectionRefs } = useProduct();

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

export default PageProduct
