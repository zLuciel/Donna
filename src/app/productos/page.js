"use client"
import PageProduct from "@/components/lading/PageProduct/PageProduct"


const Page= ({searchParams}) => {
  // get parametros
  const $category = searchParams.get("categoria");
  const $mostrar = searchParams.get("mostrar")
  return (
    <PageProduct  $category={$category} $mostrar={$mostrar} />

  )
}

export default Page;
